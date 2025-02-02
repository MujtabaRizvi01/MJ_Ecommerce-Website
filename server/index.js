const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();


app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());


app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' data:; style-src 'self' 'unsafe-inline' data:;"
    );
    next();
});


app.use("/api", router);

const PORT = process.env.PORT || 8080;

// ✅ Connect to Database & Start Server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("✅ Connected to Database...");
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
});
