'use strict';

/* Filters */
angular.module('notesFilters', [])
    .filter('checkmark', function() {
       return function(input) {
           return input ? 'available' : 'not-available';
       };
    })
    .filter('filterLayered', function() {
        return function (phones, options) {
            var items = {
                filters: options,
                out: []
            };

            var keepGoing,
                noItemsFound = true;

            var pushToArray = function(array, val) {
                array.push(val);
                keepGoing = false;
                noItemsFound = false;
            };

            angular.forEach(phones, function(key) {

                keepGoing = true;

                angular.forEach(items.filters, function (k, v) {
                    if (isArray(k) && k.length > 0) {
                        for (var i = 0; k.length > i; i++) {
                            if (keepGoing && key.hardware[v] === k[i]) {
                                pushToArray(items.out, key);
                            }
                        }
                    } else if (typeof k == 'boolean') {
                        if (keepGoing && key.hardware[v] === k) {
                            pushToArray(items.out, key);
                        }
                    }
                });
            }, items);

            if (noItemsFound) {
                items.out = phones;
            }

            return items.out;
        };
    });