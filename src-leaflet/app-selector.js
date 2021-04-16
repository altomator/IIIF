var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});

var iconLayers = [];

var layer1 = L.tileLayer.iiif('http://free.iiifhosting.com/iiif/38b2bc7a898797778cd1d2ac9c86837c4cfd01ac6d05804aba03a390c56c8b6f/info.json', {
    fitBounds: false,
    attribution: "visible"
  }
);

iconLayers.push({
      title: "visible",
      layer: layer1,
      icon: 'http://free.iiifhosting.com/iiif/38b2bc7a898797778cd1d2ac9c86837c4cfd01ac6d05804aba03a390c56c8b6f/full/1000,/0/default.jpg'
    });

var layer2 = L.tileLayer.iiif(
  'http://free.iiifhosting.com/iiif/639b11c8a996cdacdb39a3b22c06c4e07479881f05f65fa5993b2d5fd0942a87/info.json',
  {fitBounds: false,
  attribution: "UV"}
);

iconLayers.push({
      title: "UV",
      layer: layer2,
      icon: 'http://free.iiifhosting.com/iiif/639b11c8a996cdacdb39a3b22c06c4e07479881f05f65fa5993b2d5fd0942a87/full/1000,/0/default.jpg'
    });

var layer3 = L.tileLayer.iiif(
  'http://free.iiifhosting.com/iiif/a220e34ca867f1c82a049f6ef198c9611e0d6b41553e79d17dcdd50cfe79b702/info.json',
  {fitBounds: false,
  attribution: "IR"}
);

iconLayers.push({
      title: "IR",
      layer: layer3,
      icon: 'http://free.iiifhosting.com/iiif/a220e34ca867f1c82a049f6ef198c9611e0d6b41553e79d17dcdd50cfe79b702/full/1000,/0/default.jpg'
    });


var iconLayersControl = new L.Control.IconLayers(
    iconLayers, {
      position: 'topright'
    });

iconLayersControl.addTo(map);

// Only fit the bounds of the layer on first load
 var firstTime = true;
 iconLayers[0].layer.on('tileload', function() {
   if (firstTime) {
     this._fitBounds();
     firstTime = false;
   }
 });
