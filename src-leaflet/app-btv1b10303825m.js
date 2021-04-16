var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('http://free.iiifhosting.com/iiif/38b2bc7a898797778cd1d2ac9c86837c4cfd01ac6d05804aba03a390c56c8b6f/info.json', {
    fitBounds: true,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'http://free.iiifhosting.com/iiif/639b11c8a996cdacdb39a3b22c06c4e07479881f05f65fa5993b2d5fd0942a87/info.json',
  {fitBounds: true,}
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
