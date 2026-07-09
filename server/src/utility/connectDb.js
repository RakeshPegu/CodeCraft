import logger from "./logger.js";
import mongoose from "mongoose";
export async function connectDB(){
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS:45000,
        maxPoolSize:10,
        heartbeatFrequencyMS:10000
    })
     logger.info('connected to mongodb')     
     return true ;
        
    } catch (error) {
        logger.error('failed in connecting to database',error)
        return false;
        
    }


}