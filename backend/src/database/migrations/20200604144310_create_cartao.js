/* CRIAÇÃO DO BANCO DE DADOS DO CARTÃO COM O KNEX */
exports.up = function(knex) {
    return knex.schema.createTable('cartao', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('numero').notNullable();
        table.string('validade').notNullable();
        table.string('cvv').notNullable();

        table.string('usuario_id').notNullable();
        table.foreign('usuario_id').references('id').inTable('usuario');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cartao');
};
