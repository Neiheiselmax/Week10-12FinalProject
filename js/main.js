(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

  //   	$locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
            controller:"MainController",
            controllerAs:"vm",
		      }
		   }
	    })
	    .state('map', {
	      url: '/map',
	      views: {
		      'content': {
		        templateUrl: '../partials/map.html',
            controller:"MapController",
            controllerAs:"vm",
          }
		   }
	    })
      .state('groups', {
	      url: '/groups',
	      views: {
		      'content': {
		        templateUrl: '../partials/groups.html',
            controller:"GroupController",
            controllerAs:"vm",
          }
		   }
	    })
      .state('update', {
	      url: '/update',
	      views: {
		      'content': {
		        templateUrl: '../partials/update.html',
            controller:"UpdateCourtController",
            controllerAs:"vm",
          }
		   }
	    })
      .state('springCourt', {
        url: '/springCourt',
        views: {
          'content': {
            templateUrl: '../partials/springCourt.html',
            controller:"GetCourtController",
            controllerAs:"vm",
          }
       }
      })
    });

})();
