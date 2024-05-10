const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionConstrollers");
const verifyToken = require("../middleware/verifytoken");


router.get("/currentUser", verifyToken, sessionController.getCurrentUser); 


module.exports = router;