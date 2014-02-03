'use strict';

angular.module('gizuApp')
  .controller('MainCtrl', function ($scope, $timeout, gitProvider, dataTransformer) {
    $scope.current = 0;
    $scope.slider = {
      min: 0,
      max: 0,
      step: 1,
      current: 0
    };

    $scope.speed = {
      min: 100,
      max: 1000,
      step: 1,
      current: 100
    };

    $scope.animate = false;

    var currentTimeout;

    var doAnimation = function() {
      if($scope.current < $scope.slider.max - 1) {
        $scope.current++;
      } else {
        $scope.current = 0;
      }

      if ($scope.animate) { currentTimeout = $timeout(doAnimation, $scope.speed.current); }
    };

    gitProvider.getData().then(function(data) {
      $scope.data = dataTransformer.transform(data);
      $scope.slider.max = $scope.data.length - 1 ;

      $scope.$watch("current", function(current) {
        if (current > $scope.slider.max) {
          $scope.current = $scope.slider.max;
        } else if (current < 0 || parseInt(current) !== parseInt(current)) {
          $scope.current = 0;
        } else {
          $scope.current = parseInt(current);
        }

        $scope.slider.current = $scope.current;
      });

      $scope.$watch("slider.current", function(sliderCurrent) {
        if ($scope.current !== $scope.slider.current) { $scope.current = $scope.slider.current; }
      });

      doAnimation();
    }, function(err) {
      console.log(err);
      return;
    });

    $scope.getAnimateBtnClass = function() {
      if ($scope.animate) { return 'active'; }
    };

    $scope.onAnimateBtnClick = function() {
      $scope.animate = !$scope.animate;
      return false;
    };

    $scope.$watch("animate", function(animate) {
      if ($scope.animate) {
        doAnimation();
      }
    });

    $scope.$watch("speed.current", function(speed) {
      if ($scope.animate) {
        $timeout.cancel(currentTimeout);
        doAnimation();
      }
    });
  });
