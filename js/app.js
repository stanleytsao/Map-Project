function viewModel() {
    var self = this;

    schoolOptions = ko.observableArray(allSchools);

    selectedState = ko.observable();


// -----------------
 //    wikiLinks = [];
 //    setTimeout(function(){
 //    	allSchools.forEach(function(k) {
 //    		wikiLinks.push(k.link);
 //    	})
 //    	var list = $('#schoolList');
	// for (var i = 0; i < list[0].children.length; i++) {
	// 	var span = list["0"].children[i];
	// 	var str = '<p>test</p>';
	// 	// span = str;
	// 	console.log(span);
	// 	console.log(list);

	// }
	// }, 5000);

// -----------------

// Filters list of schools in Nav based on selected State
    self.filterSchools = function() {

        var schools = $('#schoolList')["0"];

        var toggleSchools = allSchools.forEach(function(obj, key) {
            if (selectedState() === 'All') {
                schools.children[key].className = 'show';
                markers[key].setMap(map);
            } else if (obj.state === selectedState()) {
                schools.children[key].className = 'show';
                (function showMarker(key) {
                    for (var i = 0; i < markers.length; i++) {
                        markers[key].setMap(map);
                        bounds.extend(markers[i].position);
                        map.fitBounds(bounds);
                    }
                }(key));
            } else {
                schools.children[key].className = 'hide';
                (function hideMarker(key) {
                    for (var i = 0; i < markers.length; i++) {
                        markers[key].setMap(null);
                    }
                }(key));
            }
        });
    };

};
setTimeout(function(){
	ko.applyBindings(new viewModel());
}, 5000);

