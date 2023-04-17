require("dotenv").config();

const express = require("express");
const connection = require("./src/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Paciente = require('./src/models/paciente');
const Medico = require('./src/models/medico');
const Enfermeiro = require('./src/models/enfermeiro');
const Atendimento = require('./src/models/atendimento');

const createPaciente = require('./src/controllers/paciente/createPaciente');
const updatePaciente = require('./src/controllers/paciente/updatePaciente');
const updateStatusPaciente = require('./src/controllers/paciente/updateStatusPaciente');
const listPaciente = require('./src/controllers/paciente/listPaciente');
const listPacienteId = require('./src/controllers/paciente/listPacienteID');
const deletePaciente = require('./src/controllers/paciente/deletePaciente');

const createMedico = require('./src/controllers/medico/createMedico');
const updateMedico = require('./src/controllers/medico/updateMedico');
const updateMedicoStatus = require("./src/controllers/medico/updateMedicoStatus");
const listMedico = require('./src/controllers/medico/listMedico');
const listMedicoID = require('./src/controllers/medico/listMedicoID');
const deleteMedico = require('./src/controllers/medico/deleteMedico');
const createEnfermeiro = require("./src/controllers/enfermeiro/createEnfermeiro");
const updateEnfermeiro = require("./src/controllers/enfermeiro/updateEnfermeiro");
const listEnfermeiro = require("./src/controllers/enfermeiro/listEnfermeiro");
const listEnfermeiroID = require("./src/controllers/enfermeiro/listEnfermeiroID");
const deleteEnfermeiro = require("./src/controllers/enfermeiro/deleteEnfermeiro");

const atendimento = require("./src/controllers/atendimento/atendimento");


const app = express();

connection.authenticate();
connection.sync({ alter: true });

app.use(express.json());

// ROTAS PACIENTE
app.post('/api/pacientes', createPaciente);
app.put('/api/pacientes/:id', updatePaciente);
app.put('/api/pacientes/:id/status', updateStatusPaciente);
app.get('/api/pacientes', listPaciente);
app.get('/api/pacientes/:id', listPacienteId);
app.delete('/api/pacientes/:id', deletePaciente);

// ROTAS MEDICO
app.post('/api/medicos', createMedico);
app.put('/api/medicos/:id', updateMedico);
app.put('/api/medicos/:id/status', updateMedicoStatus);
app.get('/api/medicos', listMedico);
app.get('/api/medicos/:id', listMedicoID);
app.delete('/api/medicos/:id', deleteMedico);

// ROTAS ENFERMEIRO
app.post('/api/enfermeiros', createEnfermeiro);
app.put('/api/enfermeiros/:id', updateEnfermeiro);
app.get('/api/enfermeiros', listEnfermeiro);
app.get('/api/enfermeiros/:id', listEnfermeiroID);
app.delete('/api/enfermeiros/:id', deleteEnfermeiro);

// ROTA ATENDIMENTO
app.post( '/api/atendimentos', atendimento);


// PORTA DA API
app.listen(process.env.PORT_API, console.log("API on-line"));
