import { tokenModel } from "../lib/tokendb.js"
import generateToken from "../utility/generateToken.js"
import verifyRefreshToken from "../utility/verifyRefreshToken.js"

export const refreshToken = async(req, res)=>{
    const refresh_token = req.cookies.refreshToken
    try {
        console.log(refresh_token)
        const result = await tokenModel.findOne({token:refresh_token})
        if(!result){
            return res.status(403).json({success:false, message:'Invalid refresh token'})
        }
        const {tokenDetails} = await verifyRefreshToken(refresh_token)
        const payload = {_id:tokenDetails._id, role:tokenDetails.role}
        const {accessToken, refreshToken} = generateToken(payload)
        res.cookie('refreshToken',refreshToken, {
             maxAge:1000*60*60*24*30,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'?true:false,
            httpOnly:true

        })
        res.status(200).json({accessToken})
               
    } catch (error) {
        res.status(500).json({success:false, message:'new Refresh token failed to get'})
        
    }
}