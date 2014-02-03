'use strict';

describe('Service: dataTransformer', function () {

  // load the service's module
  beforeEach(module('gizuApp'));

  // instantiate service
  var dataTransformer;
  beforeEach(inject(function (_dataTransformer_) {
    dataTransformer = _dataTransformer_;
  }));

  it('should do something', function () {
    expect(!!dataTransformer).toBe(true);
  });

});
