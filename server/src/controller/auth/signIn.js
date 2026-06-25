import {email, z} from 'zod'
import { catchAsycn } from '../../utility/catchAsynch.js'
import { userModel } from '../../lib/db.js'
import { AppError } from '../../utility/errorHandler.js'
export const loginSchema = z.object({
    password:z.string().min(4, {error:"Password must be atleast of 4 characters"}),
    email:z.string().email().optional(),
    phoneNumber:z.string().e164().optional()
}).refine((data)=> (data.email && !data.phoneNumber)|| (!data.email && data.phoneNumber), {
    error:"Either email or phone number is required but not both",  
})


export const login = catchAsycn(async(req, res)=>{
        const credential = loginSchema.parse(req.body)
        
        const existingUser = await userModel.findOne({email:credential.email,phoneNumber:credential.phoneNumber })
        if(!existingUser){
            throw new AppError(404, 'Account not found')
        }
    
        if(existingUser?.isLocked()){
            throw new AppError(401, 'Account locked.  Try again later .')
        }
        if(!(await userModel.comparePassword(password))){
            if(existingUser) await existingUser.incLoginAttempt()
            throw new AppError(404, 'Invalid credential')
            
        }
        await existingUser.resetLoginAttempts()
        existingUser.lastLogin = new Date()
        await existingUser.save()
        const {accessToken, refreshToken} = await generateToken(existingUser)
        res.cookie('refreshToken', refreshToken ,{
            maxAge:1000*60*60*24*15,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true
        })  
        logger.info('Logged user succesfully')
        res.status(201).json({success:true,message:"LoggedIn successfully", accessToken, existingUser})
    
})