import tokenModel from "../lib/tokendb.js"
import { catchAsycn } from "../utility/catchAsynch.js"
import { AppError } from "../utility/errorHandler.js"
import { generateToken } from "../utility/generateToken.js"
import verifyRefreshToken from "../utility/verifyRefreshToken.js"



export const refreshToken =catchAsycn(async(req, res)=>{
        const refresh_token = req.cookies.refreshToken
        console.log(refresh_token)
        const existingToken = await tokenModel.findOne({token:refreshToken})
        if(!existingToken){
         return new AppError('Invalid refresh token')
        }              
        const tokenDetail = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY)   
        const _id = tokenDetail.id 
        const role = tokenDetail.role
        const payload ={_id:_id, role:role}
        const {accessToken, refreshToken} = await generateToken(payload)  
        res.cookie(refreshToken, 'refreshToken',{
            maxAge:1000*60*60*24*30,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true} ) 
        res.status(200).json({accessToken})
               
})