'use strict';
// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.name',
    'myApp.version'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/', {
            template: '<name-form></name-form>'
        })
        .otherwise({ redirectTo: '/' });
    }]);
//# sourceMappingURL=app.js.map