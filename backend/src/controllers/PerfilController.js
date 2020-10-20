/*MOSTRAR O PERFIL DO USUÁRIO*/

const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const usuario_id = req.headers.authorization;

        const cartao = await connection('cartao')
        .where('usuario_id', usuario_id)
        .select('*');

        return res.json(cartao)
    }
}