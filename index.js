/* jshint node: true */
'use strict';

module.exports = {
  name: 'ticketfly-leaflet',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet-src.js');
    app.import(app.bowerDirectory + '/leaflet/dist/leaflet.css');
    app.import(app.bowerDirectory + '/ember-leaflet/dist/ember-leaflet.js');
  }
};
