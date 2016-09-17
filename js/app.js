/*global define*/
define(function (require) {
    'use strict';
    var Person = require('personModel'),
        View = require('personView');



    return {
        init: function () {
            var person = new Person({name: 'victor', age: '24', isSaved: true});
            var view = new View({el:'#app', model: person});
        }
    };
});
