'use strict';


module.exports = function(Codereservation) {
  var app = require('../../server/server');
//Génération de la table CodeReservation sous mysql

var codereservsql = {
  "name": "CodeReservation",
    "options": {
    "idInjection": false,
      "mysql": {
        "schema":"LOOPBACK",
        "table":"CODERESERVATION"
      }
    },
    "properties": {
      "idReservation": {
          "type": "string",
          "required": true,
          "id":1
      },
      "codeReservation": {
          "type": "string",
          "required": true,
          "id":1
      },
      "chambre_fk": {
        "type": "string",
          "required": true,
          "id":1
      },
      "account_fk": {
        "type": "string",
          "required": true,
          "id":1
      }
    },

};
/*var ds = require('../data-sources/db')('mysql');s.mysql;

ds.createModel(codereservsql.name, codereservsql.properties, codereservsql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('CODERESERVATION', function (err, props) {
    console.log(props);
  });
});*/

};
