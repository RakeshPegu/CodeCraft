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

const app = express()
dotenv.config()
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('connected to database successfully')
}).catch((err)=>{
    console.log('mongoose connection error', err)
})
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/project', projectRoutes)
app.use(errorHandlerMiddleware)
export default app;