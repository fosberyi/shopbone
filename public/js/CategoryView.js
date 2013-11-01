window.CategoryView = Backbone.View.extend({
	template: '#categoryView',
	events: {},
	initialize: function () {
		_.bindAll(this, 'render');
	},
	render: function () {
	  $(this.el).html('this be the app');
	  return this;
	}
});
