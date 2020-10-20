const connection = require('../database/connection');

module.exports = {

    //LER E LISTAR OS DADOS
    async index(req,res){
        const { pagina = 1 } = req.body;

        const [contador] = await connection('cartao').count()

        const cartao = await connection('cartao')
        .join('usuario', 'usuario.id', '=', 'cartao.usuario_id')
        .limit(5)
        .offset((pagina - 1 )*5)
        .select(['cartao.*', 'usuario.nome', 'usuario.email']);
        
        res.header('X-Total-Count',contador['count(*)'])

        return res.json(cartao);
    },

    //CRIAR O DADOS
    async create(req,res){
        const {nome, numero, validade, cvv} = req.body;
        const usuario_id = req.headers.authorization;

        const [id] = await connection('cartao').insert({
            nome,
            numero,
            validade,
            cvv,
            usuario_id,
        });

        return res.json({id});
    },
    //DELETAR OS DADOS
    async delete(req,res){
        const {id} = req.params;
        const usuario_id = req.headers.authorization;

        const  cartao = await connection('cartao')
            .where('id', id)
            .select('usuario_id')
            .first();

        if(cartao.usuario_id != usuario_id){
            return res.status(401).json({error: "Operação não permitida"})
        }

        await connection('cartao')
            .where('id',id)
            .delete();

        return res.status(204).send();
    },
    //ALTERAR OS DADOS
    async update(req,res){
        const {nome, numero, validade, cvv} = req.body;
        const usuario_id = req.headers.authorization;
        const {id} = req.params;

        const  cartao = await connection('cartao')
            .where('id', id)
            .select('usuario_id')
            .first();

        if(cartao.usuario_id != usuario_id){
            return res.status(401).json({error: "Operação não permitida"})
        }
        await connection('cartao')
        .where('id',id)
        .update({nome, numero, validade, cvv});

        return res.json({id});
    }
}