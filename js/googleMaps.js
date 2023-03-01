function initializer() {
  var coordinates = { lat: -15.810079935056693, lng: -47.98820136524398 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coordinates
  });

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'Meu marcador'
  });
};
