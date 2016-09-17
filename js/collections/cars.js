define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        idAttribute: 'id',
        url: function () {
            return '/data/cars.json';
        },
        getCarNames: function (carIds) {
            var i,
                length,
                carNames = [];

            for (i = 0, length = carIds.length; i < length; ++i) {
                var car = this.find({id: carIds[i]});
                carNames.push(car.toJSON());
            }

            return carNames;
        }
    });
});
