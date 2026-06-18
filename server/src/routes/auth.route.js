import express from 'express'
const router = express.Router()
import { slidingWindowLogRateLimiter } from '../middleware/rateLimiting.js'
import {login, logout, register, send_otp} from '../controller/auth.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { refreshTokenFunction } from '../controller/refreshToken.Controller.js'
import verifyRefreshToken from '../utility/verifyRefreshToken.js'
router.post('/register', slidingWindowLogRateLimiter({enpoint:'register',maxRequests:15,windowInSeconds:60 }), register)
router.post('/refresh_token', refreshTokenFunction)
router.post('/login',slidingWindowLogRateLimiter({enpoint:'login', maxRequests:15, windowInSeconds:60}), login)
router.post('/logout',verifyToken, slidingWindowLogRateLimiter({endpoint:'logout', maxRequests:15, windowInSeconds:60}), logout)

export default router;