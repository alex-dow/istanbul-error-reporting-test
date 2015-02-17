define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        add: function(a, b) {
            return a + b;
        }
    });
});
