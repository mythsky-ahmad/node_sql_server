const Sequelize = require('sequelize');
var sequelize = new Sequelize('pal', 'sa', 'sas', { // 'database', 'username', 'password'
    host: 'localhost',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});
module.exports = sequelize;
// Or you can simply use a connection uri
//   var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');