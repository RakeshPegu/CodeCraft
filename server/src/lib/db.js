import mongoose from 'mongoose'
import { sendEmail } from '../utility/sendEmail.js'
const roles = ['user', 'admin']
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{
        type:String, required:true, unique:true,
        validate:{
            validator: function(v){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            },
            message: props => `${props.value} is not valid email address` 
        }
        
    },   
    role:{
        type:String, enum:roles, default:'user'
    } ,
    password:{
        type:String, required:true
    },
    avatar:{type:String}
}, {timestamps:true})
const projectSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    images:[{type:String}]
})
const otpSchema = new mongoose.Schema({
    email:{type:String, required:true},
    otp:{type:String, required:true}
},{timestamps:true})
otpSchema.index({email:1, otp:1}, {unique:true})
otpSchema.pre('updateOne', function(){
    const optIno = this.getUpdate()
    const info = this.getQuery()
    console.log(optIno)
    console.log('this is the email', info.email)
    sendEmail(info.email, optIno.otp)


    
})
otpSchema.index({createdAt:1},{expireAfterSeconds:60*5})
const projectModel = mongoose.model('Project', projectSchema)
const userModel = mongoose.model('User', userSchema)
const otpModel = mongoose.model('Otp', otpSchema)
export {projectModel, userModel, otpModel}