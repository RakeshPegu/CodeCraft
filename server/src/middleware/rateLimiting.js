import { catchAsycn } from '../utility/catchAsynch.js'
import client from '../utility/connectRedis.js'

export const slidingWindowLogRateLimiter = ({endpoint,maxRequests, windowInSeconds})=>{   
        return catchAsycn(async(req, res , next)=>{
            const userId = req.userId
            const now = Date.now()
            const redisId = `${endpoint}:${userId? userId :req.headers['x-forwarded-for']|| req.ip}`
            const windowStarts = now - windowInSeconds *1000
            await client.zRemRangeByScore(redisId, 0, windowStarts)
            const countRequests = await client.zCard(redisId)  
            
            if(countRequests >= maxRequests){
                let ttl = await client.ttl(redisId)
                if(ttl<0){ttl = windowInSeconds}
                return res.status(429).set("Retry-After", ttl.toString()).json({ success: false, message: `Too many requests. Try again in ${ttl}s` });
            } 
            await client.zAdd(redisId, [{score:now, value: now.toString()}])
            if((await client.ttl(redisId))<0){
                await client.expire(redisId, windowInSeconds)
            }
            
            next()
})
 }
export const slidingWindowCounterRateLimiter = ({endpoint, maxRequests, windowInSeconds})=>{

     return catchAsycn(async(req, res, next)=>{
             const ipAddress = req.headers['x-forwarded-for'] || req.ip
            const userId = req.userId
            const now = Date.now()
            const windowSize = Number(windowInSeconds)*1000;
            const currentWindowSize = Math.floor(now/windowSize)
            const previousWindow = currentWindowSize -1
            const currntKey = `${endpoint}:${userId?userId:ipAddress}:${currentWindowSize}`
            const previousKey = `${endpoint}:${userId?userId:ipAddress}:${previousWindow}`
            const currentWindowRequests = await client.get(currntKey)
            const previousWindowRequest = await client.get(previousKey)
            const elasped = now % windowSize
            const overlappedRequests = (windowSize-elasped)/windowSize
            const rollingWindowRequests = Math.floor(currentWindowRequests- (previousWindowRequest*overlappedRequests))
            if(rollingWindowRequests>=maxRequests){
                return res.status(429).json({success:false, message:'Too many requests'})
            }
            const requestCounts = await client.incr(currntKey)
            if(requestCounts===1){
                await client.expire(previousKey, windowInSeconds)
            }
            next()
            
      
    })

}
