const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected...")
    }catch(err){
        console.log(err)
    }
}


module.exports= connectDB