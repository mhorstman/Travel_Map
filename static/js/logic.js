// Creating map object
var myMap = L.map("travelmap", {
  center: [20.0, 0.0],
  zoom: 2
});
// Define API Key for Mapbox
const API_KEY = "pk.eyJ1IjoibWhvcnN0bWFuIiwiYSI6ImNrbTE3czljajEwYXUycG1ydDc4MTVnc28ifQ.7ahduH_7wwawalS2_83XHg";

// Add a light and satelite tile layers
lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);
streetsMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
});

// Link to world country GeoJSON data
var countryGeoJson = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
// Link to states GeoJSON data 
var statesGeoJson = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
// Link to destinations.js data file
const destinationsData = travelDesinations;

// Define overlay map layers
let statesOverlay = new L.layerGroup();
let countriesOverlay = new L.layerGroup();
let citiesOverlay = new L.layerGroup();
let overlayMaps = {
  "States": statesOverlay,
  "Countries": countriesOverlay,
  "Cities": citiesOverlay
};
let baseMaps = {
  "Light": lightMap,
  "Streets": streetsMap
};
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Define function to specity color for matching destinations
function chooseStyle(name, fill){
  let matchStyle = {
    color: "black",
    fillColor: fill,
    fillOpacity: 0.6,
    weight: 2
  };
  let noMatchStyle = {
    color: "gray",
    fillOpacity: 0.1,
    weight: 0.5
  }
  for (let destination of destinationsData) {
    if (destination.country === name) {
      return matchStyle;
    }
  };
  return noMatchStyle;
  };

// Draw boundries of states
d3.json(statesGeoJson, function(data) {
  L.geoJson(data, {
    style: function(feature) {
      return chooseStyle(feature.properties.name, "#ffff00")
    },
    onEachFeature: function(feature, layer) {
        layer.on(
          {
            click: function(event){
              myMap.fitBounds(event.target.getBounds());
            }
          })
    }
  }).addTo(statesOverlay);
});
statesOverlay.addTo(myMap); 

// Draw boundries of contries
d3.json(countryGeoJson, function(data) {
  console.log(data);
  L.geoJson(data, {
    style: function(feature) {
      return chooseStyle(feature.properties.name, "#00ff00")
    },
    onEachFeature: function(feature, layer) {
        layer.on(
          {
            click: function(event){
              myMap.fitBounds(event.target.getBounds());
            }
          })
    }
  }).addTo(countriesOverlay);
});
countriesOverlay.addTo(myMap);

// Draw city markers
var pinIcon = L.icon({
  iconUrl: 'static/data/pin-paper.png',
  iconSize: [20, 20],
  iconAnchor: [10, 20]
  });

destinationsData.forEach(function(destination) {
  destination.cities.forEach(function(city) {
    L.marker([city.lat, city.lng], {icon: pinIcon})
    .bindPopup("<h4>"+city.name+"</h4>")
    .addTo(citiesOverlay);
  });
});
citiesOverlay.addTo(myMap);
