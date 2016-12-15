function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: schools[1].location
  });

  for (var i = 0; i < schools.length; i++) {
    var position = schools[i].location;
    var title = schools[i].title;
    var state = schools[i].state;

    var marker = new google.maps.Marker({
      position: position,
      title: title,
      map: map
    });
    
    function info() {

      var contentString = '<div class="infowindow"><strong class="schoolName">' + title + '</strong><br>State: ' + state + '<img src="img/tom.png" style="width:100px;"></div>'

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
    info();
  };
};


