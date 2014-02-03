'use strict';

angular.module('gizuApp')
  .factory('dataTransformer', ['clocTransformer', function (clocTransformer) {
    return {
      transform : function(data) {
        var transformedData = [];
        for (var i=0; i<data.length; i++) {
          transformedData.push({
            data: clocTransformer.toJSON(data[i].lines),
            hash: data[i].hash
          });
        }
        return transformedData;
      }
    };
  }]);
