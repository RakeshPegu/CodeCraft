import jwt from 'jsonwebtoken'
export const verifyToken = async(req, res, next)=>{
     const  authHeader = req.headers['authorization']
    console.log(authHeader)
    const token = authHeader&& authHeader.split(' ')[1]
    try {
        if(!token){
            return res.status(401).json({message:'Not authenticated'})
        }
        const isVerified = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY)
        if(!isVerified){
            return res.status(403).json({success:false, message:'Not authorized'})
        }
        console.log(isVerified)
        req.userId = isVerified.id
        req.role = isVerified.role
        next()

        
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({success:false, message:"Expired Token"})
        }else if(error.name === 'JsonWebTokenError'){
            return res.status(401).json({success:false, message:"Invalid Token"})

        }
        res.status(500).json({success:false, message:'Authentication failed'})
        
    }
}