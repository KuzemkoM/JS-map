function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var chernihiv = {lat:51.4938405, lng:31.2999212},
    uzhorod = {lat:48.6193605, lng:22.2095975},
    kyiv = {lat:50.4492763, lng:30.5143413},
    pryluky = {lat: 50.5883055, lng:32.315557};
    mykolaiv = {lat: 46.9329791, lng:31.8679122};
    yalta = {lat: 44.5017127, lng:34.1251114};


var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  center: uzhorod
});

directionsDisplay.setMap(map);

var onChangeHandler = function() {
  calculateAndDisplayRoute(directionsService, directionsDisplay);
};

document.getElementById('start').addEventListener('change', onChangeHandler);
document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
  origin: document.getElementById('start').value,
  destination: document.getElementById('end').value,
  travelMode: 'DRIVING'
}, function(response, status) {
if (status === 'OK') {
  directionsDisplay.setDirections(response);
} else {
  window.alert('Directions request failed due to ' + status);
    }
  });
}

$(document).ready(function(){
  initMap();
});  
