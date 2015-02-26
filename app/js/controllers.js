'use strict';

/**
 * Controllers.
 */
var phonecatControllers = angular.module('notesControllers', []);

/**
 * Global Controller.
 */
phonecatControllers.controller('globalCtrl', ['$scope', '$http', '$location',
    function($scope, $http,  $location) {
        $http.get('json/navigation.json').success(function(data) {
            $scope.navigation = data;
            console.log($scope.navigation);
        });

        $scope.activePage = function(urlPath) {
            return urlPath == $location.path();
        };

        $scope.goBack = function() {
            history.back();
        };

    }]);

/**
 * Home page Controller.
 */
phonecatControllers.controller('homeCtrl', ['$scope',
    function($scope) {
        $scope.title = 'Welcome to your Notes list!';
    }]);

/**
 * Catalog Controller.
 */
phonecatControllers.controller('listCtrl', ['$scope',
    function($scope) {

    }]);

