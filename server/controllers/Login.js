const userModel=require("../models/userModel")
const bcrypt=require("bcryptjs")


async function UserLoginController(req,res){
    try{
        const {email,password} =req.body
        console.log("req.body: ",req.body)
        
        
        if(!email){
            throw new Error("Please provide email")
        }
        
        if(!password){
            throw new Error("Please provide password")
        }
        
        const user= await userModel.findOne({email})
        if(!user){
            throw new Error("User not found..")
        }
       
        // console.log("User Password: ",user.password)
        // const checkPassword =  await bcrypt.compareSync(password, user.password);
        const checkPassword= password===user.password
        console.log("checkPassword : ",checkPassword)


        if(checkPassword){
        
        }else{
            throw new Error("Incorrect Password..")
        }
        // const payload={
        //     ...req.body,
        //     role:"GENERAL",
        //     password:hashPassword
        // }

        // const userData=userModel(req.body)
        // const saveUser= await userData.save()

        // res.status(201).json({
        //     data:saveUser,
        //     success:true,
        //     error:false,
        //     message:"Logging In..."
        // })

    }catch(err){
        res.json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}


module.exports=UserLoginController