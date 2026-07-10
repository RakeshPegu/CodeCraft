import jwt from 'jsonwebtoken'
import { catchAsycn } from '../utility/catchAsynch.js'
import { AppError } from '../utility/errorHandler.js'
import { TokenBlackList } from '../utility/tokenBlackLIst.js'
import logger from '../utility/logger.js'
import client from '../utility/connectRedis.js'
export const verifyToken = catchAsycn(async(req, res, next)=>{
        const authHeader = req.headers['authorization']
        if(!authHeader){
            throw new AppError(401, 'Not authenticated')
        }
        const token = authHeader&& authHeader.split(' ')[1]
        if(!token){
            throw new AppError(401, 'Not authenticated')
        }
        const payload = jwt.decode(token)
        
        let isVerified 
        try {
            isVerified = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY)
            
        } catch (error) {
            if(error.name === 'TokenExpiredError'){
                throw new AppError(401, 'Expired token')
            }
            throw new AppError(401, 'Invalid token')
            
        }
        const accessTokenKey = `access_token:${payload.id}`
        const existToken = await client.get(accessTokenKey)
        if(existToken !== token){
            throw new AppError(401, 'Not authorized here')
        }
        const blacklist = new TokenBlackList()
        const isBlacklisted = await blacklist.isBlackListedAccessToken(token)
        if(isBlacklisted){
            throw new AppError(401, 'access token is blacklisted')
        }
         
            
        req.userId = isVerified.id
        req.role = isVerified.role
        next()

        

})