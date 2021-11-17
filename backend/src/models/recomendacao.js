const mongoose = require('mongoose')

const recomendacaoSchema = mongoose.Schema({
  descricao: { type: String, required: true },
  data: { type: Date, required: false, default: new Date() }
})

module.exports = mongoose.model('Recomendacao', recomendacaoSchema)