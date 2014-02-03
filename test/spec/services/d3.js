'use strict';

describe('Service: d3', function () {

  // load the service's module
  beforeEach(module('gizuApp'));

  // instantiate service
  var d3;
  beforeEach(inject(function (_d3_) {
    d3 = _d3_;
  }));

  it('should have a select method', function () {
    d3.then(function(d3){
      expect(!!d3.select).toBe(true);
    });
  });

});
