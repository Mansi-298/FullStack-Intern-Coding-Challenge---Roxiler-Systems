const { Sequelize } = require('sequelize');

// Update these values with your MySQL credentials
const sequelize = new Sequelize('store_management', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
