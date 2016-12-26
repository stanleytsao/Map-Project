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
    // var state = allSchools[i].state;

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
      markers.forEach(function(obj, key) {
        markers[key].setIcon();
      });
      populateInfoWindow(this, largeInfowindow);
    });
    bounds.extend(markers[i].position);
  };
  
  // Extend the boundaries of the map for each marker
  map.fitBounds(bounds);
};

// Toggles info window to show only for selected marker
function populateInfoWindow(marker, infowindow) {
  // Check to make sure the infowindow is not already opened on this marker.
  if (infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent('<div><strong>' + marker.title + '</strong><br>IMAGE<br>wikipediaLink</div>');
    infowindow.open(map, marker);
    marker.setIcon('img/universityIcon.png');
    // Make sure the marker property is cleared if the infowindow is closed.
    infowindow.addListener('closeclick',function(){
      infowindow.setMarker = null;
      marker.setIcon();
    });
  };
};

