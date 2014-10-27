var BagView = Backbone.View.extend({
	template: Handlebars.compile($('#bag-tpl').html()),
	initialize: function(){
		//render the default element
		this.setElement(this.template(this.attributes));
		//listen for any changes to our collection and re-render
		this.listenTo(this.collection, 'all', this.render);
	},
	events: {
		'submit form': 'addCandy'
	},
	addCandy: function(e){
		e.preventDefault();
		var name = this.$('[name=name]').val();
		var newCandy = new Candy({
			name: name
		});
		this.collection.add(newCandy);
		this.$('[name=name]').val('');
	},
	render: function(){
		var candyItems = this.collection.map(function(candyItem){
			var candyView = new CandyView({
				model: candyItem
			});

			candyView.render();
			return candyView.el;
		});
	

		//append the rendered collection of HTML fom elements
		//look for any UL's inside of this specific view and 
		//clear it out, then append our array of elements
		this.$('ul').empty().append(candyItems);

	}
});