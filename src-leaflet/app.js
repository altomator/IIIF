var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('https://gallica.bnf.fr/iiif/ark:/12148/btv1b103038173/f1/info.json', {
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'https://gallica.bnf.fr/iiif/ark:/12148/btv1b10303825m/f1/info.json',
  {quality: 'gray'}
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
