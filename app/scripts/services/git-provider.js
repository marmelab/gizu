'use strict';

angular.module('gizuApp')
  .factory('gitProvider', ['$rootScope','$q', '$http', function ($rootScope, $q, $http) {
    var defered = $q.defer();
    var clocs = [];
    var files = [], index = false;

    $http.get('/data/index.json').success(function(data, status, headers, config) {
      files = data.files;
      index = true;

      for (var i=0; i<files.length; i++) {
        var hash = files[i].split('-').pop().split('.').shift();
        $http.get('/data/'+files[i]).success(function(cloc, status, headers, config) {
          var lines = cloc.split('\n');
          lines.shift(); // drop the header line
          clocs.push({ hash: hash, lines: lines.join('\n')});
        });
      }
    });

    $rootScope.$watch(function() {
      return clocs.length;
    }, function(length) {
      if (length === files.length && index) { defered.resolve(clocs.reverse()); }
    });

    return {
      getData: function() { return defered.promise;  }
    };
  }]);
