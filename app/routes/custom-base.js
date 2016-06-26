import Ember from 'ember';
import { default as math, PI } from 'math';

export default Ember.Route.extend({
  afterModel(model) {
    console.log(model || 'no model');
    console.log(math.sqrt(16), PI);
  }
});