
const db = require('../db');
const sequelize = require('sequelize');
var User = db.define('User', {
    name: sequelize.STRING,
    email: sequelize.STRING,
    password: sequelize.STRING,
}, {
    timestamps: false
});

module.exports = User;



