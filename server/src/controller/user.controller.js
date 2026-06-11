import { userModel } from "../lib/db.js"
import { AppError } from "../utility/errorHandler.js"
import { catchAsycn } from "../utility/catchAsynch.js"
import logger from "../utility/logger.js"

export const getUsers = catchAsycn(async(req, res)=>{
        const userRole = req.session.userRole
        if(userRole !=='admin'){
            throw new AppError(403, 'Not authorized')
        }
        const getUsers = await userModel.find()

        res.status(200).json({succss:true, getUsers})
 
})
export const getUser =catchAsycn(async(req, res)=>{
        const userRole = req.role
        let  tokenUserId= req.userId
        let  userId = req.params.id
        userId =userId.trim()               
        if(tokenUserId !== userId){
            throw new AppError(403, 'Unauthorized')
        }
        const user = await userModel.findById(userId)
        if(!user){
            throw new AppError(404, 'User not found')
        }
        logger.info(`${tokenUserId} got it's data`)
        res.status(200).json({succss:true, user})
        })
export const updateUser = catchAsycn(async(req, res)=>{
        let  tokenUserId = req.userId
        let userId = req.params.id
        const {...userInfo} = req.body
        console.log(req.body)
        userId = userId.trim()       
        if(tokenUserId !== userId ){
            throw new AppError(403, 'UnAuthorized')

        }
        const existingUser = await userModel.findById(tokenUserId)
        if(!existingUser){
            throw new AppError(404, 'User not found')
        }
        const updateInfo = await userModel.findByIdAndUpdate(tokenUserId,{$set:{...userInfo}}, {new:true})
        logger.info(`${tokenUserId} updated it's account`)
        res.status(200).json({succss:true, message:'Updated user successfully', updateInfo})
    })
export const deleteUser = catchAsycn(async(req, res)=>{
        let tokenUserId = req.userId
        let userID = req.params.id
        const {password} = req.body
        console.log(password)
        if(!password){
            throw new AppError(400, 'Password required')
        }
        userID = userID.trim()

        if(tokenUserId!== userID ){
            throw new AppError(403, 'Unauthorized')
        }
        const existingUser = await userModel.findById(userID)
        if(!existingUser){
            throw new AppError(404, 'User not found')
        }
        if(existingUser.password !== password){
            throw new Error(403, 'Wrong password')
        }
        await userModel.findByIdAndDelete(userID)
        logger.info(`${tokenUserId} deleted it's account`)
        res.status(200).json({succss:true, message:'Deleted user successfully'})
        
  })