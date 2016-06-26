module.exports = {
  name: 'placeholder-helper',

  availableOptions: [
    {
      name: 'base',
      type: String,
      default: 'http://placekitten.com'
    }
  ],

  locals: function(options) {
    return {
      base: options.base
    };
  }
};
