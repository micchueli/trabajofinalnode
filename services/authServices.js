const jwt = require("jsonwebtoken");
const JWT_SECRET = "516059883fcb03309401b2eadce27579e5020554fd1f1a7a39a19accd82b6d14";
function generateToken(user) {
    const payload = {
      userId: user._id,
      email: user.email,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
    return token
  }
  module.exports= {
      generateToken
  }