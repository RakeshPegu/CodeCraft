import jwt from 'jsonwebtoken'
import { tokenModel } from '../lib/tokendb.js'
const generateToken = async(user)=>{
    try {
        const payload = {id:user._id, role:user.role}
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, {expiresIn:"15m"})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_PRIVATE_KEY, {expiresIn:"30d"})
        await tokenModel.findOneAndDelete({userId:payload.id})
        await new tokenModel({userId:payload.id, token:refreshToken }).save()
        return {accessToken, refreshToken}
        
    } catch (error) {
        throw new Error(error)
        
    }

}
export default generateToken;