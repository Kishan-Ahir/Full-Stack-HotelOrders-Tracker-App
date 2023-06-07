// Importing Sequelize module
const Sequelize = require("sequelize");

// Connecting database to server
const sequelize = new Sequelize("ordertracker","root","Chandravadiya@2003",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;