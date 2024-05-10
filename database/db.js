const mongoose = require('mongoose');
const MongoDBUrl = 'mongodb+srv://mllano:woj3VW2tg5HhNxII@cluster0.nnnf9kf.mongodb.net/Nodefinal';
mongoose.connect(MongoDBUrl);
const db = mongoose.connection

function connectDB() {
    return new Promise((res, rej) => {
        mongoose
            .connect(MongoDBUrl)
            .then(() => {
                console.log("Conexion a la DB establecida correctamente");
                res();
            })
            .catch((err) => {
                console.error("Error al conectar a la DB ", err);
                rej(err);
            });
    });
}

module.exports = connectDB;