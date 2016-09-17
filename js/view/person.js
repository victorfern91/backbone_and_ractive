define(function(require) {
    var BaseView = require('baseView'),
        mainPage = require('text!mainPageTmpl'),
        helloComponent = require('text!helloTmpl');

    return BaseView.extend({
        initialize: function () {
            this.setRactive({
                el: this.el,
                template: mainPage,
                data: {
                    user: this.model
                },
                partials: {
                    helloPage: helloComponent
                },
                computed: {
                    isModelSaved: function() {
                        return this.get('user.isSaved') ? 'yes' : 'no';
                    }
                }

            });

            this.render();
        },

        events: {
            'click .save': 'save',
            'click .undo': 'undo'
        },

        save: function (evt) {
            this.model.save();
        },

        undo: function (evt) {
            this.model.fetch();
        },

        render: function () {
            console.log(this.$el);
        }
    });
});
