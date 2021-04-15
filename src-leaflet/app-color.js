var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/f1/info.json',
{
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'http://free.iiifhosting.com/iiif/d2a2a5fe1c58dfcf9a2f2c21351959a29038ab495a1f832113cf2aaf4c5a31e0/info.json',
  {
    fitBounds: false,
  }
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
