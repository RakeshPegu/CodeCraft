import './utility/instrument.js'
import * as Sentry from '@sentry/node'
import express from 'express'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { errorHandlerMiddleware } from './middleware/erorHandleMid.js'
import authRoutes from './routes/auth.route.js'
import projectRoutes from './routes/project.route.js'
import userRoutes from './routes/user.router.js'
import protectedRoute from './routes/protectedRoute.js'
import {connectDB} from './utility/connectDb.js'
import logger from './utility/logger.js'
import { success } from 'zod'
import client, { connectRedis } from './utility/connectRedis.js'
const app = express()
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
// connect to mongodb databas
await connectDB()
const db = mongoose.connection

db.on('connected', ()=>{
    logger.info('Mongoose connected  to MongoDB')
    
})
db.on('error', async(err)=>{
    logger.error('mongoose connection error', err)
})
db.on('disconnected', async()=>{
    logger.info('Mongoose disconnected from mongodb')
})
db.on('reconnected', ()=>{
    logger.info('mongoose reconnected to mongodb')

})
db.on('close', ()=>{
    logger.info('Mongoose connection closed')
})

await connectRedis()
client.on('connect', ()=>{
    logger.info('Redis client connecting')
})
client.on('ready', ()=> {
    logger.info('Redist client id Ready to use')
})
client.on('reconnecting', ()=>{
    logger.info('Redis reconnecting')
})
client.on('error', async(err)=>{
    logger.error('Redis client error', err)
    await connectRedisWithRetry()
})
client.on('end', ()=>{
    logger.info("Redist connection closed")
})



app.get('/health', (req, res)=>{
    res.status(200).json({
        uptime: process.uptime(),
        status:'healthy',
        timeStamp: new Date()
    })
})

app.use(cors({origin:[process.env.CLIENT_URL], credentials:true}))
app.get('/test', (req, res)=>{
    res.status(200).json({success:true, message:"This is  message is from the backend"})
})
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/protected',protectedRoute)
app.use('/api/v1/users', userRoutes)
Sentry.setupExpressErrorHandler(app)
app.use(errorHandlerMiddleware)

export default app;