import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.model.js';

const UserRouter = express.Router();


const JWT_SECRET = process.env.JWT_SECRET || 'my_secret_key'; 

UserRouter.post('/signUp',async (req,res)=>{
    const {name, email, password} = req.body
    try {
 const checkUser = await User.findOne({email});
 if(checkUser) return res.status(409).json({message:"User already exists."})

        if(!name || !email || !password) return res.status(400).json({message:"Empty fields"});
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({name, email, password:hashedPassword});
        console.log("newUser")

        res.status(200).json({message:"Succesfully created account, please log In"})

    } catch (error) {
        console.log("Error in signUp controller: ", error.message);
        if(error.code == 11000) return res.status(400).json({message:"Invalid fields"});
        res.status(500).json({message:"Something went wrong"})
    }
})

UserRouter.post('/logIn', async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password)
        return res.status(400).json({ message: "Empty fields" });
  
      const user = await User.findOne({ email });
      if (!user)
        return res.status(404).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });
  
      
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 
      });
  
      res.status(200).json({ message: "Logged in successfully", userId: user._id });
    } catch (error) {
      console.log("Error in login controller:", error.message);
      res.status(500).json({ message: "Something went wrong" });
    }
  });

  UserRouter.post('/logout', (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production"
    });
    res.status(200).json({ message: "Logged out successfully" });
  });
  

export default UserRouter