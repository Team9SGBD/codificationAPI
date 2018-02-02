'use strict';

var app = require('../../server/server');


module.exports = function(Etage) {
  




  /**
   * l'ensemble des chambres d'un étage et leurs positions occuppées
   * @param {Function(Error, array)} callback
   */

  Etage.prototype.reservations = function(callback) {
      var id = this.id;
      Etage.prototype.__get__chambres( {"include":{"relation":"reservations",
            "scope":{"fields":["position"]}}}
        ,function(err, chambres) {
          chambres.filter( function (ch) {
            if(ch.reservations().length < ch.capacite && ch.etageId.isequal(id))
              return true;
          else
            return false;
        });
          callback(null, chambres);
      });

};

};
