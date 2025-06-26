import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.router.js'
import projectRouter from './routes/project.route.js'
const app = express()
const port = process.env.PORT || 5001
app.use(express.json)
app.use(cookieParser())
app.use(cookieSession({
    name:'session',
    secret:'i am the cool kid',
    maxAge:1000*60*60*24*3
}))
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).json({message:'Something went wrong'})
    
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/projects', projectRouter)
app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`)
})