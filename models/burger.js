var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgerList", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals, cb) {
      orm.create("burgerList", vals, function(res) {
        cb(res);
      });
    },
    update: function(vals, condition, cb) {
      orm.update("burgerList", vals, condition, function(res) {
        cb(res);
      });
    },
    delete: function( condition, cb){
      orm.delete("burgerList", condition, function(res){
        cb(res);
      })
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;