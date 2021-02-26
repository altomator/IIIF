var map;

map = L.map('map', {
  center: [0, 0],
  crs: L.CRS.Simple,
  zoom: 0,
});


var layer1 = L.tileLayer.iiif('https://stacks.stanford.edu/image/iiif/zf275jj8939%2FMartellus_300ppi_natural_color_panorama_WIP2/info.json', {
    fitBounds: false,
  }
).addTo(map);

var layer2 = L.tileLayer.iiif(
  'https://stacks.stanford.edu/image/iiif/zf275jj8939%2FMartellus_300ppi_combined_processes_WIP2_panorama_with_blue_water/info.json'
).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
