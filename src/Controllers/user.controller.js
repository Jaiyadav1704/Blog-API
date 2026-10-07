import * as userModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async(req,res) => {
    const {name, email, password} = req.body

    const userExist = await userModel.GetUser(email)

    if(userExist){
        return res.status(400).json({message:"User already exist"})
    }

    const hashpass = await bcrypt.hash(password, 10)

    const user = await userModel.Create(name,email,hashpass);

    res.status(201).json({
        message:"New user added",
        user
    })
}

export const login = async(req,res) => {
    const {email, password} = req.body

    const user = await userModel.GetUser(email)

    if(!user){
        return res.status(400).json({message:"Invalid credentials"})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        return res.status(200).json({message:"Invalid credentials"})
    }

    const token = jwt.sign(
        {userId: user.id},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    res.json({token})
}