let latitude,longitude;

// Initializing mapbox

$(document).ready(function(){
  geoLocation();
  alert("Plaese allow the device to know your Location!...........")
})

$(function(){
  $('#navigate-button').click(function(){
    window.location.href = `ar-navigate.html?source=${laitude};${longitude}&destination=${destination.lat};${destination.lng}`
  })
})


function geoLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success)
  }else{
    alert("Your browser does not support GeoLocation service....>>>>>>>>>")
  }
}

function success(position){
  longitude = position.coords.longitude
  latitude = position.coords.latitude
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";
  var map = new mapboxgl.map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [latitude, longitude],
    zoom: 1,
  });

  var img1 = document.querySelector("#amber");

  var marker1 = new mapboxgl.Marker({
    element: img1,
  })
    .setLngLat([75.85133, 26.98547])
    .addTo(map);

  var img2 = document.querySelector("#gateway");

  var marker2 = new mapboxgl.Marker({
    element: img2,
  })
    .setLngLat([18.9219892, 72.8324656])
    .addTo(map);

  var img3 = document.querySelector("#gate");

  var marker3 = new mapboxgl.Marker({
    element: img3,
  })
    .setLngLat([28.6129167, 77.227321])
    .addTo(map);

  var img4 = document.querySelector("#lotus");

  var marker4 = new mapboxgl.Marker({
    element: img4,
  })
    .setLngLat([28.5534967, 77.2566377])
    .addTo(map);

  var img5 = document.querySelector("#victoria");

  var marker5 = new mapboxgl.Marker({
    element: img5,
  })
    .setLngLat([22.5448131, 88.3403691])
    .addTo(map);

  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    }),
    'top-left'
  );
  map.on('click', function(e){
    destination = e.lngLat
  })
}