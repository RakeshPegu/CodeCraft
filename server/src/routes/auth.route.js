import express from 'express'
const router = express.Router()
import { slidingWindowLogRateLimiter } from '../middleware/rateLimiting.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { refreshTokenFunction } from '../controller/refreshToken.Controller.js'
import { validateSchema } from '../middleware/validateSchema.js'
import { registerSchema, signUpWithGoogleAuth, signUpWithPass } from '../controller/auth/signUp.js'
import { send_otp, sendOtpSchema} from '../controller/auth/otp.js'
import { login, loginSchema } from '../controller/auth/signIn.js'
import { logout } from '../controller/auth/logout.js'
router.post('/signup_with_password',validateSchema(registerSchema), signUpWithPass)
router.post("/signin_with_password",validateSchema(loginSchema), login)
router.post('/signup_with_google', signUpWithGoogleAuth)
router.post('/send_otp',validateSchema(sendOtpSchema), send_otp)
router.post('/logout', verifyToken,  logout)
router.post('/refresh_token', refreshTokenFunction)
router.post('/google', signUpWithGoogleAuth)
export default router;