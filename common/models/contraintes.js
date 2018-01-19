'use strict';


module.exports = function(Contraintes) {

  var app = require('../../server/server');

//Génération de la table Contraintes sous mysql

var contsql = {
  "name": "Contraintes",
    "options": {
      "idInjection": false,
        "mysql": {
          "schema":"LOOPBACK",
          "table":"CONTRAINTES"
      }
    },
    "properties": {
      "idcontraite": {
        "type": "string",
          "required": true,
          "id":1
      },
      "attribut": {
          "type": "string",
          "required": true
      },
      "valeur": {
          "type": "string",
          "required": true
      },
      "comparaison": {
          "type": "string",
          "required": true
      },
      "batiment_fk": {
        "type": "string",
          "required": false
      },
      "etage_fk": {
        "type": "string",
          "required": false
      },
      "couloir_fk": {
        "type": "string",
          "required": false
      }

    }
};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(contsql.name, contsql.properties, contsql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('CONTRAINTES', function (err, props) {
    console.log(props);
  });
});*/

};
