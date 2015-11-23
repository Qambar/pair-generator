'use strict';

describe('Service: pairing', function () {

  var mockCombinatorics;

  // load the service's module
  beforeEach(module('pairGeneratorApp'));


  beforeEach(function() {
    mockCombinatorics =  {
      combination: function() {
        var dummyObj = {
          "toArray" : function() {
            return ["DUMMY"];
          }
        };

        return dummyObj;
      }
    };

    module(function ($provide) {
      $provide.value('Combinatorics', mockCombinatorics);
    });

  });

  it('should generate pairs', inject(function (pairing) {
    expect(pairing.generatePairs(['A','B','C','D'])).toEqual(["DUMMY"]);
  }));

});
