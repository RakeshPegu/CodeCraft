import mongoose, { mongo } from "mongoose";
import { AppError } from "../utility/errorHandler.js";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    username:{
    type: String,
    lowercase: true,
    trim: true,
    minlength: 3
    },
    email: {
    type: String,
    lowercase: true,
    trim: true,
    validate: {
        validator: function(v){
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
        },
        message: props=> `${props.value} is not a valid email address`
    
    }
  },
  firstName: String,
  lastName: String,
  avatar: String,
  passwordHash:{
    type:String,
    select:false,

  },
  passwordChangedAt: Date,
  passwordResetToken: { type: String, select: false },
  passwordResetExpires: Date,

  oauth: {
    google: {
      id: String,
      email: String,
      refreshToken:String
    },
    github: {
      id: String,
      login: String,

    },

  },
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String, select: false },
  isActive: { type: Boolean, default: true },  
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date,

}, {
    timestamps:true,  
    toJSON:{
        transform(doc){
            delete doc.passwordHash
            delete doc.passwordResetToken
            delete doc.emailVerificationToken
            delete doc.oauth
            return doc
        }
    }
})

UserSchema.index({ email: 1 },{unique:true, sparse: true })
UserSchema.index({ username: 1 }, {unique:true, sparse:true})
UserSchema.index({ 'oauth.google.id': 1 }, { sparse: true })
UserSchema.index({ 'oauth.github.id': 1 }, { sparse: true })
UserSchema.index({ createdAt: -1 })
UserSchema.pre('save', async function(){
  if(!this.isModified('passwordHash')) return 
   this.passwordHash = await bcrypt.hash(this.passwordHash, 10)

})
UserSchema.pre('save' , function(next){
    if(!this.email && ! this.username){
        throw new AppError(400, 'Either email and phone number is required')
    }
    next()
})
UserSchema.methods.comparePassword = async function(candidatePassword){
    if(!this.passwordHash) return false
   return await bcrypt.compare(candidatePassword, this.passwordHash)
    
}
UserSchema.methods.hasPasswordAuth = function(){
    return !! this.passwordHash
}
UserSchema.methods.hasOAuth = function(provider){
    return !!this.oauth[provider]?.id
}
UserSchema.methods.getAuthMethods = function(){
    const methods  = []
    if(this.passwordHash) methods.push('password')
    if(this.oauth.google?.id) methods.push('google')
    if(this.oauth.github?.id) methods.push('github')
    return methods

}
UserSchema.methods.incLoginAttempts = async function () {
    if(this.lockUntil && this.lockUntil < new Date()){
        return await this.updateOne({loginAttempts:1, lockUntil:null})
    }
    const attempts = this.loginAttempts + 1
    const lockUntil = attempts >= 5 ? new Date(Date.now() + 20*60000): null
    return await this.updateOne({loginAttempts: attempts, lockUntil})
    
}
UserSchema.methods.resetLoginAttempts = async function(){
    return await this.updateOne({loginAttempts:0, lockUntil:null})
}
UserSchema.methods.isLocked = function(){
    return this.lockUntil && this.lockUntil > new Date()
}
export const userModel = mongoose.model('User', UserSchema)
export const projectSchema = new mongoose.Schema({
    name:String, 
    description: String,
    image:String, 
})
export const projectModel = mongoose.model('Project', projectSchema)
export const AuditLog = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    action : String, // 'login', 'password_change' "oauth_linked"
    provider: String,
    ipAddress:String,
    userAgent: String,
    createdAt:{type: Date, default: Date.now, expires: 90}
    
})