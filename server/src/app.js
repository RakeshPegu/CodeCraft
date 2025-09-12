import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.router.js'
import projectRouter from './routes/project.route.js'
import sendEmailRoute from './routes/sendMail.js'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import { morganMiddleware } from './middleware/morganMIddleware.js'

const app = express()
dotenv.config()

app.set('trust proxy', 1)
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('connected to database successfully')
}).catch((err)=>{
    console.log('mongoose connection error', err)
})
app.use(morganMiddleware)
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use((err, req, res, next)=>{
    const status = err.status || 5000
    res.status(status).json({message: err.message||'Internal server error'})    
})
app.get('/api/v1', (req, res)=>{
    console.log(req.ip)
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/projects', projectRouter)
app.use('/api/v1/send_email', sendEmailRoute)

export default app;