// Wikipedia API
var articles = [];

// load wiki link for all schools
var searchWiki = allSchools.forEach(function(obj, key) {

    var search = allSchools[key].title;

    $.ajax({
      url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=" + search,
      type: 'POST',
      dataType: "jsonp",
      success: function( response ) {
          
          var wikiTitle = response[1][0];
          var wikiLink = response[3][0];

          articles.push({title: wikiTitle, link : wikiLink})

      }
    });

});