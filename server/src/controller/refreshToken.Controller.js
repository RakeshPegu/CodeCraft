import { catchAsycn } from "../utility/catchAsynch.js"
import client from "../utility/connectRedis.js"
import { AppError } from "../utility/errorHandler.js"
import { generateToken } from "../utility/generateToken.js"
import { TokenBlackList } from "../utility/tokenBlackLIst.js"
import jwt from 'jsonwebtoken'



export const refreshTokenFunction =catchAsycn(async(req, res)=>{    
        const currentRefreshToken = req.cookies.refreshToken 
        const decodedPayload = jwt.decode(currentRefreshToken)
        const refreshTokenKey = `refresh_token:${decodedPayload.id}`
        const exist = await client.exists(refreshTokenKey)
        if(!exist){
            throw new AppError(401, 'Invalid refresh token here')

        }
        const blacklist = new TokenBlackList()
        const isBlacklisted = await blacklist.isBlackListedRefreshToken(currentRefreshToken)
        if(isBlacklisted){
            throw new AppError(401, 'refreshToken token is blacklisted')
        }

        let tokenDetail          
        try {
         tokenDetail = jwt.verify(currentRefreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY) 
            
        } catch (error) {
            if(error.name = 'TokenExpiredError'){
                throw new AppError(401, 'Refresh token has expired, Please log in again')
            }
            throw new AppError(403, 'Invalid token')
        } 
        if(!tokenDetail){
            throw new AppError(403, 'Invalid refreshToken')
        }  
        const _id = tokenDetail.id 
        const role = tokenDetail.role
        const payload ={_id:_id, role:role}
        const {accessToken, refreshToken:newRefreshToken} = await generateToken(payload)  
        res.cookie('refreshToken', newRefreshToken,{
            maxAge:1000*60*60*24*30,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true} ) 
        res.status(200).json({accessToken})
               
})