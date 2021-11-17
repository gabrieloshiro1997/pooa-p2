require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const Recomendacao = require('./models/recomendacao')

app.use(express.json())
app.use(cors())

const { API_PORT, DATABASE_URL, DATABASE_PORT, DATABASE_NAME } = process.env

mongoose.connect(`${DATABASE_URL}:${DATABASE_PORT}/${DATABASE_NAME}`)
  .then(() => console.log("OK"))
  .catch((error) => console.log("Erro: " + error))

app.get('/api/recomendacao', (req, res) => {
  Recomendacao.find().then((documents) => {
    res.status(200).json({ recomendacoes: documents })
  }).catch(error => console.log(error))
})

app.post('/api/recomendacao', (req, res) => {

  const recomendacao = new Recomendacao({
    descricao: req.body.descricao
  })
  recomendacao.save()
    .then((recomendacaoInserida) => {
      res.status(201).json(recomendacaoInserida)
    })
})

app.listen(API_PORT, () => console.log(`App running on port ${API_PORT}`))