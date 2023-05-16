const Sequelize = require('sequelize');
const sequelize = new Sequelize('M1S08','postgres','senai',{
    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
});

module.exports = sequelize;