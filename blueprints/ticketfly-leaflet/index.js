/* jshint node: true */
'use strict';

module.exports = {
    normalizeEntityName: function(entityName) {
        // this prevents an error when the entityName is
        // not specified (since that doesn't actually matter
        // to us
        return entityName;
    },

    afterInstall: function() {
        this.addBowerPackageToProject('leaflet');
        this.addBowerPackageToProject('ember-leaflet');
    }
};