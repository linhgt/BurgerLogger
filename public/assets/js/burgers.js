//Orm to interact with the database
const orm = require("../config/orm.js");

const burger = {
    //Handle returning all burgers
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    //Handle inserting one burger
    insertOne: function(burgerName, devoured, cb){
        orm.insertOne("burgers", burgerName, devoured, function(res){
            cb(res);
        });
    },
    //Handle updating one burger
    updateOne: function(burgerName, devoured, id, cb){
        orm.updateOne("burgers", burgerName, devoured, id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;