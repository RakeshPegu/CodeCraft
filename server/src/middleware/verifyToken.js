import jwt from 'jsonwebtoken'
import { catchAsycn } from '../utility/catchAsynch.js'
import { AppError } from '../utility/errorHandler.js'
export const verifyToken = catchAsycn(async(req, res, next)=>{
        const authHeader = req.headers['authorization']
        const token = authHeader&& authHeader.split(' ')[1]
        if(!token){
            throw new AppError(401, 'Not authenticated')
        }
        let isVerified 
        try {
            isVerified = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY)
            
        } catch (error) {
            if(error.name = 'TokenExpiredError'){
                throw new AppError(401, 'Expired token')
            }
            throw new AppError(401, 'Invalid token')
            
        }
         
            
        req.userId = isVerified.id
        req.role = isVerified.role
        next()

        

})