/*global define*/
define(function (require) {
    'use strict';
    var BaseView = require('baseView'),
        Ractive = require('ractive'),
        mainPage = require('text!mainPageTmpl'),
        helloComponent = require('text!helloTmpl');

    return BaseView.extend({
        initialize: function () {
            this.model.on('change', this.updateRactive, this);
            this.render();
        },

        events: {
            'change .inputs': 'debug',
            'keyup .inputs': 'debug',
            'click .save': 'save',
            'click .undo': 'undo'
        },

        debug: function (evt) {
            this.ractive.set('user.isSaved', false);
        },

        updateModel: function (newValue) {
            this.model.set(newValue);
        },

        updateRactive: function () {
            this.ractive.set(this.convertData());
        },

        convertData: function () {
            var obj = {
                user: this.model.toJSON()
            };

            obj.cars = this.collection.getCarNames(this.model.get('availableCars'));

            return obj;
        },

        save: function () {
            this.model.save();
        },

        undo: function () {
            this.model.fetch({
                success: function () {
                    this.updateRactive();
                }.bind(this)
            });
        },

        render: function () {
            var obj = this.convertData();
            this.ractive = new Ractive({
                el: this.el,
                template: mainPage,
                partials: {
                    helloPage: helloComponent
                },
                data: obj
            });

            this.ractive.observe('user', function (updates) {
                this.updateModel(updates);
            }.bind(this));
        }
    });
});
