/* jshint node: true */
'use strict';

module.exports = {
    normalizeEntityName: function(entityName) {
        // this prevents an error when the entityName is
        // not specified (since that doesn't actually matter
        // to us
        //return entityName;
    },

    afterInstall: function() {
        var that = this;
        return this.addBowerPackageToProject('leaflet')
            .then(function(){
                return that.addBowerPackageToProject('ember-leaflet');
            });
    }
};