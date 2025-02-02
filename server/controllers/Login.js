const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function UserLoginController(req, res) {
  try {
    const { email, password } = req.body;
    console.log("req.body: ", req.body);

    if (!email) {
      throw new Error("Please provide email");
    }

    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found..");
    }

    // console.log("User Password: ",user.password)
    // const checkPassword =  await bcrypt.compareSync(password, user.password);
    const checkPassword = password === user.password;
    console.log("checkPassword : ", checkPassword);

    if (checkPassword) {
        const tokenData={
            id:user.id,
            email:user.email
        }
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: "8h" });

      const tokenOption={
        http:true,
        secure:true
      }

      res.cookie("token",token,tokenOption).status(201).json({
        success: true,
        error: false,
        data:token,
        message: "Login Successfull...",
      });
      console.log("Auth Token: ", token);
    } else {
      throw new Error("Incorrect Password..");
    }


  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UserLoginController;
