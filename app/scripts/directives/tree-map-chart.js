'use strict';

angular.module('gizuApp')
  .directive('treeMapChart', ['d3', '$window', function (d3, $window) {
    return {
      template: '',
      restrict: 'E',
      scope: {
        current: '=',
        data: '='
      },
      link: function postLink(scope, element, attrs) {
        d3.then(function(d3) {
          // Import parameters
          var margin = {
            left: parseInt(attrs.marginLeft) || 10, // margin-left
            right: parseInt(attrs.marginRight) || 10, //margin-right
            top: parseInt(attrs.marginTop) || 10, //margin-top
            bottom: parseInt(attrs.marginBottom) || 10 //margin-bottom
          };

          var height = parseInt(attrs.height) || 960;
          var width = parseInt(attrs.width) || 500;

          width = 960 - margin.left - margin.right;
          height = 500 - margin.top - margin.bottom;

          scope.position = function() {
            this.style('left', function(d) { return d.x + 'px'; })
                .style('top', function(d) { return d.y + 'px'; })
                .style('width', function(d) { return Math.max(0, d.dx - 1) + 'px'; })
                .style('height', function(d) { return Math.max(0, d.dy - 1) + 'px'; });
          };
          var node;
          var color = d3.scale.category20c();
            var treemap = d3.layout.treemap()
              .size([width, height])
              .sticky(false)
              .value(function(d) { return d.size; })
              .sort(function(a, b) { return a.name < b.name; });

            var div = d3.select(element[0])
              .style('position', 'relative')
              .style('display', 'block')
              .style('width', (width + margin.left + margin.right) + 'px')
              .style('height', (height + margin.top + margin.bottom) + 'px')
              .style('left', margin.left + 'px')
              .style('top', margin.top + 'px');

          scope.render = function(data) {
            node = div.datum(data).selectAll('.node')
              .data(treemap.nodes);

            node.enter().append('div')
              .attr('class', 'node');

            node
              .call(scope.position)
              .style('background', function(d) { return d.children ? color(d.name) : null; })
              .text(function(d) { return d.children ? null : d.name + ' (' + d.size + ')'; });

            node.exit().remove();
          };

          scope.$watch('data',function(data) {
            if (data) { scope.render(data.data); }
          });
        });
      }
    };
  }]);
