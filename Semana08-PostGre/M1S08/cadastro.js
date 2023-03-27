const Sequelize = require('sequelize');
const database = require('./db');

const Cadastro = database.define('cadastro',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dt_nasc:{
        type:Sequelize.DATE,
        allowNull:false
    },
    telefone:{
        type:Sequelize.STRING(12),
        allowNull:false
    }
});

module.exports = Cadastro;