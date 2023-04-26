const { Sequelize } = require("sequelize");
const connection = require("../database");

const Enfermeiro = connection.define("enfermeiro", {
  identificador: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  instituicao_ensino_formacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cadastro_cofen_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Enfermeiro;