import express from "express"
import cors from "cors"
import "./loadEnvironment.mjs"
import api from "./routes/api.mjs"

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", api)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

// Here, we are importing express and cors to be used.
// const port process.env.port will access the port variable from the config.env we required.
