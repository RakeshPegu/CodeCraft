import { BrevoClient } from '@getbrevo/brevo'
import logger from './logger.js'

const brevo = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY
})

export const sendEmail = async (email, otp) => {
    const response = await brevo.transactionalEmails.sendTransacEmail({
        subject: 'Email verification process',
        htmlContent: `<h1>This is your OTP ${otp}</h1>`,
        sender: { name: 'YourAppName', email: process.env.EMAIL },
        to: [{ email }]
    })
    return response
}