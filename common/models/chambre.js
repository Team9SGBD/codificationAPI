'use strict';

module.exports = function(Chambre) {
  var app = require('../../server/server');
  var randomstring = require("randomstring");
  /**
   * renvoie l'ensemble des positions dans une étage donnée
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



   /**
   * reserver une position
   * @param {string} chambre Id de la position
   * @param {Function(Error, date)} callback
   */


  Chambre.prototype.reserver = function(accountId, callback) {
    var capacite = this.nbremaxoccupants;
    console.log(capacite);
    var id = this.id;
    Chambre.app.models.Account.findById(accountId, {include:'reservation'}, function (err, account) {
      var reservation = account.reservation();
      if(reservation){
        if(reservation.confirme){
          callback(null, {ok: false, erreur: 'Vous avez déjà codifié une chambre'});
        }else{
          callback(null, {ok: false, erreur: 'vous avez déjà réservé une chambre'});
        }
      }else{
        Chambre.prototype.__get__reservations("", function (err, reservations) {
          if(err)
            callback(err);
          else if(reservations.length < capacite){
            var today = Date.now();
            //console.log(reservations);
            today = new Date(today);
            app.models.Reservation.create({
              'dateReserv': today,
              'confirmation': false,
              'position': reservations.length+1,
              'accountId': accountId,
              'chambreId':id
              
            }, function(err, reserv) {
              Chambre.app.models.CodeReservation.create({
                "idReservation":reserv.id,
                "codeReservation": randomstring.generate(7)
              }, function (err, code) {
                var url_confirmer = 'http://wwww.codification-esp.sn/confirmer-reservation?code='+code.code;
                const mail = {
                  from: 'codificationcoudesp@gmail.com', // sender address
                  to: account.email, // list of receivers
                  subject: 'Confirmation de votre réservation de chambre', // Subject line
                  html: `<p>Vous avez reservé une chambre au sein du campus ESP</p>
                    <p>Votre code de confirmation est: <strong>${code.code}</strong></p>
                    <p>Vous pouvez confirmer en cliquant sur: <a href="${url_confirmer}">${url_confirmer}</a></p>
                    <p><strong>NB:</strong>Vous avez <strong>24h</strong> pour confirmer sinon votre réservation sera <strong>annulée automatiquement!</strong></p>`
                };
                console.log(code);
                Chambre.app.models.Email.send(mail, function (err, info) {
                  if(err) {
                    console.log(err);
                    callback(err);
                  }else{
                    var tomorow = new Date(today.getDate() + 1);
                    callback(null, {delai: tomorow, ok: true});
                  }
                });
              });
            });
          }else callback(null, {erreur: 'Désolé chambre pleine','ok': false});
        });
      }
    })

  };

};
