function viewModel() {
    var self = this;

    schoolOptions = ko.observableArray();
    selectedState = ko.observable();
    selectedSchool = ko.observable();
	
	allSchools.forEach(function(obj, key) {
    	schoolOptions.push(allSchools[key]);
    });

// Filters list of schools in Nav based on selected State
    self.filterSchools = function() {

    	// Resets list of schoolOptions array and all markers
        schoolOptions.removeAll();
        allSchools.forEach(function(obj, key) {
			schoolOptions.push(allSchools[key]);
			markers[key].setMap(map);
        });

        // Removes school listings and markers from NOT selected states
        allSchools.forEach(function(obj, key) {
            if (selectedState() !== 'All') {
            	if (obj.state !== selectedState()) {
            		schoolOptions.remove(obj);
            		markers[key].setMap(null);
            	}
            };
        });

    };

// Highlights the button and the marker
	self.highlight = function() {
		
		selectedSchool(this.title);
		allSchools.forEach(function(obj, key) {
			// console.log(allSchools[key].link);
        	if (obj.title === selectedSchool()) {
        		markers[key].setIcon('img/universityIcon.png');
        		new google.maps.event.trigger(markers[key], 'click');
        	};
        });
	};

};

ko.applyBindings(new viewModel());

