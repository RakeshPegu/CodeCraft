import tokenModel from "../lib/tokendb.js"
import { catchAsycn } from "../utility/catchAsynch.js"
import { AppError } from "../utility/errorHandler.js"
import { generateToken } from "../utility/generateToken.js"
import verifyRefreshToken from "../utility/verifyRefreshToken.js"
import jwt from 'jsonwebtoken'



export const refreshTokenFunction =catchAsycn(async(req, res)=>{    
        const currentRefreshToken = req.cookies.refreshToken   
        if(!currentRefreshToken){
            throw new AppError(401, 'Authentication is required')
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