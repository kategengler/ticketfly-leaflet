/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ticketfly-leaflet',

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet-src.js');
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet.css');
    app.import(app.bowerDirectory + '/ember-leaflet/dist/ember-leaflet.js');
  },
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
