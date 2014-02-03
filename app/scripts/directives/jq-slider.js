'use strict';

angular.module('gizuApp')
  .directive('jqSlider', function () {
    return {
      template: '',
      restrict: 'A',
      scope: {
        min: '=',
        max: '=',
        step: '=',
        value: '=',
        orientation: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('max', function() {
          element.slider({
            orientation: scope.orientation,
            min: scope.min,
            max: scope.max,
            step: scope.step,
            value: scope.value,
            slide: function( event, ui ) {
              scope.value = ui.value;
              scope.$apply();
            }
          });
        });

        scope.$watch('value', function(value) {
          element.slider('value', value);
        });

      }
    };
  });
