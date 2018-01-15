'use strict';

module.exports = function(Chambre) {
  var app = require('../../server/server');
  /**
   * renvoient l'ensemble des positions dans une etage donnee
   * @param {string} etage L'etage dans lequel on recherche
   * @param {Function(Error, string)} callback
   */
  Chambre.prototype.positions = function(callback) {
      Chambre.findById(this.id, {"include":["reservations"]}, function (err, chambre) {
      var reservations = chambre.reservations();
      var positions = reservations.map(function (r) {return r.position});
      callback(null, positions);
    })
  };
};
