const { Sequelize } = require('sequelize');
const connection = require('../database');
const Paciente = require('./paciente');
const Medico = require('./medico');

const Atendimento = connection.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data_atendimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_medico: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Atendimento.belongsTo(Paciente);
Atendimento.belongsTo(Medico);

module.exports = Atendimento;



/* 

id integer (primary key)
id_paciente
id_medico

Atendimento.BelongsTo(Paciente);
Atendimento.BelongsTo(Medico);

await Atendimento.create();
await Paciente.findOne({where: });
await update Paciente.atendimento

*/
