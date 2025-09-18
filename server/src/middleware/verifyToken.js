import jwt from 'jsonwebtoken'
import { catchAsycn } from '../utility/catchAsynch.js'
import { AppError } from '../utility/errorHandler.js'
export const verifyToken = catchAsycn(async(req, res, next)=>{
        const authHeader = req.headers['authorization']
        const token = authHeader&& authHeader.split(' ')[1]
        console.log(token)
        if(!token){
            throw new AppError(401, 'Not authenticated')
        }
        const isVerified = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY)
        if(!isVerified){
            throw new AppError(403, 'Not authorized')
        }
        req.userId = isVerified.id
        req.role = isVerified.role
        next()

        

})