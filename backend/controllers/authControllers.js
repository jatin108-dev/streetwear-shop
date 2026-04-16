const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registering = async (req,res,next){
    const {username,email,phone,password} = req.body

    try{
        // 1. Check User Exist
        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({message: "User already exists"})
        }
    }catch(error){

    }
}