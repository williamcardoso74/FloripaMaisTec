const { Sequelize } = require("sequelize");
const connection = require("../database");

const Paciente = connection.define("paciente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeCompleto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
  },
  dataNascimento: {
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
  contatoEmergencia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  listaAlergias: {
    type: Sequelize.STRING,
  },
  listaCuidados: {
    type: Sequelize.STRING,
  },
  convenio: {
    type: Sequelize.STRING,
  },
  statusAtendimento: Sequelize.ENUM(
    "AGUARDANDO_ATENDIMENTO",
    "EM_ATENDIMENTO",
    "ATENDIDO",
    "NAO_ATENDIDO"
  ),
  atendimentos: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Paciente;
