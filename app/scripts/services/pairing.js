'use strict';

/**
 * @ngdoc service
 * @name pairGeneratorApp.pairing
 * @description
 * # pairing
 * Factory in the pairGeneratorApp.
 */
angular.module('pairGeneratorApp')
  .factory('pairing', ['Combinatorics', function (Combinatorics) {
    return {
      generatePairs: function (users) {
        var cmb = Combinatorics.combination(users, 2);
        return cmb.toArray();
      }
    };
  }]);
