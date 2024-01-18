require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/GeoJSONLayer',
], function (Map, MapView, GeoJSONLayer) {
  var map = new Map({
    basemap: 'streets',
  });

  var view = new MapView({
    container: 'viewDiv',
    map: map,
    zoom: 11,
    center: [-2.54, 51.5],
  });

  var layer = new GeoJSONLayer({
    url: 'https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_leisure_and_culture/MapServer/3/query?outFields=*&where=1%3D1&f=geojson',
  });

  map.add(layer);
  const uiControls = document.getElementsByClassName('esri-ui');
  uiControls.remove();
});
