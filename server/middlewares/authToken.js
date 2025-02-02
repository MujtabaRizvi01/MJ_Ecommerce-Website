async function authToken(req, res, next) {
    try {
        // Get token from either cookie or authorization header
        const token = req.cookies?.token || req.headers['authorization'];

        // Check if token exists
        if (token) {
            // console.log("Auth Token:   ", token);  // Log token if available
        } else {
            // If no token is found, you can handle the situation here (e.g., return unauthorized status)
            return res.status(401).json({ message: "Unauthorized: Token missing" });
        }

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
