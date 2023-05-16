const { Sequelize } = require("sequelize");
const connection = require("../database");
const User = require('./user');

const Place = connection.define("place", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  opening_hours: {
    type: Sequelize.STRING,
  },
  description: Sequelize.STRING,
  latitude: Sequelize.DECIMAL,
  longitude: Sequelize.DECIMAL,
  user_Id: {
    type: Sequelize.INTEGER 
  }
});

Place.belongsTo(User);

module.exports = Place;
