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
  Recomendacao.find().sort({ data: -1 }).then((recomendacoes) => {
    const response = recomendacoes.map(recomendacao => ({ id: recomendacao._id, descricao: recomendacao.descricao, data: recomendacao.data }))
    res.status(200).json(response)
  }).catch(error => console.log(error))
})

app.post('/api/recomendacao', (req, res) => {

  const recomendacao = new Recomendacao({
    descricao: req.body.descricao,
    data: req.body.data
  })
  recomendacao.save()
    .then((recomendacaoInserida) => {
      console.log(recomendacao)
      res.status(201).json(recomendacaoInserida)
    })
})

app.get('/api/recomendacao/:id', (req, res) => {
  const id = req.params.id;
  Recomendacao.findById(id).then((recomendacao) => {
    const response = { id: recomendacao._id, descricao: recomendacao.descricao, data: recomendacao.data };
    console.log(response)
    res.status(200).json(response)
  }).catch(error => console.log(error))

})

app.put('/api/recomendacao/:id', (req, res) => {
  console.log(req.params.id)
  const recomendacao = new Recomendacao({
    _id: req.params.id,
    descricao: req.body.descricao,
    data: req.body.data
  })

  Recomendacao.updateOne(
    { _id: req.params.id },
    recomendacao
  )
    .then((recomendacao) => {
      res.status(200).json(recomendacao)
    })

})

app.delete('/api/recomendacao/:id', (req, res) => {
  const id = req.params.id
  Recomendacao.deleteOne({ _id: id })
    .then(() => {
      res.status(200).json({ id })
    })
})

app.listen(API_PORT, () => console.log(`App running on port ${API_PORT}`))