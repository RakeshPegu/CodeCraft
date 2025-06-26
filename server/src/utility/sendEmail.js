import nodemailer from 'nodemailer'
export const sendEmail = async (email, otp) => {
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