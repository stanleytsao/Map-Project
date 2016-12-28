"use strict";

function viewModel() {
    var self = this;

    self.schoolOptions = ko.observableArray();
    self.selectedState = ko.observable();
    self.selectedSchool = ko.observable();

    allSchools.forEach(function(obj, key) {
        self.schoolOptions.push(allSchools[key]);
    });

    // Filters list of schools in Nav based on selected State
    self.filterSchools = function() {

        // Resets list of schoolOptions array and all markers
        self.schoolOptions.removeAll();
        allSchools.forEach(function(obj, key) {
            self.schoolOptions.push(allSchools[key]);
            markers[key].setVisible(true);
        });

        // Removes school listings and markers from NOT selected states
        allSchools.forEach(function(obj, key) {
            if (self.selectedState() !== 'All') {
                if (obj.state !== self.selectedState()) {
                    self.schoolOptions.remove(obj);
                    markers[key].setVisible(false);
                }
            };
        });

    };

    // Highlights the button and the marker
    self.highlight = function() {

        self.selectedSchool(this.title);
        allSchools.forEach(function(obj, key) {
            // markers[key].setIcon();
            if (obj.title === self.selectedSchool()) {
                new google.maps.event.trigger(markers[key], 'click');
            };
        });
    };

    // Toggle Nav bar
    self.toggleNav = function() {
        var nav = $('.nav');
        if (nav.css('left') < '0') {
            nav.css('left', '0');
        } else {
            nav.css('left', '-60%');
        };
    }
};
ko.applyBindings(new viewModel());

var googleError = function() {
    alert("Failed to load GoogleMaps API");
    $('#map').append('<br>' + "Failed to load GoogleMaps API");
    $('#map').css({'font-size': '3em', 'color': '#f21'})
}