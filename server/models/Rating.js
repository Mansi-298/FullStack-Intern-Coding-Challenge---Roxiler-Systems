const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const User = require('./User');
const Store = require('./Store');

const Rating = sequelize.define('Rating', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
  store_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Store, key: 'id' } },
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
}, {
  tableName: 'ratings',
  timestamps: false,
});

module.exports = Rating;
