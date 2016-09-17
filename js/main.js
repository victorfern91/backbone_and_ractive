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
        'ractive-transitions-fade': '../libs/ractive-transitions-fade.umd',
        'materialize': '../libs/materialize',

        // templates
        'mainPageTmpl': '../templates/mainPage',
        'helloTmpl': '../templates/hello',

        // models
        'personModel': 'models/person',

        // collections
        'carsCollection': 'collections/cars',

        // baseView:
        'baseView': 'base/baseView',

        // views
        'personView': 'view/person',

        // require plugins
        //'text': '../libs/text',
        'rv': '../libs/rv'
    },
    shim: {
        'underscore': {
            'exports': '_'
        },
        'jquery': {
            'exports': '$, jQuery, jquery'
        },
        'backbone': {
            'deps': ['underscore','jquery'],
            'exports': 'Backbone'
        },
        'materialize': {
            'deps': ['jquery']
        }
    }
});
define(['app'], function (App) {
    'use strict';
    App.init();
});
