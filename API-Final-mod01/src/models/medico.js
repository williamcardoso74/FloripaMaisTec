const { Sequelize } = require("sequelize");
const connection = require("../database");

const Medico = connection.define("medico", {
  id: {
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
  cadastro_crm_uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especializacao_clinica: Sequelize.ENUM(
    "CLINICO_GERAL",
    "ANESTESISTA",
    "DERMATOLOGIA",
    "GINECOLOGIA",
    "NEUROLOGIA",
    "PEDIATRIA",
    "PSIQUIATRIA",
    "ORTOPEDIA"
  ),
  estado_no_sistema: {
    type: Sequelize.ENUM("ATIVO","INATIVO"),
    defaultValue: "ATIVO"
  },
  atendimentos_realizados: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
});

module.exports = Medico;
