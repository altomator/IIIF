var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('https://gallica.bnf.fr/iiif/ark:/12148/btv1b531454753/f1/info.json',
{
    fitBounds: true,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'https://free.iiifhosting.com/iiif/c99f9f1d892ff3d2aae2112332d8fdac17df0e92a0c9ad610f823fec955a4c34/info.json',
  {
    fitBounds: false,
  }
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
