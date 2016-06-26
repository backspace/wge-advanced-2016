import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    console.log(model || 'no model');
  }
});
