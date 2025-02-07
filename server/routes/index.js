const express = require("express");
const UserSignupController = require("../controllers/Signup.js");
const UserLoginController = require("../controllers/Login.js");
const UserDetailsController = require("../controllers/UserDetails.js");
const UserLogoutController = require("../controllers/Logout.js");
const authToken = require("../middlewares/authToken.js");

const router = express.Router();

router.post("/signup", UserSignupController);
router.post("/login", UserLoginController);
router.get("/user-logout", UserLogoutController);
router.get("/user-details", authToken, UserDetailsController);

module.exports = router;
