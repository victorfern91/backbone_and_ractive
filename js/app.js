/*global define*/
define(function (require) {
    'use strict';
    var Person = require('personModel'),
        Cars = require('carsCollection'),
        View = require('personView');

    return {
        init: function () {
            var person = new Person({name: 'victor', age: '24', isSaved: true}),
                cars = new Cars();
            cars.fetch({reset: true});
            cars.on('reset', function () {
                var view = new View({el: '#app', model: person, cars: cars});
            });

        }
    };
});
