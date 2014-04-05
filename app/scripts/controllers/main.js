'use strict';

angular.module('angularBootstrapStackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$scope.dynamicPopover = "Hello, World!";
		$scope.dynamicPopoverTitle = "Title";
	});
