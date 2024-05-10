const express = require("express")
const router = express.Router()

const userController= require("../controllers/userControllers")
//rutas
router.get("/",userController.getAllUsers) // Ruta para obtener todos los usuarios
router.post("/",userController.createUser) // Ruta para crear un usuario
router.put("/:id", userController.updatedUser) // Ruta para actualizar un usuario
router.delete("/:id", userController.deleteUser) // Ruta para eliminar un usuario
//exportación
module.exports= router