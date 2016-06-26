/*jshint node:true*/
module.exports = {
  name: 'include-vendor',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(app) {
    app.import('vendor/include.js');
  }
};
