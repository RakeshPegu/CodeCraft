import * as Sentry from '@sentry/node'
import { json, ZodError } from "zod"
import logger from "../utility/logger.js"
import { AppError } from "../utility/errorHandler.js"


export const validateSchema = (Schema)=>{
     return async function (req, res, next){
        try {
          Schema.parse(req.body)
          next()
            
        } catch (error) {
            if(error instanceof ZodError){
                const formattedErrors = JSON.parse(error.message)[0].message
                Sentry.captureException(formattedErrors)
                res.status(400).json({status:'failed',message:"Invalid request", error:formattedErrors})
                return
                
            }
            next(error)
            
        }


     }

}