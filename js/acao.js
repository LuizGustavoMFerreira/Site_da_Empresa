var onSuccess = function(position){
  L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';
  var map = L.mapquest.map('map', {
    center: [position.coords.latitude, position.coords.longitude],
    layers: L.mapquest.tileLayer('map'),
    zoom: 16
  });   

  map.addControl(L.mapquest.control());
  }

  navigator.geolocation.getCurrentPosition(onSuccess);


