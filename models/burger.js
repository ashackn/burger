var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
          callback(res);
        }); 
      },

    //Update  
      updateOne: function(id, callback){
        orm.updateOne('burgers', id, callback);
      },
    
    //Post CREATE
      insertOne: function(name, callback){
        orm.insertOne('burgers', name, callback);
      }
    }

module.exports = burger;