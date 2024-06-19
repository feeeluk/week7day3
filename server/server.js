import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"


const PORT = 7070
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})

app.get('/', (request, response) => {
    response.json({message: `Root for Wednesday`})
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})