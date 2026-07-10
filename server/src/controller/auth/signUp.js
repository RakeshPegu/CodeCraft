import {email, z} from 'zod'
import { userModel } from '../../lib/db.js'
import bcrypt from 'bcrypt'
import { catchAsycn } from '../../utility/catchAsynch.js'
import { AppError } from '../../utility/errorHandler.js'
import {google} from 'googleapis'
import { generateToken } from '../../utility/generateToken.js'
import client from '../../utility/connectRedis.js'
export const registerSchema = z.object({
    email:z.email('Invalid email address'),
    username:z.string().min(3, 'Username must be atleast 3 characters'),
    password: z.string().min(3, 'Password must be 3 characters'),
    otp:z.string().length(6, {errror:'OTP must be of 6 characters' }),
    terms:z.boolean().refine((value)=> value == true , {message:'User must agree to terms'}),
    email:z.string().email()
    })
export const signUpWithPass = catchAsycn(async(req, res)=>{
        const {email, username, password, avatar, terms, otp} = registerSchema.parse(req.body)     
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            throw new AppError(400, 'Email address already exist')       
        }
        const otpKey = `OTP_key:${email}`
        const storedOTP = await client.get(otpKey)
        if(storedOTP !== otp){
         throw new AppError(401, 'Invalid OTP here')
        }
  
        const newUser = await userModel.create({username,email, passwordHash:password,isAgreeToTerms:terms, avatar})
        newUser.lastLogin = new Date()
        await newUser.save()
        const payload = {_id:newUser.id, role:newUser.role}
        const {accessToken, refreshToken} = await generateToken(existingUser)
        res.cookie('refreshToken', refreshToken ,{
                    maxAge:1000*60*60*24*15,
                    sameSite:'strict',
                    secure:process.env.NODE_ENV==='production'? true:false,
                    httpOnly:true
                })  
        res.status(201).json({success:true, message:'Account created successfully', user:newUser, accessToken:accessToken })

})
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);
export const signUpWithGoogleAuth = catchAsycn( async (req, res) => {
  try {
    const { code } = req.body;


    const { tokens } = await oauth2Client.getToken(code);   
    oauth2Client.setCredentials(tokens);    
    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2',
    });

    const { data: user } = await oauth2.userinfo.get();
    const existingUser = await userModel.findOne({email:user.email})
    let newlyCreatedUser
    if (!existingUser) {
    newlyCreatedUser = await new userModel({
    email: user.email,
    isEmailVerified: true,
    lastLogin: new Date(),
    oauth: {
      google: {
        id: user.openid,
        email: user.email,
        refreshToken:tokens.refresh_token
      },
    },
    }).save();
    }else{
        if(tokens.refresh_token) existingUser.oauth.google.refreshToken = tokens.refresh_token    
        existingUser.lastLogin = new Date()
        await existingUser.save()
    }
    const payload = {_id:existingUser.id || newlyCreatedUser.id, role:'user'}
    const {accessToken, refreshToken} = await generateToken(payload)
    const {oauth, ...userInfo} = existingUser._doc || newlyCreatedUser._doc
    res.cookie('refreshToken',refreshToken ,{
            maxAge:1000*60*60*24*15,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true
        })
    res.status(200).json({
       success: true,
       user: userInfo,
       accessToken:accessToken
    });
  } catch (error) {
    console.error(
      error.response?.data ||
      error.message ||
      error
    );

    res.status(500).json({
      success: false,
      message: 'Google authentication failed',
      error:
        error.response?.data ||
        error.message,
    });
  }
}
)