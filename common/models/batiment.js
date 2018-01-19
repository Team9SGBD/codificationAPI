'use strict';

module.exports = function(Batiment) {
  var app = require('../../server/server');
//Génération  de la table Batiment sous mysql

var batsql = {

  "name": "Batiment",
  "options":{
      "idInjection": false,
      "mysql": {
        "schema":"LOOPBACK",
        "table":"BATIMENT"
      }
    },
    "properties": {
      "idbatiment ": {
          "type": "String",
          "length": 20,
          "id": 1
      },
    "nombatiment": {
        "type": "string",
          "required": true,
          "length":20
      },
      "nbremaxoccupants": {
          "type": "number",
          "required": true
      }
    }

};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(batsql.name, batsql.properties, batsql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('ACCOUNT', function (err, props) {
    console.log(props);
  });
});*/


};
