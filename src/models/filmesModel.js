const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    titulo: String,
    diretor: String,
    ano: String,
    detalhes: String,
    img_url: String
})

module.exports = Filme