const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))


const PORT = process.env.PORT || 8080

app.get('/', (req,res) => {
    res.json({
        message: "Server is Running"
    })
})

app.use('/api', require("./routes/index"))

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})