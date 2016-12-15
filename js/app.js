

$.ajax({
	url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=basketball",
	type: 'POST',
	dataType: "jsonp",
	success: function( response ) {
	    
	    var title = response[1][0];
	    var link = response[3][0];
	    var result = [];
	    
console.log(title + ' ' + link);

	    // for (var i = 0; i < articleTitle.length; i++){
	    //     var title = articleTitle[i];
	    //     var link = articleLink[i];
	    //     result.push('<li><a href="'+link+'"target="_blank">'+title+'</a></li>');
	    // }

	}
});