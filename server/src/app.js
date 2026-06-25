import './utility/instrument.js'
import * as Sentry from '@sentry/node'
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import compression from 'compression'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import { errorHandlerMiddleware } from './middleware/erorHandleMid.js'
import authRoutes from './routes/auth.route.js'
import projectRoutes from './routes/project.route.js'
import userRoutes from './routes/user.router.js'
import protectedRoute from './routes/protectedRoute.js'
dotenv.config()
const app = express()
dotenv.config()
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('connected to database successfully')
}).catch((err)=>{
    console.log('mongoose connection error', err)
})
app.get('/health', (req, res)=>{
    res.status(200).json({
        uptime: process.uptime(),
        status:'healthy',
        timeStamp: new Date()
    })
})
app.use(cors({origin:[process.env.CLIENT_URL], credentials:true}))
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/protected',protectedRoute)
app.use('/api/v1/users', userRoutes)
Sentry.setupExpressErrorHandler(app)
app.use(errorHandlerMiddleware)
export default app;