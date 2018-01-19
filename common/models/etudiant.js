'use strict';


module.exports = function(Etudiant) {
var app = require('../../server/server');

//Génération de la table Etudiant sous mysql

var etudiantsql = {
	"name": "Etudiant",
  	"options": {
    	"idInjection": false,
      	"mysql": {
        	"schema":"LOOPBACK",
        	"table":"ETUDIANT"
   	 	}
  	},
  	"properties": {
    	"numEtudiant": {
      		"type": "string",
      		"required": true,
      		"id":1
      	},
		"prenom": {
      		"type": "string",
     	 	"required": true
    	},
    	"nom": {
      		"type": "string",
      		"required": true
    	},
    	"dateNaiss": {
      		"type": "date",
      		"required": true
    	},
    	"villeNaiss": {
      		"type": "string"
    	},
    	"numCIN": {
      		"type": "string",
      		"required": true
    	},
    	"departement": {
      		"type": "string",
      		"required": true
    	},
    	"formation": {
      		"type": "string",
      		"required": true
    	},
    	"niveau": {
      		"type": "number",
      		"required": true
    	}
    }
};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(etudiantsql.name, etudiantsql.properties, etudiantsql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('ETUDIANT', function (err, props) {
    console.log(props);
  });
});*/

};
