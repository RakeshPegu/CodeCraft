import jwt from 'jsonwebtoken'
import client from './connectRedis.js'
export class TokenBlackList{
    constructor(prefix = 'blacklist'){
        this.prefix = prefix
    }
async blacklistAccessToken(accessToken) {
    try {
    const payload =  jwt.decode(accessToken)
    if(!payload || !payload.jti){
        return false
    }
    const ttl = Math.max(0, payload.exp - Math.floor(Date.now()/1000))
    if(ttl>0){
        const key = `${this.prefix}:${payload.jti}`
        await client.setEx(key, ttl, '1')
        return true


    }
    return false
        
    } catch (error) {
        return false
        
    }

    
}
async blackListToken(accessToken, refreshToken) {
    // when user logs out , blacklist both  refresh token and access token with help of redis 
    try {
        const accessPayload = jwt.decode(accessToken)
        const refreshPayload = jwt.decode(refreshToken)
        console.log('this is expiration time of refreshToken', refreshPayload.exp)
        if(!accessPayload || !refreshPayload ){
            return false
        }
        const ttlOfAccessPayload = Math.max(0, accessPayload.exp - Math.floor(Date.now()/1000))
        const ttlOfRefreshPayload = Math.max(0, refreshPayload.exp - Math.floor(Date.now()/1000 ) )
        if(ttlOfAccessPayload >0 && ttlOfRefreshPayload >0){
            const accessPayloadkey = `${this.prefix}:${accessPayload.jti}`
            const refreshPayloadKey = `${this.prefix}:${refreshPayload.jti}`
            await client.setEx(accessPayloadkey, ttlOfAccessPayload, '1')
            await client.setEx(refreshPayloadKey,ttlOfRefreshPayload, '1' )
            return true;
        }else if(ttlOfRefreshPayload>0 && ttlOfAccessPayload <0){
            const refreshPayloadKey = `${this.prefix}:${refreshPayload.jti}`
            await client.setEx(refreshPayloadKey, ttlOfRefreshPayload, '1')
            return true

        }
        return false
        
    } catch (error) {
        return false
        
    }
    
}
async  isBlackListedAccessToken(accessToken) {
    try {

        const payload = jwt.decode(accessToken)
        console.log('this is payload', payload)
        if(!payload || !payload.jti){
            return true
        }
        const key = `${this.prefix}:${payload.jti}`
        const exist = await client.exists(key)
        return exist === 1
                
    } catch (error) {
        return true
        
    }
    
}
async  isBlackListedRefreshToken(refreshToken) {
    try {
    const payload = jwt.decode(refreshToken)
    if(!payload || !payload.jti){
        return true
    }
    const key = `${this.prefix}:${payload.jti}`
    const exist = await client.exists(key)
    return exist ===  1
            
    } catch (error) {
        return true
        
    }
    
}
}