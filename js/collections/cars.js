/*global define*/
/*jslint plusplus: true*/
define(function (require) {
    'use strict';
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        idAttribute: 'id',
        url: function () {
            return '/data/cars.json';
        },

        getCarInfo: function (carIds) {
            var i,
                length,
                carNames = [],
                car;

            for (i = 0, length = carIds.length; i < length; ++i) {
                car = this.find({id: carIds[i]});
                if (car) {
                    carNames.push(car.toJSON());
                }
            }

            return carNames;
        },

        getCarName: function (carId) {
            var car = this.find({id: carId});
            if (car) {
                return car.get('name');
            }
            return 'N.A.';
        }
    });
});
