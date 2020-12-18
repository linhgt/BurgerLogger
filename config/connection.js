/*Connect to the database*/
var mysql = require("mysql");
var connection;

require("dotenv").config();

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        database:"burgers_db",
        user:"root",
        password:process.env.DB_PASS
    });
}

connection.connect(function(err){
    if (err){
        console.log("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;