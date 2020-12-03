let map = L.map('fl_map').setView([28.228387, -83.089207], 5.77);

L.tileLayer('https://api.mapbox.com/styles/v1/andreawood/cki939zzm65jc1apcnbk41cqy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmVhd29vZCIsImEiOiJja2k2cWIxc24wOGJqMnhvMXk1c3ptaGYxIn0.WhGB9slR5yRtGp3D8FPwRA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

let marker1 = L.marker([27.975773613200403, -82.82836255076904]).addTo(map);
marker1.bindPopup("<b>Clearwater Beach</b>");

let marker2 = L.marker([30.29671874874323, -81.38894679569844]).addTo(map);
marker2.bindPopup("<b>Jacksonville Beach</b>");

let marker3 = L.marker([26.13252032665385, -81.8057154706547]).addTo(map);
marker3.bindPopup("<b>Naples Beach</b>");

let marker4 = L.marker([26.240332555902118, -80.08665144326322]).addTo(map);
marker4.bindPopup("<b>Pompano Beach</b>");
