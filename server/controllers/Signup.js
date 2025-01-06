const userModel=require("../models/userModel")
const bcrypt=require("bcryptjs")


async function UserSignupController(req,res){
    try{
        const {username,email,password} =req.body
        console.log("req.body: ",req.body)
        
        const user= await userModel.findOne({email})
        if(user){
            throw new Error("User already exist..")
        }
        
        if(!username){
            throw new Error("Please provide username")
        }
        if(!email){
            throw new Error("Please provide email")
        }

        if(!password){
            throw new Error("Please provide password")
        }

       

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        if(!hashPassword){
            throw new Error("Problem in Hashing")
        }
        const payload={
            ...req.body,
            password:hashPassword
        }

        const userData=userModel(req.body)
        const saveUser= await userData.save()

        res.status(201).json({
            data:saveUser,
            success:true,
            error:false,
            message:"Registered user Successfully"
        })

    }catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}


module.exports=UserSignupController