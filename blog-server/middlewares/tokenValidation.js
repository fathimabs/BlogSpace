const jwt = require('jsonwebtoken')

const tokenValidations = (req, res, next) => {

    const secretKey = process.env.JWT_SECRET_KEY

    if (!req.headers.authorization) {
        return res.status(401).json({ message: "token not available" })
    }

    const token = req.headers.authorization.split(' ')[1]

    try {
        if (!token) {
            return res.status(401).json({ message: "Invalid token format" });
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid or expired token" });
            }
            req.user = decoded;

            next();
        });
    } catch (error) {
        return res.status(500).json({ message: "Token validation failed" });
    }

}

module.exports = tokenValidations