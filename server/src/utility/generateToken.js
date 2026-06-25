import jwt from 'jsonwebtoken'
import tokenModel from '../lib/tokendb.js';
import { v4 as uuidv4 } from 'uuid'
import client from './connectRedis.js';
import logger from './logger.js';
export const generateToken = async (user) => {
    const jtiAccessToken = uuidv4()
    const jtiRefreshToken = uuidv4()
    const payloadOfAccessToken = { id: user?._id, role: user?.role, jti:jtiAccessToken, iat:Math.floor(Date.now()/1000) };
    const payloadOfRefreshToken = { id: user?._id, role: user?.role, jti:jtiRefreshToken, iat:Math.floor(Date.now()/1000) };
    if (!process.env.ACCESS_TOKEN_PRIVATE_KEY || !process.env.REFRESH_TOKEN_PRIVATE_KEY) {
        throw new Error("JWT secret keys are missing in environment variables");
    }
    const accessToken = jwt.sign(payloadOfAccessToken, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payloadOfRefreshToken, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: "15d" });
    const acccessTokenKey = `access_token:${user?._id}`
    const refreshTokenKey = `refresh_token:${user?._id}`
    try {
        await client.del(acccessTokenKey)
        await client.del(refreshTokenKey)
        
        
    } catch (error) {
        console.log('Error deleting old tokens from redis', error)
        
    }
    
    await client.setEx(acccessTokenKey, 60*15, accessToken)
    await client.setEx(refreshTokenKey, 60*60*24*15, refreshToken)
    return { accessToken, refreshToken };
};
