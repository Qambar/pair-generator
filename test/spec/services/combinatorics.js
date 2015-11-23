'use strict';

describe('Service: combinatorics', function () {

  // load the service's module
  beforeEach(module('pairGeneratorApp'));

  // instantiate service
  var combinatorics;
  beforeEach(inject(function (_combinatorics_) {
    combinatorics = _combinatorics_;
  }));

  it('should do something', function () {
    expect(!!combinatorics).toBe(true);
  });

});
