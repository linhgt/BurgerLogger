//Import ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    //Query retrieving all burgers
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },
    //Query inserting burger
    insertOne: function(name, devoured, cb){
        orm.insertOne("burger", name, devoured, function(res){
            cb(res);
        });
    },
    //Query updating burger
    updateOne: function(name, devoured, id, cb){
        orm.updateOne("burger", name, devoured, id, function(res){
            cb(res);
        });
    }
};

//exports database functions for the controller
module.exports = burger;
