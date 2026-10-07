import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const protect = (req,res, next) => {
    const authheader = req.headers.authorization

    if(!authheader || !authheader.startsWith("Bearer")){
        return res.status(401).json({message:"Not authorized"})
    }

    const token = authheader.split(" ")[1]

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decode.userId
        next()
    }catch (err){
        return res.status(401).json({message:"Invalid token"})
    }
    
}