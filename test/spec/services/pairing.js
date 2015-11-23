'use strict';

describe('Service: pairing', function () {

  // load the service's module
  beforeEach(module('pairGeneratorApp'));

  // instantiate service
  var pairing;
  beforeEach(inject(function (_pairing_) {
    pairing = _pairing_;
  }));

  it('should do something', function () {
    expect(!!pairing).toBe(true);
  });

});
