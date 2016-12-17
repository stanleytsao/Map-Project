function viewModel() {
    var self = this;

 	schoolOptions = ko.observableArray(allSchools);

 	selectedState = ko.observable('East Coast');

 	self.filterSchools = function() {

 		var toggleSchools = allSchools.forEach(function(obj, key) {
 			if (obj.state !== selectedState()) {
				$('#schoolList')["0"].children[key].className = 'hide';
 			} else {
 				$('#schoolList')["0"].children[key].className = 'show';
 			}
 		});

 		// var toggleSchools = allSchools.forEach(function(obj, key) {
 		// 	if (obj.state !== selectedState()) {
			// 	$('#schoolList')["0"].children[key].className = 'hide';
 		// 	} else {
 		// 		$('#schoolList')["0"].children[key].className = 'show';
 		// 	}
 		// });

 	}

};
ko.applyBindings(new viewModel());




// Wikipedia API
$.ajax({
	url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=basketball",
	type: 'POST',
	dataType: "jsonp",
	success: function( response ) {
	    
	    var title = response[1][0];
	    var link = response[3][0];
	    var result = [];

	    // for (var i = 0; i < articleTitle.length; i++){
	    //     var title = articleTitle[i];
	    //     var link = articleLink[i];
	    //     result.push('<li><a href="'+link+'"target="_blank">'+title+'</a></li>');
	    // }

	}
});