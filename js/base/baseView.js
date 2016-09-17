/*global define*/
define(function (require) {
    'use strict';
    var Backbone = require('backbone');

    return Backbone.View.extend({

        remove: function () {
            
            if (typeof this.onRemove === 'function') {
                this.onRemove();
            }

            if (this.ractive) {
                this.ractive.teardown();
                this.ractive.off();
            }

            Backbone.View.prototype.remove.call(this);
        }
    });
});
