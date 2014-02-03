'use strict';

describe('Service: clocTransformer', function () {

  // load the service's module
  beforeEach(module('gizuApp'));

  // instantiate service
  var clocTransformer;
  beforeEach(inject(function (_clocTransformer_) {
    clocTransformer = _clocTransformer_;
  }));

  it('should do something', function () {
    expect(!!clocTransformer).toBe(true);
  });

});
