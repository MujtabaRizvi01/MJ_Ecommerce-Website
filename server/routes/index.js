const express = require("express");
const UserSignupController = require("../controllers/User/Signup.js");
const UserLoginController = require("../controllers/User/Login.js");
const UserDetailsController = require("../controllers/User/UserDetails.js");
const UserLogoutController = require("../controllers/User/Logout.js");
const authToken = require("../middlewares/authToken.js");
const AllUsersController = require("../controllers/User/AllUsers.js");
const UpdateUserController = require("../controllers/User/UpdateUser.js");
const UploadProductController = require("../controllers/Product/UploadProduct.js");
const AllProductsController=require('../controllers/Product/AllProducts.js')
const UpdateProductController=require("../controllers/Product/UpdateProduct");
const getCategoryProductController = require("../controllers/Product/GetCategoryProductOne.js");

const router = express.Router();

// User
router.post("/signup", UserSignupController);
router.post("/login", UserLoginController);
router.get("/user-logout", UserLogoutController);
router.get("/user-details", authToken, UserDetailsController);

//Admin Panel
router.get("/all-users",authToken,AllUsersController);
router.post("/user-update",authToken,UpdateUserController);

// Product
router.post("/upload-product",authToken,UploadProductController);
router.get("/all-products",authToken,AllProductsController);
router.post("/update-product",authToken,UpdateProductController);
router.post("/update-product",authToken,UpdateProductController);
router.get("/get-categoryProduct",getCategoryProductController)

module.exports = router;
