import express from 'express'
import nodemailer from 'nodemailer'
const router = express.Router()
router.post('/', async(req, res)=>{
    const {firstName, middleName, lastName, email, message} = req.body
    try {
        if(!firstName  || !lastName || !email || !message){
            return res.status(400).json({succcess:false, message: 'all the fields are mandatory'})
        }
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.EMAIL_PASS
            }
            
        })
        transporter.sendMail({
            from:email,
            subject:`${firstName} ${middleName? middleName:''} ${lastName} wants to contact you`,
            to:process.env.EMAIL,
            html:`<p>${message}</p>`
        })
        res.status(200).json({success:true, message:"Sent message successfully"})
                
    } catch (error) {
        res.status(500).json({succcess:false, message:'Something went wrong'})
        
    }
})

export default router;