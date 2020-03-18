const mongoose = require('mongoose');

const HeroinaSchema = new mongoose.Schema({
    nome: String,
    nomeCompleto: String,
    codinome: [String],
    terraNatal: String,
    personalidade: String,
    especie: String,
    editora: String,
    amigos: [String],
    inimigos: [String],
    poderes: [String],
    fraquezas: [String],
    grupos: [String],
    fotos: [String]
})

module.exports = mongoose.model('Heroina', HeroinaSchema);