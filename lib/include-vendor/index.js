/*jshint node:true*/
module.exports = {
  name: 'include-vendor',

  isDevelopingAddon: function() {
    return true;
  },

  included(app) {
    app.import('vendor/include.js');
  }
};
