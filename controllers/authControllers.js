const authService = require("../services/authServices");
const User = require("../Models/users");
const AuthToken = require("../Models/authToken");
const bcryptService = require("../services/bcryptservice");


//log in

function login(req, res) {
  const { email, contraseña } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Credenciales Inválidas" });
      }

      bcryptService
        .comparePassword(contraseña, user.contraseña)
        .then((match) => {
          if (!match) {
            return res.status(401).json({ message: "Credenciales Inválidas" });
          }

          const token = authService.generateToken(user);

          AuthToken.create({ userId: user._id, token })
            .then(() => {
              res.json({ token });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ message: "Error al iniciar sesión" });
            });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: "Error al iniciar sesión" });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error al iniciar sesion" });
    });
}

// log out

function logout(req, res) {
  const token = req.headers.authorization.split(" ")[1]
  AuthToken.findOneAndDelete({token})
  .then(()=>{
    res.status(200).json({message: "Sesión cerrada exitosamente", error: {token}})
  })
  .catch((error)=>{
    console.error(error)
    res.status(500).json({message: "Error al iniciar sesión"})
  })
}

module.exports = {
  login,
  logout,
};
