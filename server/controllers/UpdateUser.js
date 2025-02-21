const userModel=require('../models/userModel')

async function UpdateUserController(req,res){

    try{

        const sessionUser = req.userId

        const {userId, email, username, password, role}=req.body

        
        const user= await userModel.findById(sessionUser)
        
        console.log("Session User Role: ",user.role )
        
        const payload={
            ...(email && {email:email}),
            ...(username && {username:username}),
            ...(role && {role:role}),
        }
        const updateUser= await userModel.findByIdAndUpdate(userId,payload)

        res.status(200).json({
            data : updateUser,
            error : false,
            success : true,
            message : "User Updated Successfully"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }

}

module.exports = UpdateUserController