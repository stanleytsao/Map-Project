var markers = [];
var map, bounds;

function initMap() {
    // Load new map
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: allSchools[4].location
    });

    bounds = new google.maps.LatLngBounds();
    var largeInfowindow = new google.maps.InfoWindow();

    for (var i = 0; i < allSchools.length; i++) {
        var position = allSchools[i].location;
        var title = allSchools[i].title;
        // Create Markers
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            map: map,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Add marker into markers array
        markers.push(marker);
        // Create info window on click
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);
    };

    // Extend the boundaries of the map for each marker
    map.fitBounds(bounds);
};

// Toggles info window to show only for selected marker
function populateInfoWindow(marker, infowindow) {

    // Reset other markers to default icon and toggle off bounce
    markers.forEach(function(obj, key) {
        markers[key].setIcon();
        markers[key].setAnimation(null);
    });

    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        // Wikipedia API loads on click
        var search = marker.title;
        var wikiTitle, wikiLink;
        var popUp = function() {
            marker.setIcon('img/universityIcon.png');
            marker.setAnimation(google.maps.Animation.BOUNCE);
            infowindow.setContent('<div><strong>' + search + '</strong><br><br><img src="img/' + search + '.jpg" alt="' + search + '" width="150px"><br><br>Learn more about:<br><a target="_blank" href="' + wikiLink + '">' + wikiTitle + '!</a></div>');
            infowindow.open(map, marker);
            // Make sure the marker property is cleared and set to default icon if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker = null;
                marker.setIcon();
                marker.setAnimation(null);
            });
        };
        var searchWiki = function(search) {
            $.ajax({
                    url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=" + search,
                    dataType: "jsonp",
                })
                .done(function(response) {
                    if (response[0] !== 'undefined') {
                        wikiTitle = response[1][0];
                        wikiLink = response[3][0];
                        popUp();
                    }
                })
                .fail(function(response) {
                    wikiTitle = "Failed to load Wikipedia API";
                    popUp();
                });
        };
        searchWiki(search);

    };
};