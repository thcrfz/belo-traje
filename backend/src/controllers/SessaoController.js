/*REALIZAR O LOGIN NA SESSÃO*/

const connection = require('../database/connection');

module.exports  = {

    async create(req,res){
        const {id} = req.body;

        const usuario = await connection ('usuario')
            .where('id', id)
            .select('nome')
            .first();

        if (!usuario) {
            return res.status(400).json({error: 'Não a usuario cadastrado com este id e senha!'})
        }

        return res.json(usuario);
    }
};