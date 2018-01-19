'use strict';




module.exports = function(Etage) {
  
var app = require('../../server/server');

//Génération de la table Etage sous mysql


var etagesql = {
  "name": "Etage",
  "options": {
    "idInjection": false,
        "mysql": {
          "schema":"LOOPBACK",
          "table":"ETAGE"
      }
  },
  "properties": {
    "idetage": {
      "type": "number",
      "required": true,
      "id":1
    },
    "numetage": {
      "type": "number",
      "required": true
    },
    "batiment_fk": {
      "type": "String",
      "required": true
    }
  }
};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(etagesql.name, etagesql.properties, etagesql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('CONTRAINTES', function (err, props) {
    console.log(props);
  });
});*/





  /**
   * renvoie l'ensembles des chambres et leurs positions occuppes
   * @param {Function(Error, array)} callback
   */

  Etage.prototype.reservations = function(callback) {
      Etage.prototype.__get__chambres({"include":{"relation":"reservations","scope":{"fields":["position"]}}},function (err, chambres) {
        chambres.filter(function (ch) {
          if(ch.reservations().length < ch.capacite)
            return true;
          else
            return false;
        });
      callback(null, chambres);
    });
  };

};
