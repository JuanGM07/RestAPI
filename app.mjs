import express from "express"
import bodyParser from "body-parser"
import router from "./routes/studentRoutes.mjs"
import helmet from "helmet"

const app = express()

// Middleware para parsear JSON
app.use(bodyParser.json())

// Middleware de seguridad
app.use(helmet())

// Middleware de rutas
app.use('/students', router)

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`Listening on port ${port}...`)
})
