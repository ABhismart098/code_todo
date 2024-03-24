import {User} from "../Model/datamodel"
import jwt from "jsonwebtoken"

export const login = async (req,res) => {
   try{
    const {email,password} = req.body;
    const user = await User.findone({email, password});

    if(!user){
        return res.status(400).json({
            sucess: false,
            message:"Invalid username or password"
        });
    }
    const token =  jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY);
    res.status(200).cookie("token", token,{
        expires: new Date(Date.now()+ 6000000),
        httpOnly: true
    }).json({
        sucess: true,
        message: "Login successfully"
    });


   } catch(error){
    return res.status(400).json({
        sucess: false,
        message:error.message
    });


   }

};

export const logout = async (req,res) => {
    
     try{
     
     res.status(200).cookie("token", null,{
         expires: new Date(Date.now()),
         httpOnly: true
     }).json({
         sucess: true,
         message: "Logout successfully"
     });
 
 
    } catch(error){
     return res.status(400).json({
         sucess: false,
         message:error.message
     });
 
 
    }
 
 };