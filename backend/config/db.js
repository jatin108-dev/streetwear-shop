const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/clothing-store")
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB