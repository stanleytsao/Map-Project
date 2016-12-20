var states = ko.observableArray([
  'All',
  'Illinois',
  'Indiana',
  'Ohio',
  'New York',
  'Pennsylvania',
  'New Jersey',
  'Delaware',
  'Maryland',
  'Washington D.C.',
  'Virginia',
  'North Carolina',
]);

var allSchools = [
  {
    title : 'Rutgers University',
    location : {lat: 40.5014869, lng: -74.44705359999999},
    state : 'New Jersey',
    link : 'test.com'
  },
  {
    title : 'George Mason University',
    location : {lat: 38.8345098, lng: -77.31111559999999},
    state : 'Virginia'
  },
  {
    title : 'Georgetown University',
    location : {lat: 38.9076708, lng: -77.0715752},
    state : 'Washington D.C.'
  },
  {
    title : 'George Washington University',
    location : {lat: 38.9009637, lng: -77.0476606},
    state : 'Washington D.C.'
  },
  {
    title : 'Carnegie Mellon University',
    location : {lat: 40.4434658, lng: -79.9434567},
    state : 'Pennsylvania'
  },
  {
    title : 'Northwestern University',
    location : {lat: 42.0505569, lng: -87.67972809999999},
    state : 'Illinois'
  },
  {
    title : 'University of Chicago',
    location : {lat: 41.7895697, lng: -87.60091480000001},
    state : 'Illinois'
  },
  {
    title : 'Princeton University',
    location : {lat: 40.35334290000001, lng: -74.6160467},
    state : 'New Jersey'
  },
  {
    title : 'Purdue University',
    location : {lat: 40.4282261, lng: -86.9144194},
    state : 'Indiana'
  },
  {
    title : 'University of Pittsburgh',
    location : {lat: 40.4443282, lng: -79.95315479999999},
    state : 'Pennsylvania'
  },
  // {
  //   title : '',
  //   location : {lat: , lng: },
  //   state : ''
  // },
  // {
  //   title : '',
  //   location : {lat: , lng: },
  //   state : ''
  // },
];


