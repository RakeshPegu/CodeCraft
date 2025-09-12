import mongoose, { Schema } from 'mongoose'
const tokenSchema = new mongoose.Schema({
    userId:{type: Schema.Types.ObjectId, required:true},
    token:{type:String, required:true},
    createdAt:{type:Date, default:Date.now, expire:60*60*24*30}

})
export const  tokenModel = mongoose.model('Token', tokenSchema)