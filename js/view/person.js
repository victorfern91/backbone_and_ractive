/*global define*/
define(function (require) {
    'use strict';
    var BaseView = require('baseView'),
        mainPage = require('text!mainPageTmpl'),
        helloComponent = require('text!helloTmpl');

    return BaseView.extend({
        initialize: function (args) {
            this.cars = args.cars;
            this.model.on('change', this.updateRactiveModel, this);
            this.render();
        },

        events: {
            'change .dropdown': 'getSelectOption',
            'click .save': 'save',
            'click .undo': 'undo'
        },

        getSelectOption: function (evt) {
            var $element = this.$(evt.currentTarget)
                    .find('[data-attribute]'),
                attribute = $element.data('attribute');

            if(attribute!== undefined) {
                this.ractive.set(attribute, $element.val());
            }

        },

        updateRactiveModel: function (renderState) {
            if (renderState !== true) {
                this.ractive.set('user.isSaved', false);
            }
            this.ractive.set('cars', this.cars.getCarInfo(this.model.get('availableCars')));
            this.ractive.set('currentCar', this.cars.getCarName(this.model.get('currentCar')));
            this.$('select').val(this.model.get('currentCar'));
            this.$('select').material_select();
        },

        save: function () {
            this.model.save();
        },

        undo: function () {
            this.model.fetch({reset: true});
        },

        render: function () {
            this.configureRactive({
                el: this.el,
                template: mainPage,
                data: {
                    user: this.model
                },
                partials: {
                    helloPage: helloComponent
                }
            });

            this.updateRactiveModel(true);
        }
    });
});
