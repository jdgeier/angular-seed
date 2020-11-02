'use strict';
// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.name',
    'myApp.version'
])
.config(['$locationProvider', '$routeProvider',
    function ($locationProvider: angular.ILocationProvider,
              $routeProvider: angular.route.IRouteProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/', {
            template: '<name-form></name-form>'
        })
        .otherwise({ redirectTo: '/' });
    }]);
