'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('pairGeneratorApp'));

  var MainCtrl,
    scope;

  var mockUser, mockPairing;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    mockUser = {
      'getAll' : function () {
        return ["DUMMY", "DUMMY2"];
      },

      'add' : function() {
        return 1;
      }
    };

    mockPairing = {
      'generatePairs': function() {
        return [];
      }
    };



    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      user: mockUser,
      pairing: mockPairing
    });
  }));

  it('should initialize pairs with empty array', function () {
    expect(scope.pairs).toEqual([]);
  });

  it('should have an initial count equal to zero', function () {
    expect(scope.count).toEqual(0);
  });

  it('should call the getall method on user', function () {
    expect(scope.users).toEqual(["DUMMY", "DUMMY2"]);
  });

  it('should call add user', function() {
    spyOn(mockUser, 'add');
    scope.addUser("DUMMY");
    expect(mockUser.add).toHaveBeenCalled();
  });

  it('should call generate pairs', function() {
    spyOn(mockPairing, 'generatePairs');
    scope.addUser("DUMMY");
    expect(mockPairing.generatePairs).toHaveBeenCalled();
  });

});
