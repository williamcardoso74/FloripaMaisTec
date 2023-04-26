require("dotenv").config();

const express = require("express");
const connection = require("./src/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateNewUser = require('./src/middlewares/validate-new-user');
const validateToken = require('./src/middlewares/validate-token');

const Paciente = require('./src/models/paciente');
const Medico = require('./src/models/medico');
const Enfermeiro = require('./src/models/enfermeiro');
const Atendimento = require('./src/models/atendimento');

const createUser = require('./src/controllers/users/createUser');
const createLogin = require('./src/controllers/users/createLogin');

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

// ROTAS USER
app.post('/api/users', validateNewUser, createUser);
app.post('/api/users/login', createLogin);

// ROTAS PACIENTE
app.post('/api/pacientes', validateToken, createPaciente);
app.put('/api/pacientes/:id', validateToken, updatePaciente);
app.put('/api/pacientes/:id/status', validateToken, updateStatusPaciente);
app.get('/api/pacientes', validateToken,listPaciente);
app.get('/api/pacientes/:id', validateToken, listPacienteId);
app.delete('/api/pacientes/:id', validateToken, deletePaciente);

// ROTAS MEDICO
app.post('/api/medicos', validateToken, createMedico);
app.put('/api/medicos/:id', validateToken, updateMedico);
app.put('/api/medicos/:id/status', validateToken, updateMedicoStatus);
app.get('/api/medicos', validateToken, listMedico);
app.get('/api/medicos/:id', validateToken, listMedicoID);
app.delete('/api/medicos/:id', validateToken, deleteMedico);

// ROTAS ENFERMEIRO
app.post('/api/enfermeiros', validateToken, createEnfermeiro);
app.put('/api/enfermeiros/:id', validateToken, updateEnfermeiro);
app.get('/api/enfermeiros', validateToken, listEnfermeiro);
app.get('/api/enfermeiros/:id', validateToken, listEnfermeiroID);
app.delete('/api/enfermeiros/:id', validateToken, deleteEnfermeiro);

// ROTA ATENDIMENTO
app.post( '/api/atendimentos', validateToken, atendimento);


// PORTA DA API
app.listen(process.env.PORT_API, console.log("API on-line"));
