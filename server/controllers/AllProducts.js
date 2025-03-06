const productModel = require("../models/productModel")

const AllProductsController = async(req,res)=>{
    try{
        const Products = await productModel.find().sort({ createdAt : -1 })

        res.json({
            message : "All Products",
            success : true,
            error : false,
            data : Products
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = AllProductsController