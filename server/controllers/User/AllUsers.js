const userModel=require('../../models/userModel')

async function AllUsersController(req,res){
    
    try{
        console.log("ALL USERS: ",req.userId)
        
        const allUsers = await userModel.find()
        
        res.status(200).json({
            data : allUsers,
            error : false,
            success : true,
            message : "All Users details"
        })

    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }

}

module.exports = AllUsersController 