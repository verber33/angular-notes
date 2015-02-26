'use strict';

/**
 * Controllers.
 */
var phonecatControllers = angular.module('notesControllers', []);

/**
 * Global Controller.
 */
phonecatControllers.controller('globalCtrl', ['$scope',
    function($scope) {
        $scope.title = 'Welcome to your Notes list!';

        $scope.notes = [
            {
                title: 'First note',
                description: 'Get up at 7:00 AM',
                createdOn: 1424968457061,
                deadline: '7:15 AM'
            },
            {
                title: 'Second note',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                createdOn: 1424968482805,
                deadline: 'Tomorrow'
            },
            {
                title: 'Third note',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdOn: 1424968482805,
                deadline: 'in December'
            }
        ];

        $scope.getDate = function(date) {
            var today = new Date(date),
                day = today.getDate(),
                month = today.getMonth() + 1,
                year = today.getFullYear(),
                hour = today.getHours(),
                min = today.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return hour + ":" + min + " - " + day + '/' + month +'/' + year;
        };


        $scope.addNote = function(newTitle, newDesc, newDeadline) {
            if (newTitle && newDesc && newDeadline) {
                var note = {};

                note['title'] = newTitle;
                note['description'] = newDesc;
                note['deadline'] = newDeadline;
                note['createdOn'] = new Date().getTime();

                if($scope.notes.indexOf(note) == -1) {
                    $scope.notes.push(note);
                }
            }
        };

        $scope.removeNote = function(time) {
            $scope.notes.forEach(function(element, index, array){
                if (element.createdOn == time) {
                    array.splice(index, 1);
                }
            });
        };



    }]);

/**
 * Home page Controller.
 */
/*phonecatControllers.controller('homeCtrl', ['$scope',
    function($scope) {
        $scope.title = 'Welcome to your Notes list!';
    }]);*/

/**
 * Catalog Controller.
 */
/*phonecatControllers.controller('listCtrl', ['$scope',
    function($scope) {

    }]);*/

