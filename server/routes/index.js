const express = require("express")
const UserSignupController=require("../controllers/Signup.js")


const router=express.Router()
router.post("/signup",UserSignupController )

module.exports=router