const mongoose =require("mongoose")

const productschema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    brandName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    productImage : [],
    description: {
        type:String
    },
    
    price: {
        type:Number
    },
    sellingPrice: {
        type:Number
    }
},{
    timestamps:true
})

const productModel=mongoose.model("product",productschema)

module.exports=productModel