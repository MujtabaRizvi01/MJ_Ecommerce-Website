const jwt = require("jsonwebtoken");



async function authToken(req, res, next) {
    try {
        // Get token from either cookie or authorization header
        const token = req.cookies?.token || req.headers['authorization'];

        if (token) {
            // console.log("Auth Token:   ", token);  // Log token if available
            if(!token){
                return res.status(200).json({
                    message : "Please Login...!",
                    error : true,
                    success : false
                })
            }
            jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
                // console.log("Error: ",err)
                // console.log("Decoded: ",decoded)
                // if(err){
                //     console.log("Error Auth: ",err)

                // }
                req.userId=decoded?._id

            });
        } 
        // else {
        //     return res.json({ 
        //         message : "Unauthorized: Token missing ", 
        //         error : true, 
        //         success : false  
        //     });
        // }
        next();  // Pass control to the next middleware or route handler


    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;