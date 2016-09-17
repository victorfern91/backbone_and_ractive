define(function(require) {
    var Backbone = require('backbone'),
        Ractive = require('ractive'),
        adaptorBackbone = require('ractive-adaptors-backbone');

    return Backbone.View.extend({

        setRactive: function (config) {
            this.ractive = null;
            Ractive.DEBUG = false;
            adaptorBackbone.Backbone = Backbone;
            config.adapt = [adaptorBackbone];
            this.ractive = new Ractive(config);
        },

        remove: function () {
            if (typeof this.onRemove === 'function') {
                this.onRemove();
            }
            if(this.ractive) {
                this.ractive.teardown();
            }

            Backbone.View.prototype.remove.call(this);
        }
    });
});
