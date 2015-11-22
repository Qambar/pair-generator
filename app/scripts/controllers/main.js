'use strict';

/**
 * @ngdoc function
 * @name pairGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pairGeneratorApp
 */
angular.module('pairGeneratorApp')
  .controller('MainCtrl', ['$scope', 'user', function($scope, user) {

    $scope.users = user.getAll();
    $scope.count = 0;


    $scope.addUser = function(name) {
      var developer = {
        "name": name,
        "type": "developer"
      };

      user.add(developer);
      $scope.count = $scope.users.length;

    };

}]);
