define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            age: 0,
            isSaved: false
        },
        url: function () {
            return '/data/person.json';
        }
    });
});
