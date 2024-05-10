const User = require("../Models/users");
const bcryptService = require("../services/bcryptservice");

//Para obtener todos los usuarios

function getAllUsers(req, res){
    User.find()
    .then((users) => res.status(200).json(users)) 
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al obtener usuarios"); 
    });
}

//Crear un nuevo usuario

function createUser(req, res) {
  
    const { nombre, edad, email, contraseña } = req.body;
  
    User.create({ nombre, edad, email, contraseña }) //método create de mongoose
      .then((newUser) => res.status(201).json(newUser)) 
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error al crear Usuario");  //El error 500 es error por parte del servidor (hay más errores pero no para este trabajo)
      });
  }


//Actualizar el usuario por id del params

function updatedUser(req, res) {
    const userId = req.params.id 
    const updatedUser = req.body
    User.findByIdAndUpdate(userId, updatedUser, { new: true }) // Los 3 parametors del método son = El Primero cual es el usuario a actualizar, el segundo seria los datos a actualizar, y el tercero hace referencia a que sea actualizado como nuevo
      .then((user) => res.status(200).json(user))
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error al actualizar el usuario"); 
      });
  }

//Eliminar un usuario por id

function deleteUser(req,res){
  const userId = req.params.id;
    User.findByIdAndDelete(userId) //solo se le pasa el id en esta función no hay 3 como la anterior
    .then(()=> res.status(200).send("Usuario eliminado correctamente")) //Estatus 200 se eliminó bien
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error al eliminar el usuario"); //500 error en el servidor
      });
    
}

module.exports={
    createUser,
    deleteUser,
    getAllUsers,
    updatedUser
}