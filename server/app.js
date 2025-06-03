var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const sequelize = require('./models/index');
const User = require('./models/User');
const Store = require('./models/Store');
const Rating = require('./models/Rating');

// Define associations
User.hasMany(Rating, { foreignKey: 'user_id' });
Store.hasMany(Rating, { foreignKey: 'store_id' });
Store.belongsTo(User, { foreignKey: 'owner_id', as: 'owner' });
Rating.belongsTo(User, { foreignKey: 'user_id' });
Rating.belongsTo(Store, { foreignKey: 'store_id' });

// Sync models (for dev only, use migrations in prod)
if (process.env.NODE_ENV !== 'production') {
  sequelize.sync();
}

module.exports = app;
