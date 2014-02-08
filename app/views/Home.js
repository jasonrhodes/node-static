var Backbone = require("backbone")
  , jquery = require("jquery")
  ;

Backbone.$ = global.$ || jquery;

module.exports = Backbone.View.extend({

	tagName: "div",
	className: "main-content",

	render: function () {
		// Make other model/collection/view combos here
		this.$el.html("<h1>La La La</h1>");
		return this;
	}

});