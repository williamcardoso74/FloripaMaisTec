const connection = require("../database");
const Sequelize = require("sequelize");

const Empresa = connection.define("empresa", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    razao_social: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.email,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Empresa;