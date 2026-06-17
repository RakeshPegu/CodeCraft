import { otpModel, userModel } from "../lib/db.js"
import { catchAsycn } from "../utility/catchAsynch.js"
import { AppError } from "../utility/errorHandler.js"
import otpGen from 'otp-generator'
import bcrypt from 'bcrypt'
import { generateToken } from "../utility/generateToken.js"
import logger from "../utility/logger.js"
import {email, z} from 'zod'
const registerSchema = z.object({
    email:z.email('Invalid email address'),
    username:z.string().min(3, 'Username must be atleast 3 characters'),
    password: z.string().min(3, 'Password must be 3 characters'),
    otp:z.string().min(6, 'OTP must be 6 characters')
})
const sendOtpSchema = z.object({
    email:z.email('Invalid email address')
})
const loginSchema = z.object({
    email:z.email('Invalid email address'),
    password:z.string().min(3, 'Password must be of 3 characters')
})
export const register = catchAsycn(async(req, res)=>{
        const {email, username, password, avatar, otp} = registerSchema.parse(req.body)
        if(!email || !username ||!password || !otp){
            throw new AppError(400, 'All fields are mandatory')
            
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            throw new AppError(400, 'Email address already exist')
        
        }
        const result = await otpModel.findOne({otp})
        if(!result || result.otp !== otp){
            throw new AppError(403, 'Invalid otp')
        
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({username,email, password:hashedPass, avatar})
        logger.info('Register user succesfully')
        res.status(201).json({success:true, message:'Account created successfully',newUser })

})
export const send_otp = catchAsycn(async(req, res)=>{
        const {email}= sendOtpSchema.parse(req.body)
        console.log(email)
        if(!email){
            throw new AppError(404, 'Valid email required')
    
        }  
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            throw new AppError(403, 'Email address already exist')
            
        }
        let otp = otpGen.generate(6, {specialChars:false, upperCaseAlphabets:false, lowerCaseAlphabets:false})
        let result = await otpModel.findOne(({otp:otp}))
        do{
            otp = otpGen.generate(6, {specialChars:false, upperCaseAlphabets:false, lowerCaseAlphabets:false})

        }while(result)
        const response = await otpModel.findOneAndUpdate({email}, {$set:{otp:otp}},{upsert:true})
        logger.info('Send otp successfully')
        res.status(200).json({message:"Otp send successfully"})       

    
})
export const login = catchAsycn(async(req, res)=>{
    const {email, password} = loginSchema.parse(req.body)
    if(!email ||!password){
            throw new AppError(400, 'All the fields are mandatory')
        }
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            throw new AppError(404, 'Account not found')
            
        }
        const isValidPass = await bcrypt.compare(password, existingUser.password)
        if(!isValidPass){
            throw new AppError(403, 'Invalid password')
        }        
        
        const {accessToken, refreshToken} = await generateToken(existingUser)
        res.cookie('refreshToken',refreshToken ,{
            maxAge:1000*60*60*24*30,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true

        })  
        logger.info('Logged user succesfully')
        res.status(201).json({success:true,message:"LoggedIn successfully", accessToken, existingUser})
    
})
export const logout = catchAsycn(async(req, res)=>{
        const tokenUserId = req.userId
        if(!tokenUserId){
            throw new AppError(404, 'Not authenticated')
        }        
        await userModel.findOneAndDelete({_id:tokenUserId})
        logger.info('Logged out successfully')
        res.clearCookie('token').status(200).json({success:'logout successfully'})
    
        
    
})