import jwt from 'jsonwebtoken'
import tokenModel from '../lib/tokendb.js';
export const generateToken = async (user) => {
    const payload = { id: user?._id, role: user?.role };
    if (!process.env.ACCESS_TOKEN_PRIVATE_KEY || !process.env.REFRESH_TOKEN_PRIVATE_KEY) {
        throw new Error("JWT secret keys are missing in environment variables");
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: "15m" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_PRIVATE_KEY, { expiresIn: "30d" });
    await tokenModel.findOneAndDelete({ userId: payload.id });
    await new tokenModel({ userId: payload.id, token: refreshToken }).save();
    return { accessToken, refreshToken };
};
