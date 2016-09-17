/*global define*/
define(function (require) {
    'use strict';
    var Person = require('personModel'),
        View = require('personView'),
        Cars = require('carsCollection');



    return {
        init: function () {
            
            var person = new Person({name: 'victor', age: '24', isSaved: true}),
                cars = new Cars();

            cars.fetch({reset: true});

            cars.on('reset', function (cars) {
                var view = new View({el: '#app', model: person, collection: cars});
            });

        }
    };
});
