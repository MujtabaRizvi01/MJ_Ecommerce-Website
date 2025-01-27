const express = require("express")
const UserSignupController=require("../controllers/Signup.js")
const UserLoginController=require("../controllers/Login.js")


const router=express.Router()
router.post("/signup",UserSignupController)
router.post("/login",UserLoginController)

module.exports=router