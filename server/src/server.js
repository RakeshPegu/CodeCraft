import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.router.js'
import projectRouter from './routes/project.route.js'
import mongoose from 'mongoose'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'

const app = express()
dotenv.config()
const port = process.env.PORT || 5001
app.set('trust proxy', 1)
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(cookieParser())
app.use(cookieSession({
    name:'session',
    secret:process.env.COOKIE_SECRET,
    secure:process.envNODE_ENV='production',
    maxAge:1000*60*60*24*3,

}))
mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('connected to database successfully')
}).catch((err)=>{
    console.log('mongoose connection error', err)
})
app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.get('/api/v1/message', (req, res)=>{
    res.status(200).json({message:"Hello this is rakesh pegu"})
})
app.use((err, req, res, next)=>{
    const status = err.status || 5000
    res.status(status).json({message: err.message||'Internal server error'})

    
})
app.get('/message', (req, res)=>{
    res.status(200).json({message:"THE IS THE MESSAGE FROM THE BACKEND"})
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/projects', projectRouter)
app.listen(port,'0.0.0.0', ()=>{
    console.log(`The server is listening on port ${port}`)
})