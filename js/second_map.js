let map = L.map('ad_map').setView([40.738248, -73.973242], 11.99);

L.tileLayer('https://api.mapbox.com/styles/v1/andreawood/cki9afqez3ydb19pl1gha9sk6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmVhd29vZCIsImEiOiJja2k2cWIxc24wOGJqMnhvMXk1c3ptaGYxIn0.WhGB9slR5yRtGp3D8FPwRA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo(map);
}
