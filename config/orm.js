var connection = require("./connection.js");

/*ORM - Object Relational Mapper*/
//Still don't understance why is orm required

var orm = {
    selectAll: function(tableInput, cb){
        var Query = "SELECT * FROM ??;";
        connection.query(Query, [tableInput], function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(tableInput, burgerName, devoured, cb){
        var Query = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?);";
        connection.query(Query, [tableInput, burgerName, devoured], (err, res)=>{
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(tableInput, burgerName, devoured, id, cb){
        var Query = "UPDATE ?? SET burger_name = ?, devoured = ? WHERE id = ?";
        connection.query(Query, [tableInput, burgerName, devoured, id], (err, res)=>{
            if (err) throw err;
            cb(res);
        })
    }
};


module.exports = orm;