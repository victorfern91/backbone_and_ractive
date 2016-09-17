/*global define*/
define(function (require) {
    'use strict';
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            age: 0,
            isSaved: false,
            currentCar: '2',
            availableCars: ['1', '3']
        },
        url: function () {
            return '/data/person.json';
        }
    });
});
