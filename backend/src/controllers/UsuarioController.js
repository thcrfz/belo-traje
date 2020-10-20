/* REGISTRO DO USUÁRIO NO BANCO DE DADOS */


const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async index(req,res){
        const usuario = await connection('usuario').select('*');
        return res.json(usuario)
    },
    

    async create(req,res){
        const {nome, email} = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('usuario').insert({
        id,
        nome,
        email,
    })

    return res.json({id});
    }
}