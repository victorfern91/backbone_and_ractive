/*global define*/
define(function (require) {
    'use strict';
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            age: 0,
            isSaved: true,
            currentCar: '',
            availableCars: ['1', '4']
        },
        url: function () {
            return '/data/person.json';
        }
    });
});
