import { catchAsycn } from "../utility/catchAsynch.js";

export const testProtectedRoute = catchAsycn(async(req, res)=>{
    res.status(200).json({message:"Allowed to access this protected route"})
    
})