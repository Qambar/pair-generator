'use strict';

/**
 * @ngdoc function
 * @name pairGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pairGeneratorApp
 */
angular.module('pairGeneratorApp')
  .controller('MainCtrl', ['$scope', 'user', 'pairing', function($scope, user, pairing) {

    $scope.pairs = [];
    $scope.count = 0;
    $scope.users = user.getAll();


    $scope.addUser = function(name) {
      var developer = {
        'name': name,
        'type': 'developer'
      };

      try {
        user.add(developer);
      } catch(e) {
        alert(e.message);
      }

      $scope.count = $scope.users.length;

      if ($scope.count >= 2) {
        $scope.pairs = pairing.generatePairs($scope.users);
      }

    };

}]);
