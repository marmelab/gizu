'use strict';

describe('Service: gitProvider', function () {

  // load the service's module
  beforeEach(module('gizuApp'));

  // instantiate service
  var gitProvider;
  beforeEach(inject(function (_gitProvider_) {
    gitProvider = _gitProvider_;
  }));

  it('should do something', function () {
    expect(!!gitProvider).toBe(true);
  });

});
