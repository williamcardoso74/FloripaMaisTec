require('dotenv').config();
const express = require("express");

const connection = require("./src/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateNewUser = require('./src/middlewares/validate-new-user');
const validateToken = require('./src/middlewares/validate-token');

const Place = require("./src/models/place");
const User = require("./src/models/user");

const createPlaces = require('./src/controllers/places/createPlace');
const listPlaces = require('./src/controllers/places/listPlace');
const deletePlaces = require('./src/controllers/places/deletePlace');
const updatePlaces = require('./src/controllers/places/updatePlace');

const createUsers = require('./src/controllers/users/createUser');
const loginUser = require('./src/controllers/users/loginUser');

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

// M1S09-EX03
app.post("/places", validateToken, createPlaces);

// M1S09-EX04 - busca a lista de lugares
app.get("/places", validateToken, listPlaces);

// M1S09-EX05 - deleta um lugar
app.delete("/places/:id", validateToken, deletePlaces);

// EXERCÍCIO M1S09_EX06 - ROTA PUT
app.put("/places/:id", validateToken, updatePlaces);


// M1S10-EX-02 - ROTA POST (USER)
app.post("/users", validateNewUser, createUsers);

// M1S10_EX03 - ROTA DE SESSÃO E JWT
app.post("/sessions", loginUser);


const port = 3333;
app.listen(port, () => {
  console.log(`Servidor ${port} Trindade Places OnLine`);
});