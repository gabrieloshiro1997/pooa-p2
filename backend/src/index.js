require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(cors())

const { API_PORT, DATABASE_URL, DATABASE_PORT, DATABASE_NAME } = process.env

mongoose.connect(`${DATABASE_URL}:${DATABASE_PORT}/${DATABASE_NAME}`)
  .then(() => console.log("OK"))
  .catch((error) => console.log("Erro: " + error))

app.listen(API_PORT, () => console.log(`App running on port ${API_PORT}`))