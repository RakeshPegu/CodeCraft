import logger from "./logger.js";
import {createClient} from 'redis'
const client = createClient({
  username:'default',
  password:process.env.REDIS_PASS,
  socket:{
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT
  }
})
export default client;
export async function connectRedis() {
  try {
    await client.connect()
    logger.info('connected to redis')
    
    
  } catch (error) {
    logger.error('error in connecting redis', error)
    
  }
  
}
export async function connectRedisWithRetry(  maxRetries=10, initialDelayMs= 1000){
    for(let i= 1 ; i <= maxRetries; i++ ){
      try {
        await client.connect()
        logger.info('connected to redis ')
        return true;
        
      } catch (error) {
        if(i < maxRetries){
          const delayMs = initialDelayMs*Math.pow(2, i-1)
          await new Promise(r=> setTimeout(r, delayMs))
        }else{
          logger.error (`Could not connect to redis after ${maxRetries} attempts`)
          return false
        }
        
      }

    }
} 

