const mongoose = require('mongoose');

const HeroinaSchema = new mongoose.Schema({
    nome: String,
    localDeAtuacao: String,
    personalidade: String,
    amigos: [String],
    inimigos: [String],
    poderes: [String],
    fraquezas: [String],
    grupos: [String],
    fotos: [String]
})

module.exports = mongoose.model('Heroina', HeroinaSchema);