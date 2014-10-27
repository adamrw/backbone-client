var candyBag = new CandyBag([
	new Candy({name: 'KitKat', calories: 5000}),
	new Candy({name: 'Nerds', calories: 1, isPoisoned: true}),
	new Candy({name: 'Twix', calories: 1}),
	new Candy({name: 'Shit Stix', calories: -20, isPoisoned: true})
]);


//generate a view for the candy bag
var bagView = new BagView({
	collection: candyBag,
	attributes: {
		title: 'My Candy Bag'
	}
});
bagView.render();

var bagView2 = new BagView({
	collection: candyBag,
	attributes: {
		title: 'Someone Else\'s Candy Bag'
	}
});
bagView2.render();


$(document).on('ready', function(){
	//when the document is all ready
	$('.container').append(
		bagView.el,
		bagView2.el
	);
});