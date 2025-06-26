import { otpModel, userModel } from "../lib/db.js"
import otpGen from 'otp-generator'
import bcrypt from 'bcrypt'

export const register = async(req, res)=>{
    const {email, username, password, avatar, otp} = req.body
    try {
        if(!email || !username ||!password || !otp){
            return res.status(400).json({message:'All the fields are mandatory'})
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).json({message:"Email address already exist"})
        }
        const result = await otpModel.findOne({otp})
        if(!result || result.otp !== otp){
            return res.status(401).json({message:'Invalid otp! try again'})
        }
        const hashedPass = await bcrypt.hash(password, 10)
        await userModel.create({username,email, password:hashedPass, avatar})
        res.status(200).json({success:true, message:'Account created successfully'})

    } catch (error) {
        res.status(500).json({success:false, message:"Something went wrong"})
        
    }
}
export const send_otp = async(req, res)=>{
    const {email}= req.body
    try {
        if(!email){
            return res.status(400).json({message:'valid email required'})
        }  
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).json({message:"email address already exist"})
        }
        let otp = otpGen.generate(6, {specialChars:false, upperCaseAlphabets:false, lowerCaseAlphabets:false})
        let result = await otpModel.findOne(({otp:otp}))
        do{
            otp = otpGen.generate(6, {specialChars:false, upperCaseAlphabets:false, lowerCaseAlphabets:false})

        }while(result)
        const response = await otpModel.findOneAndUpdate({email}, {$set:{otp:otp}},{upsert:true})
        res.status(200).json({message:"Otp send successfully"})       

    } catch (error) {
        console.log('send otp error', error)
        res.status(500).json({success:false, message:"Something went wrong"})    
    }
}
export const login = async(req, res)=>{
    const {email, password} = req.body
    try {
        if(!email ||!password){
            return res.status(400).json({message:'the the fieds are mandatory'})
        }
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(404).json({successf:false, message:"Account not found"})

        }
        const isValidPass = await bcrypt.compare(password, existingUser.password)
        if(!isValidPass){
            return res.status(401).json({success:false, message:"wrong password! try again"})
        } 
        console.log(req.session)
        res.session.userId = existingUser._id
        req.session.userRole = existingUser.role
       console.log('this is session', req.session)
       res.status(200).json({success:true, existingUser})
    } catch (error) {
        console.log('login error',error)
        res.status(500).json({ success:false, message:'Something went wrong'})
        
    }
}
export const logout = async()=>{
    const userID= req.session.userID
    try {
        console.log(req.session)
        res.session = null
        res.status(200).json({success:'logout successfully'})
        
    } catch (error) {
        console.log('log out error', error)
        res.status(500).json({success:false, message:'Something went wrong'})
        
    }
}