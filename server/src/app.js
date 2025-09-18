import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.router.js'
import emailRoutes from './routes/sendMail.js'
import { morganMiddleware } from './middleware/morganMIddleware.js'
import { errorHandlerMid } from './middleware/erorHandleMid.js'
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
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/mail',emailRoutes)
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(morganMiddleware)
app.use(errorHandlerMid)

export default app;