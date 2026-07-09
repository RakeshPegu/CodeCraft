import {z} from 'zod'
import { catchAsycn } from '../../utility/catchAsynch.js'
import { userModel } from '../../lib/db.js'
import { AppError } from '../../utility/errorHandler.js'
import { generateToken } from '../../utility/generateToken.js'
export const loginSchema = z.object({
    password:z.string().min(4, {error:"Password must be atleast of 4 characters"}).max(15, {error:"Username can't be more than 15 characters"}),
    username:z.string().min(4, 'User name must atleast of 4 characters ').optional(),
    email:z.string().email().optional(),
    }).refine((data)=> (data.email && !data.username)|| (!data.email && data.username), {
    error:"Either email or username is required",  
})


export const login = catchAsycn(async(req, res)=>{
        const credential = loginSchema.parse(req.body)
   
        const existingUser = await userModel.findOne(credential.email ? {email:credential.email}:{username:credential.username}).select('+passwordHash')
        if(!existingUser){
            throw new AppError(404, 'Account not found')
        }
    
        if(existingUser?.isLocked()){
            throw new AppError(401, 'Account locked.  Try again later .')
        }
        if(!(await existingUser.comparePassword(credential.password))){
            if(existingUser) await existingUser.incLoginAttempts()
            throw new AppError(404, 'Invalid credential')
            
        }
        await existingUser.resetLoginAttempts()
        existingUser.lastLogin = new Date()
        await existingUser.save()
        const payload = {_id:existingUser.id, role:existingUser.role}
        const {accessToken, refreshToken} = await generateToken(existingUser)
        res.cookie('refreshToken', refreshToken ,{
            maxAge:1000*60*60*24*15,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true
        })  
        res.status(201).json({success:true,message:"LoggedIn successfully", accessToken, existingUser})
    
})