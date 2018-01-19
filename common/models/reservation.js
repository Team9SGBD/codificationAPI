'use strict';

 

module.exports = function(Reservation) {
	var app = require('../../server/server');
 

//Génération de la table Reservation

var reservsql = {
	"name": "Reservation",
  	"options": {
    	"idInjection": false,
      	"mysql": {
        	"schema":"LOOPBACK",
        	"table":"RESERVATION"
   	 	}
  	},
  	"properties": {
    	"idreservation": {
    		"type": "date",
      		"required": true,
      		"id": 1
    	},
    	"datereserv": {
      		"type": "date",
      		"required": true
    	},
    	"confirmation": {
      		"type": "boolean",
      		"required": true,
      		"default": false
    	},
    	"position": {
      		"type": "number",
      		"required": true
    	},
    	"account_fk": {
    		"type": "date",
      		"required": true
    	},
    	"chambre_fk": {
    		"type": "date",
      		"required": true
    	}
    }
};

/*var ds = require('../data-sources/db')('mysql');

ds.createModel(reservsql.name, reservsql.properties, reservsql.options);

ds.automigrate(function () {
  ds.discoverModelProperties('RESERVATION', function (err, props) {
    console.log(props);
  });
});*/
};
