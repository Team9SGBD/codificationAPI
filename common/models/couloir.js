'use strict';


module.exports = function(Couloir) {

	var app = require('../../server/server');

//Génération de la table Couloir 

var couloirsql = {
	"name": "Couloir",
  	"options": {
    	"idInjection": false,
      	"mysql": {
        	"schema":"LOOPBACK",
        	"table":"COULOIR"
   	 	}
  	},
  	"properties": {
    	"idcouloir": {
    		"type": "number",
      		"required": true,
      		"id": 1
    	},
    	"nomcouloir": {
      		"type": "String",
      		"required": true
    	},
    	"etage_fk": {
    		"type": "String",
      		"required": true
    	}
  	}
};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(couloirsql.name, couloirsql.properties, couloirsql.options);

ds.automigrate(function () { 
  ds.discoverModelProperties('COULOIR', function (err, props) {
    console.log(props);
  });
});*/

};
