
const db = require('../db');
const sequelize = require('sequelize');
var Test = db.define('Test', {
    name: sequelize.STRING,
    age: sequelize.INTEGER,
});

module.exports = Test;



