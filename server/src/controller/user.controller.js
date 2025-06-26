import { userModel } from "../lib/db.js"

export const getUsers = async(req, res)=>{
    const userRole = req.session.userRole
    try {
        if(userRole !=='admin'){
            return res.status(403).json({succss:false, message:"Not authorized"})
        }
        const getUsers = await userModel.find()

        res.status(200).json({succss:true, getUsers})
    } catch (error) {
        console.log('get users error', error)
        res.status(200).json({message:'Something went wrong'})
        
    }
}
export const getUser = async(req, res)=>{
    const userRole = req.session.userRole
    const sessionUserId = req.session.userId
    const userId = req.params.id
    try {
        if(sessionUserId !== userId || userRole !== 'admin'){
            return res.status(403).json({message:'Not authorized'})
        }
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(404).json({message:'User not found'})
        }
        res.status(200).json({succss:true, user})
        
    } catch (error) {
        console.log('get user error', error)
        res.status(500).json({ succss:false, message:'Something went wrong'})
        
    }
}
export const updateUser = async(req, res)=>{
    const userRole = req.session.userRole;
    const sessionUserId = req.session.userId
    const userId = req.params.id
    const {...userInfo} = req.body
    try {
        if(sessionUserId !== userId || userRole !=='admin'){
            return res.status(403).json({ succss:false, message:'Not authorized'})

        }
        const existingUser = await userModel.findById(userId)
        if(!existingUser){
            return res.status(404).json({ succss:false, message:'User not found'})
        }
        const updateInfo = await userModel.findByIdAndUpdate({userId},{$set:{...userInfo}})
        res.status(200).json({succss:true, message:'Updated user successfully', updateInfo})
    } catch (error) {
        console.log('update user Error',error)
        res.status(500).json({succss:false, message:"Something went wrong"})
        
    }
}
export const deleteUser = async(req, res)=>{
    const userRole = req.session.userRole
    const sessionUserId = req.session.userId
    const userID = req.params.id
    try {
        if(sessionUserId !== userID || userRole !=='admin'){
            return res.status(200).json({ succss:false, message:"not authorized"})
        }
        const existingUser = await userModel.findById(useId)
        if(!existingUser){
            return res.status(404).json({message:'user not found'})
        }
        await userModel.findByIdAndDelete(userID)
        res.status(200).json({succss:true, message:'Deleted user successfully'})
        
    } catch (error) {
        console.log('delete user Error', error)
        res.status(500).json({ succss:false, message:'something went wrong'})
        
    }
}