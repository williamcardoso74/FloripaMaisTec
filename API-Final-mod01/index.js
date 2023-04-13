require("dotenv").config();

const express = require("express");
const connection = require("./src/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Paciente = require('./src/models/paciente');
const Medico = require('./src/models/medico');

const createPaciente = require('./src/controllers/paciente/createPaciente');
const updatePaciente = require('./src/controllers/paciente/updatePaciente');
const updateStatusPaciente = require('./src/controllers/paciente/updateStatusPaciente');
const listPacienteStatus = require('./src/controllers/paciente/listPacienteStatus');
const listPacienteId = require('./src/controllers/paciente/listPacienteID');
const deletePaciente = require('./src/controllers/paciente/deletePaciente');

const createMedico = require('./src/controllers/medico/createMedico');
const updateMedico = require('./src/controllers/medico/updateMedico');
const updateMedicoStatus = require("./src/controllers/medico/updateMedicoStatus");

const app = express();

connection.authenticate();
connection.sync({ alter: true });

app.use(express.json());

// ROTAS PACIENTE
app.post('/api/pacientes', createPaciente);
app.put('/api/pacientes/:id', updatePaciente);
app.put('/api/pacientes/:id/:status', updateStatusPaciente);
app.get('/api/pacientes', listPacienteStatus);
app.get('/api/pacientes/:id', listPacienteId);
app.delete('/api/pacientes/:id', deletePaciente);

// ROTAS MEDICO
app.post('/api/medicos', createMedico);
app.put('/api/medicos/:id', updateMedico);
app.put('/api/medicos/:id/:status', updateMedicoStatus);


// PORTA DA API
app.listen(process.env.PORT_API, console.log("API on-line"));
