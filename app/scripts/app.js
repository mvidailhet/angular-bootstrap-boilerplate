'use strict';

angular.module('angularBootstrapStackApp', [
	'ui.bootstrap',
	'ui.router'
	])
  .config(function ($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url: "/",
				controller: 'MainCtrl',
				templateUrl: "views/main.html"
			});
  });
