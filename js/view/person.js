/*global define*/
define(function (require) {
    'use strict';
    var BaseView = require('baseView'),
        mainPage = require('text!mainPageTmpl'),
        helloComponent = require('text!helloTmpl');

    return BaseView.extend({
        initialize: function (args) {
            this.cars = args.cars;
            this.model.on('change', this.updateFlags, this);
            this.render();
        },

        events: {
            'click .save': 'save',
            'click .undo': 'undo'
        },

        updateFlags: function (renderFlag) {
            if (renderFlag !== undefined) {
                this.ractive.set('user.isSaved', false);
            }
            this.ractive.set('cars', this.cars.getCarNames(this.model.get('availableCars')));
        },

        save: function () {
            this.model.save();
        },

        undo: function () {
            this.model.fetch({reset: true});
        },

        render: function () {
            this.setRactive({
                el: this.el,
                template: mainPage,
                data: {
                    user: this.model
                },
                partials: {
                    helloPage: helloComponent
                }
            });
            this.updateFlags();
        }
    });
});
