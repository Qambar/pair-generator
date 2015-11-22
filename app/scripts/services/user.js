'use strict';

/**
 * @ngdoc service
 * @name pairGeneratorApp.user
 * @description
 * # user
 * Service in the pairGeneratorApp.
 */
angular.module('pairGeneratorApp')
  .service('user', function () {

    var _virtualIdCounter = 1;

    var _users = [];

    /**
     * Adds a user to the list
     * @param user
     */
    this.add = function (user) {

      _validateUser(user);

      if (_userExists(user)) {
        throw new Error("User with the same name already exists");
      }

      user.id = _virtualIdCounter;
      //Increase the virtual id counter
      _virtualIdCounter = _virtualIdCounter + 1;

      _users.push(user);

      return user.id;
    };

    /**
     * Deletes a user from the list
     * @param user
     */
    this.delete = function(id) {

      if (id > -1 && id < _virtualIdCounter) {
        _users = _users.filter(function(u) {
          return u.id !== id;
        });

        return true;
      }

      throw new Error("Invalid user id provided.");

    };

    /**
     * @param id takes an id
     * @returns user object
     */
    this.get = function(id) {
      var result = _users.filter(function(u) {
        return u.id === id;
      });

      return result[0];
    };

    /**
     * Returns a list of all users
     * @returns {Array}
     */
    this.getAll = function() {
      return _users;
    };


    /**
     * User object validation method
     * @param user
     * @private
     */
    function _validateUser(user) {
      if (Object.keys(user).length == 0) {
        throw new Error("User should have a name and type");
      }

      if (
        angular.isUndefined(user.name)
        || (user.name).trim() === ""
      ) {
        throw new Error("User should have a name");
      }

      if (
        angular.isUndefined(user.type)
        || (user.type).trim() === ""
      ) {
        throw new Error("User should have a type");
      }

    }

    function _userExists(user) {
      var result = _users.filter(function (u) {
        return u.name === user.name;
      });

      return result.length > 0;
    }

  });
