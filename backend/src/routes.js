/*ROTAS DO BACK-END EM UM ARQUIVO DE ROTAS  */

const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const CartaoController = require('./controllers/CartaoController');
const SessaoController = require('./controllers/SessaoController');
const PerfilController = require('./controllers/PerfilController');

routes.post('/sessao', SessaoController.create);

routes.get('/perfil', PerfilController.index);

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);



routes.post('/cartao', CartaoController.create);
routes.get('/cartao', CartaoController.index);
routes.delete('/cartao/:id', CartaoController.delete);
routes.post('/cartao/:id', CartaoController.update);

module.exports = routes;