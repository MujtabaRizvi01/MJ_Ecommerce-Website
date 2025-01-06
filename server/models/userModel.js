const mongoose =require("mongoose")

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const userModel=mongoose.model("user",userschema)

module.exports=userModel