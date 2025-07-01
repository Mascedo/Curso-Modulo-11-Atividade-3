const Filme = require('../models/filmesModel')


class filmeRepository {
    async mostrar(){
        return await Filme.find()
    }

    async criar(filme){
        return  await Filme.create(filme)
    }

    async atualizar(id, filme){
        return await Filme.findByIdAndUpdate(id, filme, {new:true})
    }

    async deletar(id){
        return await Filme.findByIdAndDelete(id)
    }

    }

module.exports = new filmeRepository();