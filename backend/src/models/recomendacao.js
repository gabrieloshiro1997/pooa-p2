const mongoose = require('mongoose')

const recomendacaoSchema = mongoose.Schema({
  descricao: { type: String, required: true },
  data: { type: Date, required: true }
})

module.exports = mongoose.model('Recomendacao', recomendacaoSchema)