import express from 'express'
const router = express.Router()
import { slidingWindowLogRateLimiter } from '../middleware/rateLimiting.js'
import {login, logout, register, send_otp} from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
const registerRateLimierRule = {enpoint:'register',maxRequests:15,windowInSeconds:60 }
router.post('/register', slidingWindowLogRateLimiter(registerRateLimierRule), register)
router.post('/login', login)
router.post('/send_otp', send_otp)
router.post('/logout',verifyToken, logout)

export default router