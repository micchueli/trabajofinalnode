const express = require("express")
const connectDb = require("./database/db")
const userRoutes = require("./routes/usersRoutes")
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")
const app = express()
const PORT = 3010

connectDb()

app.use(express.json())

app.use("/api/auth", authRoutes)

app.use("/api/users", userRoutes)

app.use("/api/session", sessionRoutes)


app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: " + PORT)
})
