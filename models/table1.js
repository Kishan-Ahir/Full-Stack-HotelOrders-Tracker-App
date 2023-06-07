// Importing Sequelize module
const Sequelize = require("sequelize");

// Connecting database to server
const sequelize = new Sequelize("ordertracker","root","Chandravadiya@2003",{
    host: "localhost",
    dialect: "mysql"
});

// Creating table 1 at database
const table1 = sequelize.define("Table1",{
    id: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        allowNull:false
    },
    price : {
        type: Sequelize.DOUBLE,
        allowNull:false
    }
});

module.exports = table1;