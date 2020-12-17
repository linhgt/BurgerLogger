var connection = require("./connection.js");

/*ORM - Object Relational Mapper*/
//Still don't understance why orm is required

var orm = {
    //Handling sql query basically
    selectAll: function(tableInput, cb){
        var Query = "SELECT * FROM ??;";
        connection.query(Query, [tableInput], function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    //Insert a new burger to the table
    insertOne: function(tableInput, burgerName, devoured, cb){
        var Query = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?);";
        connection.query(Query, [tableInput, burgerName, devoured], (err, res)=>{
            if (err) throw err;
            cb(res);
        });
    },
    //Take a burger id and change it devoured state
    updateOne: function(tableInput, devoured, id, cb){
        var Query = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?";
        connection.query(Query, [tableInput, burgerName, devoured, id], (err, res)=>{
            if (err) throw err;
            cb(res);
        })
    }
};


module.exports = orm;