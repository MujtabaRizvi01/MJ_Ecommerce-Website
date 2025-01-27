const express = require("express")
const cors = require("cors")
const cookieParser =require("cookie-parser")
const router = require("./routes/index")
require("dotenv").config()
const connectDB = require("./config/db")


const app = express()
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use("/api",router)
app.use(cookieParser())

const PORT = 8080 || process.env.PORT

connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log("Connected to Database......")
        console.log("Server is running.....")
        
    })
})