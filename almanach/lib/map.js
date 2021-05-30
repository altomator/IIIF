var React = require('react');
require('jquery');
global.$ = require('jquery/dist/jquery');
require('leaflet');
require('leaflet-iiif');
var util = require('./util');
var mapids = require('./mapids');
var Map = React.createClass({

  getInitialState: function() {
    return {
      mapid: this.props.randomMapId,
      mapInfo: {},
      online: true
    };
  },

  componentDidMount: function() {
    var _this = this;

    if (!navigator.onLine) return this.setState({online: false});

    _this.map = L.map('map', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoom: 0,
      zoomControl: false
    });

    new L.Control.Zoom({ position: 'topright' }).addTo(_this.map);

    _this.map.attributionControl.setPrefix('<a href="http://www.davidrumsey.com/">David Rumsey Map Collection</a> | <a href="http://library.stanford.edu">Stanford University Libraries</a>');


    $.getJSON(this.state.mapid, function(data) {
      _this.setState({mapInfo: data});
      _this.map.attributionControl.addAttribution(data.attribution);
      var randomCanvas = (Math.floor(Math.random() * data.sequences[0].canvases.length - 1) + 1);
      var iiifLayer = L.tileLayer.iiif(data.sequences[0].canvases[randomCanvas].images[0].resource.service['@id'] + '/info.json');

      _this.map.addLayer(iiifLayer);
      var firstTime = true;
      // Zoom in for more detail
      // iiifLayer.on('load', function() {
      //   if (firstTime) {
      //     var bounds = _this.map.getBounds().pad(-.3);
      //     var lat = Math.floor(Math.random() * (bounds.getNorth() - bounds.getSouth())) + bounds.getSouth();
      //     var lng = Math.floor(Math.random() * (bounds.getEast() - bounds.getWest())) + bounds.getWest();
      //     var zoom = Math.floor(Math.random() * ((_this.map.getMaxZoom() - 0) - (_this.map.getZoom() + 1))) + _this.map.getZoom() + 1;
      //     _this.map.flyTo(L.latLng(lat, lng), zoom);
      //     firstTime = false;
      //   }
      // });
      _this.handleInfo();
    });
  },

  handleInfo: function() {
    this.props.onInfo(this.state.mapInfo.label);
  },

  render: function() {
    return (
      <div>
        {this.state.online &&
          <div id='map' ref='map'></div>
        }
        {!this.state.online &&
          <img src='/assets/images/offline1.jpg' height='100%' width='100%'/>
        }
      </div>
    )
  }

});

module.exports = Map;
