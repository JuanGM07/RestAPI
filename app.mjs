import express from "express"
import bodyParser from "body-parser"
import router from "./routes/studentRoutes.mjs"

const app = express()
app.use(bodyParser.json())
app.use('/students', router)

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log('Listening on port ${port}...')
})
