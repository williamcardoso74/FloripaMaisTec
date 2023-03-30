const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres', //com qual banco de dados vai se conectar
    host: 'localhost', //onde está o banco
    username: 'postgres', //qual usuário
    password: 'senai', //qual a senha?
    port: '5432', //qual é a porta
    database: 'trindade_places', //qual nome do banco de dados
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }

});

module.exports = connection;