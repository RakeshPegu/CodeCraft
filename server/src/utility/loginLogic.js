import { userModel } from "../lib/db"
import { AppError } from "./errorHandler"

export const loginPassword = (email, password)=>{
    const user = await userModel.findOne({email:email})
    if(user.isLocked()){
        throw new AppError(400, 'Account is lcoked,  Try again later')
    }
    if(!user || !(await user.comparePassword(password))){
        if(user) await user.incLoginAttempts()
        throw new AppError(401, 'Invalid credential')
    }
    await user.resetLoginAttempts()
    user.lastLogin = new Date()
    await user.save()
    return user

}
