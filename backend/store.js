const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('st-waiting-list', 'user', 'pass', {
      dialect: 'sqlite',
      host: './db.sqlite3'
});

module.exports = sequelize;