const { Sequelize } = require('sequelize');

const connection = require('../database');

const Place = connection.define('place',{
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
    telefone:{
        type: Sequelize.STRING(12),
    },
    opening_hours: {
        type: Sequelize.STRING(4)
    },
    description: Sequelize.STRING,
    latitude: Sequelize.DECIMAL,
    longitude: Sequelize.DECINAL
});