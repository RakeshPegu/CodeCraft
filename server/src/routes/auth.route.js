import express from 'express'
import { login, logout, register, send_otp } from '../controller/auth.controller.js'
const router = express.Router()
router.post('/register',register)
router.post('/login', login)
router.post('/send_otp', send_otp)
router.post('/logout', logout)
export default router