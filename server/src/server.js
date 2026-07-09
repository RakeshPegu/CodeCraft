import mongoose from "mongoose";
import app from "./app.js";
import cors from 'cors'
import client from "./utility/connectRedis.js";
import { logger } from "@sentry/node";
const port = process.env.PORT || 5001

const server = app.listen(port,"0.0.0.0", ()=>{    
    console.log(`the server is listening on port ${port}`)
}) 
async function gracefullShutdown(signal) {
    server.close(async(err)=>{
        if(err){
            process.exit(1)
        }
        try {
            await mongoose.disconnect()
            logger.info('Disconnect mongodb server successfully')
            await client.disconnect()
            logger.info('disconnect redis successfully')
            process.exit(0)

            
        } catch (error) {
            console.log('error during disconnect', error)
            process.exit(1)
            
        }
    })
    setTimeout(()=>{
        logger.error('Forced shutdown - graceful timeout exceeded');
        process.exit(1)
    }, 10000)

    
    
}
process.on('SIGINT', ()=>gracefullShutdown('SIGINT'))
process.on('SIGTERM', ()=>gracefullShutdown('SIGTERM'))
process.on('unhandledRejection', async(reason, promise)=>{
    logger.error('unhandledRejection', (reason, promise)),
    gracefullShutdown('unhandledRejection')
})
process.on('uncaughtException', async(err)=>{
    logger.error('unhandle exception'),
    gracefullShutdown('uncaughtException')

})