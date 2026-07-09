import {email, z} from 'zod'
import { userModel } from '../../lib/db.js'
import { sendEmail } from '../../utility/sendOTP.js'
import otpGen from 'otp-generator'
import { catchAsycn } from '../../utility/catchAsynch.js'
import { AppError } from '../../utility/errorHandler.js'
import logger from '../../utility/logger.js'
import client from '../../utility/connectRedis.js'

export const verifyOTPSchema = z.object({
    otp:z.string().length(6, {error:"OTP must have 6 characters"}),
    email:z.string().email()
})
export const sendOtpSchema =z.object({
    email:z.string().email()
})

 export const send_otp = catchAsycn(async(req, res)=>{
        
        const credential = sendOtpSchema.parse(req.body)
        const email = credential.email 
        const existingUser = await userModel.findOne({email:email })
        if(existingUser){
            throw new AppError(403, 'Email address already exist')
            
        }
        let otp = otpGen.generate(6, {specialChars:false, upperCaseAlphabets:false, lowerCaseAlphabets:false})
       
        const otpKey = `OTP_key:${credential?.email}`
        console.log('this is otp key', otpKey)
        const ttl = Math.floor(Date.now()/1000 + 5)
        try {
            await client.del(otpKey)
            
        } catch (error) {
            console.log('error', error)
            logger.error(error)
            
        }
        await client.setEx(otpKey,ttl, otp )
        await sendEmail(email, otp)
        logger.info('Send otp successfully')
        res.status(200).json({message:"Otp send successfully"})       

    
})
export const verifyOTP = catchAsycn(async(req, res)=>{
    const credential = verifyOTPSchema.parse(req.body)
    const otpKey = `OTP_key:${credential.email}`
    const storedOTP = await client.get(otpKey)
    if(storedOTP !== credential.otp){
        throw new AppError(401, 'Invalid OTP here')
    }
    res.status(200).json({success:true, message:"verified OTP successfully"})


    
})
