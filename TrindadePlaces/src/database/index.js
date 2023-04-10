const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: process.env.DIALECT_DATABASE, //com qual banco de dados vai se conectar
    host: process.env.HOST_DATABASE, //onde está o banco
    username: process.env.USER_DATABASE, //qual usuário
    password: process.env.PASSWORD_DATABASE, //qual a senha?
    port: process.env.PORT_DATABASE, //qual é a porta
    database: process.env.NAME_DATABASE, //qual nome do banco de dados
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }

});

module.exports = connection;