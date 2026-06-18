import mongoose from 'mongoose'
import { sendEmail } from '../utility/sendEmail.js'
import { boolean, email, lowercase, trim } from 'zod'
const roles = ['user', 'admin']
const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{
        type:String, 
        required:true,
        trim:true,
        lowercase:true,
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
    isAgreeToTerms:{
        type:Boolean,
        required:true
    },
    avatar:{type:String}
}, {timestamps:true})
const projectSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    images:[{type:String}]
})


const projectModel = mongoose.model('Project', projectSchema)
const userModel = mongoose.model('User', userSchema)
export {projectModel, userModel}