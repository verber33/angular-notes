'use strict';


/* jasmine specs for controllers go here */


describe('phoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
        scope = {};
        ctrl = $controller('phoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones', function() {
        expect(scope.phones.length).toBe(3);
    });


    it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });
});


