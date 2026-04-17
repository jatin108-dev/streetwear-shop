const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  password: String,
});

// Hashing the password
userSchema.pre('save',async function(next){
    const user = this;
    if(!user.isModified("password")){
    return(next)
    }
    
    try{
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password
        next()
    }catch(error){
        next(err)
    }
})

userSchema.methods.generateToken(async function(){
  return jwt.sign(
    {id: this._id}, // Payload
    "mysecretkey", // secret key
    {expiresIn: "30d"}, // expiry
  )
})

// Login Password Check
userSchema.methods.comparePassword(async function(password){
  return await bcrypt.compare(password,this.password)
})

module.exports = mongoose.model("User", userSchema);