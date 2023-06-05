require("dotenv").config()

const express = require('express')
const app = express()

const connection = require("./src/database")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

app.use(express.json())

connection.authenticate()
connection.sync({ alter: true })

app.listen(process.env.PORT_API, console.log('API Church ON-Line'))