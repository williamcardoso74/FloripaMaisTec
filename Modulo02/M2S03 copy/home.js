require("dotenv").config();
const express = require("Express");

const connection = require("./assets/database")

const app = express();

connection.authenticate();
connection.sync({ alter: true});

app.use(express.json());

// PORTA DA API
app.listen(process.env.PORT_API, console.log("Api Total Control On-line"));

