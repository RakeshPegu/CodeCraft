import {email, z} from 'zod'
import { userModel } from '../../lib/db.js'
import bcrypt from 'bcrypt'
import { catchAsycn } from '../../utility/catchAsynch.js'
import { AppError } from '../../utility/errorHandler.js'
import {google} from 'googleapis'
import { generateToken } from '../../utility/generateToken.js'
export const registerSchema = z.object({
    email:z.email('Invalid email address'),
    username:z.string().min(3, 'Username must be atleast 3 characters'),
    password: z.string().min(3, 'Password must be 3 characters'),
    terms:z.boolean().refine((value)=> value == true , {message:'User must agree to terms'}),
    email:z.string().email().optional(),
    phoneNumber:z.string().e164().optional
}).refine((data)=>(data.email && !data.phoneNumber )|| (!data.email || data.phoneNumber), {error:"Either email or phone number is required"})
export const signUpWithPass = catchAsycn(async(req, res)=>{
        const {email, username, password, avatar, terms} = registerSchema.parse(req.body)     
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            throw new AppError(400, 'Email address already exist')        
        }
        const newUser = await userModel.create({username,email,firstName, lastName, passwordHash:password,isAgreeToTerms:terms, avatar})
        logger.info('Register user succesfully')
        res.status(201).json({success:true, message:'Account created successfully',newUser })

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
    console.log('token', tokens)
   
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
        id: user.id,
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
    
    res.cookie('refreshToken',refreshToken ,{
            maxAge:1000*60*60*24*15,
            sameSite:'strict',
            secure:process.env.NODE_ENV==='production'? true:false,
            httpOnly:true
        }).status(200).json({
       success: true,
       user: existingUser || newlyCreatedUser,
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