'use strict';

angular.module('gizuApp')
  .factory('clocTransformer', ['config', function (config) {

    var hasString = function(str, strArray) {
      return strArray.filter(function(f) {
        return str.substr(0, f.length) === f;
      }). length > 0;
    };

    var convertFromClocToJSON = function(data) {
      var lines = data.split("\n");

      var json = {};
      lines.forEach(function(line) {
        var cols = line.split(',');
        var filename = cols[1];
        if (!filename) return;
        if (!hasString(filename, config.exclude)) {
          var elements = filename.split(/[\/\\]/);
          var current = json;
          elements.forEach(function(element) {
            if (!current[element]) {
              current[element] = {};
            }
            current = current[element];
          });
          current.language = cols[0];
          current.size = parseInt(cols[4], 10);
        }
      });

      json = getChildren(json)[0];
      json.name = 'root';

      return json;
    };

    var getChildren = function(json) {
      var children = [];
      if (json.language) { return children; }
      for (var key in json) {
        var child = { name: key };
        if (json[key].size) {
          // value node
          child.size = json[key].size;
          child.language = json[key].language;
        } else {
          // children node
          var childChildren = getChildren(json[key]);
          if (childChildren) { child.children = childChildren; }
        }

        children.push(child);
        delete json[key];
      }
      return children;
    };

  // Recursively count all elements in a tree
    var countElements = function(node) {
      var nbElements = 1;
      if (node.children) {
        nbElements += node.children.reduce(function(p, v) { return p + countElements(v); }, 0);
      }
      return nbElements;
    };

    return {
      toJSON: function (cloc) {
        return convertFromClocToJSON(cloc);
      }
    };
  }]);
