'use strict';

/* App Module */
var phonecatApp = angular.module('notesApp', [
    'ngRoute',
    'notesControllers',
    'notesFilters'
]);

phonecatApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        }).
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'listCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

}]);
