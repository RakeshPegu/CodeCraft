import jwt from 'jsonwebtoken'
import client from './connectRedis'
class TokenBlackList{
    constructor(prefix = 'blacklist'){
        this.prefix = prefix
    }
}
async function blackListToken(token) {
    try {
        const payload = jwt.decode(token)
        if(!payload || payload.jti || payload.iat){
            return false
        }
        const ttl = Math.max(0, payload.exp - Math.floor(Date.now()/1000))
        if(ttl>0){
            const key = `${this.prefix}:${payload.jti}`
            await client.setEx(key, ttl, '1')
            return true;
        }
        return false
        
    } catch (error) {
        return false
        
    }
    
}