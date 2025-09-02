import request from 'supertest'
import app from '../app.js'
import mongoose from 'mongoose'
import { otpModel, userModel } from '../lib/db.js'

describe('auth test', ()=>{
    beforeAll(async()=>{
        await mongoose.connect(process.env.DATABASE_URL)
    })
    afterAll(async()=>{
        await userModel.deleteMany({})
        await mongoose.disconnect()
    })

    describe('POST /api/v1/auth/register', ()=>{
            let testUserData = {
              username:"rakeshpegu",
              email:`rpegu0651@gmail.com`,
              password:'rakesh7099',
              otp:""
            }

        beforeEach(async()=>{
           await userModel.deleteMany({})
           await otpModel.deleteMany({})
           await request(app).post('/api/v1/auth/send_otp').send({email:testUserData.email})
           const otpDoc = await otpModel.findOne({email:testUserData.email})
           testUserData.otp = otpDoc.otp;
           
         })

        it('it should register new non-exiting users', async()=>{
            const res = await request(app).post('/api/v1/auth/register').send(testUserData)
            expect(res.statusCode).toBe(201)
            expect(res.body.newUser).toHaveProperty('_id')
            expect(res.body.newUser.username).toBe(testUserData.username)
        } )
        it('should validate request data',async()=>{            
            const res = await request(app).post('/api/v1/auth/register').send({email:"bad"})
            expect(res.statusCode).toBe(400)
            
        } )
    
        it('should fail if email address already exist', async()=>{
            await request(app).post('/api/v1/auth/register').send(testUserData)
            const res  = await request(app).post('/api/v1/auth/register').send(testUserData)
            expect(res.statusCode).toBe(400)
        })
    }),
    describe('POST /api/v1/auth/login', ()=>{
        let loginUser;
        beforeEach(async()=>{            
            loginUser = {
                username:"rakeshpegu",
                email:`rpegu0651@gmail.com`,
                password:"rakesh7099",
                otp:''
            }
            await request(app).post('/api/v1/auth/send_otp').send({email:loginUser.otp})
            const otpDoc = await otpModel.findOne({email: loginUser.email} )
            loginUser.otp = otpDoc.otp
            await request(app).post('/api/v1/auth/register').send(loginUser)
        })
        it('should login users', async()=>{
            const res = await request(app).post('/api/v1/auth/login').send({email:loginUser.email, password:loginUser.password})
            console.log(res.body)
            expect(res.body.existingUser).toHaveProperty('_id')
            expect(res.statusCode).toBe(201)
            expect(res.body.existingUser.email).toBe(loginUser.email)

        })
        it('should fail if email does not exist', async()=>{
            const res = await request(app).post('/api/v1/auth/login').send({email:'rakespegu903@gmail.com', password:loginUser.password})
            expect(res.statusCode).toBe(404)
        })
        it('should fail if empty password',async()=>{
            const res = await request(app).post('/api/v1/auth/login').send({email:loginUser.email, password:''})
            expect(res.statusCode).toBe(400)

        })
        it('should fail if wrong password', async()=>{
            const res = await  request(app).post('/api/v1/auth/login').send({email:loginUser.email, password:'wrong password'})
            expect(res.statusCode).toBe(401)
        })

    }),
    describe('POST /api/v1/auth/logout', ()=>{
        let testUserData = {
            username:"rakeslord",
            email:"rpegu0651@gmail.com",
            password:"rakesh7099",
            otp:''
        }
        let cookie;
        beforeAll(async()=>{
            await request(app).post('/api/v1/auth/send_otp').send({email:testUserData.email})
            const otpDoc = await otpModel.findOne({email:testUserData.email})
            testUserData.otp = otpDoc.otp;
            await request(app).post('/api/v1/auth/register').send(testUserData)
            const res = await request(app).post('/api/v1/auth/login').send({email:testUserData.email, password:testUserData.password})
            cookie = res.headers['set-cookie'][0]
        
        } )
        it('validate user identity', async()=>{
            const res = await request(app).post('/api/v1/auth/logout').set('Cookie',cookie)
            expect(res.statusCode).toBe(200)

        })
    })
})