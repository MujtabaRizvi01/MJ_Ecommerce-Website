const userModel= require('../models/userModel')

const UploadProductPermission= async(userId)=>{

    const user= await userModel.findById(userId)

    if(userId.role==='ADMIN'){
        return true
    }

    return false
}

module.exports= UploadProductPermission