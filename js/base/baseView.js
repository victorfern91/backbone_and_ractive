/*global define*/
define(function (require) {
    'use strict';

    var Backbone = require('backbone');


    return Backbone.View.extend({

        configureRactive: function (config) {
            var Ractive = require('ractive'),
                adaptorBackbone = require('ractive-adaptors-backbone');

            this.ractive = null;
            Ractive.DEBUG = true;
            adaptorBackbone.Backbone = Backbone;
            config.adapt = [adaptorBackbone];
            this.ractive = new Ractive(config);
        },

        remove: function () {
            if (typeof this.onRemove === 'function') {
                this.onRemove();
            }
            if (this.ractive) {
                this.ractive.teardown();
            }

            this.undelegateEvents();
            this.$el.removeData().unbind();
            Backbone.View.prototype.remove.call(this);
        }
    });
});
