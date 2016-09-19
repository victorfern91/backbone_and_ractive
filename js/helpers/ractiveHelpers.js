/*global define*/
define(function (require) {
    'use strict';
    var Ractive = require('ractive');

    Ractive.defaults.data =  {
        lowercase: function (str) {
            if (str) {
                return str.toLowerCase();
            }
        }
    };

});
