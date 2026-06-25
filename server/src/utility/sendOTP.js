import nodemailer from 'nodemailer'
import twilio from 'twilio'

export const sendEmail = async (email, otp) => {
    console.log(email, otp)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASS  
        }
    })
    transporter.sendMail({
        from:process.env.EMAIL,
        to:email,
        subject:'Email verification process',
        html:`<h1> This  your otp ${otp}</h1>`
    })

    
}
const client = twilio(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN
)
export const sendOTPViaPhoneNumber = async (mobile, otp) => {
  try {
    const message = await client.messages.create({
        body:`Your OTP code is: ${otp}. Valid for 5 minutes`,
        from:process.env.PHONE_NUMBER,
        to:mobile
    })
    

    return { success: true, messageId: message.sid };
  } catch (error) {
    console.error('OTP send failed:', error);
    throw new Error(`Failed to send OTP: ${error.message}`);
  }
}