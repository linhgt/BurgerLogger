//Handle the controller, implementing the routes
var express = require("express");

//Create modular, mountable express router that can be exported
var route = express.Router();

var burger = require("../models/burger.js");

//Route for retrieving all the burger
route.get("/", function(req, res){
    burger.selectAll(function(data){
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render("index", obj);
    });
});

//Route for creating a new burger
route.post("/api/create", (req, res)=>{
    burger.insertOne(req.body.burger_name, req.body.devoured, (result) => {
        var obj = {
            id: result.insertId
        };
        res.json(obj);
    });
});

//Route for updating a burger
route.put("/api/update/", (req, res) => {
    burger.updateOne(req.body.devoured, req.body.id, (result) =>{
        res.json({id:result.insertId});
    });
})

module.exports = route;