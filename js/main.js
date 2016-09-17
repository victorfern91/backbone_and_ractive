/*global require, define*/
require.config({
    baseUrl: './js',
    paths: {
        // application initializer
        'app': 'app',

        // libs
        'backbone': '../libs/backbone',
        'jquery': '../libs/jquery-1.12.4',
        'underscore': '../libs/underscore',
        'ractive': '../libs/ractive',
        'ractive-adaptors-backbone': '../libs/ractive-adaptors-backbone',

        // templates
        'mainPageTmpl': '../templates/mainPage.html',
        'helloTmpl': '../templates/hello.html',

        // models
        'personModel': 'models/person',

        // collections
        'carsCollection': 'collections/cars',

        // baseView:
        'baseView': 'base/baseView',

        // views
        'personView': 'view/person',

        // require plugins
        'text': '../libs/text'
    },

    shim: {
        'underscore': {
            'exports': '_'
        },
        'jquery': {
            'exports': '$, jQuery, jquery'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        }
    }
});

define(['app'], function (App) {
    'use strict';
    App.init();
});
