var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('https://gallica.bnf.fr/iiif/ark:/12148/btv1b103038173/f2/info.json', {
    fitBounds: true,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'https://gallica.bnf.fr/iiif/ark:/12148/btv1b103038173/f2/info.json',
  {quality: 'gray'}
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
