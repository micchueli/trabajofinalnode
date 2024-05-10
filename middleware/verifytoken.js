const jwt = require("jsonwebtoken");



function verifyToken(req, res, next) {
    return new Promise((resolve, reject) => {
        const token = req.headers.authorization;

        if (!token) {
            reject({
                status: 401,
                message: "Token de autenticación no proporcionad",
            });
        }
        jwt.verify(
            token.split(" ")[1],
            "516059883fcb03309401b2eadce27579e5020554fd1f1a7a39a19accd82b6d14",
            (error, decodedToken) => {
                if (error) {
                    reject({ status: 401, message: "Token de autenticación no válido" });
                } else {
                    req.userId = decodedToken.userId;
                    resolve();
                }
            }
        );
    })
        .then(() => next()) 
        .catch((error) =>
            res.status(error.status || 500).json({ message: error.message })
        );
}

module.exports = verifyToken;
