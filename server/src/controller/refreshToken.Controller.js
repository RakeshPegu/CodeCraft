import { tokenModel } from "../lib/tokendb.js"
import { catchAsycn } from "../utility/catchAsynch.js"
import { AppError } from "../utility/errorHandler.js"
import generateToken from "../utility/generateToken.js"
import verifyRefreshToken from "../utility/verifyRefreshToken.js"

export const refreshToken =catchAsycn(async(req, res)=>{
        const refresh_token = req.cookies.refreshToken
        console.log(refresh_token)
        const result = await tokenModel.findOne({token:refresh_token})
        if(!result){
            throw new AppError(403, 'Invalid password')
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
               
})