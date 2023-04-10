const { Sequelize } = require('sequelize');
const connection = require('../database');
const User = require('./user');

const Task = connection.define('task',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
    },
    user_id: {
        type: Sequelize.INTEGER
    }
});

Task.belongsTo(User);
// ou pode ser como está abaixo:
// 


module.exports = Task;