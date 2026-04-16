const mongoose = require("mongoose");

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

// Login Password Check
userSchema.methods.comparePassword(async function(password){
  return await bcrypt.compare(password,this.password)
})

module.exports = mongoose.model("User", userSchema);