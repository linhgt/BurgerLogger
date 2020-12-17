/*Connect to the database*/
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        database:"burger_db",
        user:"root",
        password:"Hoanhtrang@123"
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