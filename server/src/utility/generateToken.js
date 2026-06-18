import jwt from 'jsonwebtoken'
import tokenModel from '../lib/tokendb.js';
import { date, uuidv4 } from 'zod';
export const generateToken = async (user) => {
    const payload = { id: user?._id, role: user?.role, jti:uuidv4(), iat:Math.floor(Date.now()/1000) };
    if (!process.env.ACCESS_TOKEN_PRIVATE_KEY || !process.env.REFRESH_TOKEN_PRIVATE_KEY) {
        throw new Error("JWT secret keys are missing in environment variables");
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: "30m" });
    await tokenModel.findOneAndDelete({ userId: payload.id });
    await new tokenModel({ userId: payload.id, token: refreshToken }).save();
    return { accessToken, refreshToken };
};
