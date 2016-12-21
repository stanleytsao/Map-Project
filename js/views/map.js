var markers = [];

var map, bounds;

function initMap() {
  // Load map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: allSchools[4].location
  });

  bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < allSchools.length; i++) {
    var position = allSchools[i].location;
    var title = allSchools[i].title;
    var state = allSchools[i].state;

    // Create Markers
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      map: map,
      animation: google.maps.Animation.DROP,
      id: i
    });

    markers.push(marker);

    bounds.extend(marker.position);

    // Animate markers on click
    marker.addListener('click', toggleBounce);

    function toggleBounce() {
      if (this.getAnimation() !== null) {
        this.setAnimation(null);
      } else {
        this.setAnimation(google.maps.Animation.BOUNCE);
      }
    };
    
    // Create info window on hover
    function info(i) {

      var contentString = '<div class="infowindow"><strong class="schoolName">' + title + '</strong><br><span>' + state + '</span><br><img src="http://lorempixel.com/100/100/city/' + i + '"><br><span>description</span></div>'

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('mouseover', function() {
        infowindow.open(map, this);
      });

      marker.addListener('mouseout', function() {
        infowindow.close(map, this);
      });

    }
    info(i);

    
  };

map.fitBounds(bounds);

};


