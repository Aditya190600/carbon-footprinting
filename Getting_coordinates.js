<!doctype html>
<html>
<head>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<style>
#map{ 
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
}
</style>
</head>
<body>
<div id="map"></div>
<script>

var map=L.map('map').setView([0,0],1);
L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=GB9kmk7VO91lRf59XgWS',{
attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);



var leafleticon=L.icon({
iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
iconSize:[38,95],
iconAnchor: [22,94],
shadowAnchor: [4,62],
popupAnchor:[12,-90]
})


//var marker= L.marker([51.5, -0.09],{icon:leafleticon}).addTo(map);

var circle= L.circle([-76.80230,39.5240	], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);
/*
var circle= L.circle([-82.07860,42.5226], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 50000
}).addTo(map);

 */
var circle= L.circle([-79.8365,63.2379], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([-76.2892, 88.4152], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([-41.7876,-67.657500], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([53.5511,9.9937], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([64.1466,-21.9426], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([60.1699,24.9384], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([51.0447,-144.0719], {
color:'green',
fillcolor:'#67F71E ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([47.8864,106.9057], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);
var circle= L.circle([-8.8147,13.2302], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([64.83960,	69.3360], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);
var circle= L.circle([-6.7924,39.2083], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([28.6692,	77.4538], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([32.1877, 74.1945], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);

var circle= L.circle([37.1699,79.9640], {
color:'red',
fillcolor:'#6f03 ',
fillOpacity: 0.5,
radius: 500000
}).addTo(map);



L.control.scale({
metric: true,
imperial: false,
position:'topright'
}).addTo(map);

</script>

</body>
</html>
