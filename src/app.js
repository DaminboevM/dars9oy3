import express from "express"
import "dotenv/config"
import { ConnectDB } from './config/database.js'
import router from "./routers/router.js"


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
await ConnectDB()
app.use(router)


app.listen(PORT, () => console.log(`Listening in ${PORT}-port`))