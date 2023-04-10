const Sequelize = require('sequelize');

const sequelize = new Sequelize('Trindade','postgres','senai',{
    dialect:'postgres',
    host: 'localhost',
    port: '5432'
})

module.exports = sequelize;