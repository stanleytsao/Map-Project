var schools = [
  {
    title : 'Rutgers',
    location : {lat: 40.5014869, lng: -74.44705359999999},
  },
  {
    title : 'George Mason',
    location : {lat: 38.8345098, lng: -77.31111559999999},
  }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: schools[1].location
  });
  
  

  for (var i = 0; i < schools.length; i++) {
    
    var position = schools[i].location;
    var title = schools[i].title;
    // var infowindow = new google.maps.InfoWindow({
    //   content: 'test'+i
    // });

    var marker = new google.maps.Marker({
      position: position,
      title: title,
      map: map
    });

    // marker.addListener('click', function() {
    //   infowindow.open(map, this);
    // });
  };
  
};