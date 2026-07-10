import { catchAsycn } from "../../utility/catchAsynch.js"
import { AppError } from "../../utility/errorHandler.js"
import logger from "../../utility/logger.js"
import { TokenBlackList } from "../../utility/tokenBlackLIst.js"

export const logout = catchAsycn(async(req, res)=>{
        console.log('logout got triggered')
        const tokenUserId = req.userId
        const accessToken = req.headers['authorization'].split(' ')[1]
        const refreshToken = req.cookies.refreshToken   
        if(!tokenUserId){
            throw new AppError(401, 'Not authenticated')
        }        
        const blacklist = new TokenBlackList()
        await blacklist.blackListToken(accessToken, refreshToken)        
        res.clearCookie('refreshToken')
        logger.info('Logged out successfully')  
        res.status(200).json({success:'logout successfully'})
    
        
    
})