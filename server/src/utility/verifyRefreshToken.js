
import tokenModel from '../lib/tokendb.js'
import jwt from 'jsonwebtoken'
import { AppError } from "./errorHandler.js"

/*const verifyRefreshToken = (refreshToken)=>{
    return new Promise((resolve, reject)=>{
        tokenModel.findOne({token:refreshToken}, (err,doc)=>{
            if(!doc){
                return reject({message:'Invalid refresh token'})
            }
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY, (err, tokenDetails)=>{
                if(err){
                    return reject({message:'Invalid refresh token'})
                }
                resolve({message:"Valid refresh token", tokenDetails})

            })
        })
    })
}
import { tokenModel } from "../lib/tokendb"
import jwt from "jsonwebtoken"

const verification = (refreshToken) => {
  return tokenModel.findOne({ token: refreshToken })
    .then((doc) => {
      if (!doc) {
        return Promise.reject({ message: "Invalid refresh token" })
      }

      return new Promise((resolve, reject) => {
        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_PRIVATE_KEY,
          (err, tokenDetails) => {
            if (err) {
              return reject({ message: "Invalid refresh token" })
            }
            resolve({ message: "Valid refresh token", tokenDetails })
          }
        )
      })
    })
    .catch(() => {
      return Promise.reject({ message: "Invalid refresh token" })
    })
}
*/
const verifyRefreshToken = async(refreshToken)=>{
    try {
        const existingToken = await tokenModel.findOne({token:refreshToken})
        if(!existingToken){
            return new AppError('Invalid refresh token')
        }
      
        const tokenDetail = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY)
        return {message:"valid refresh token", tokenDetail }
        
    } catch (error) {
        throw {message:'Invalid refresh token'}
        
    }
}
export default verifyRefreshToken