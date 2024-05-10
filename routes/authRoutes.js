const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");
const verifyToken= require("../middleware/verifytoken")

//login

router.post("/login", authController.login);

//logout

router.post("/logout", verifyToken, authController.logout);

module.exports = router;
