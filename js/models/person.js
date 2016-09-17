define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            age: 0,
            isSaved: false,
            currentCar: '2',
            availableCars: ['1', '2', '4']
        },
        url: function () {
            return '/data/person.json';
        }
    });
});
