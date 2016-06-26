import Ember from 'ember';
import { default as math, PI } from 'math';
import GeneralStrike from 'general-strike';

export default Ember.Route.extend({
  afterModel(model) {
    console.log(model || 'no model');
    console.log(math.sqrt(16), PI);
    console.log(`strike: ${GeneralStrike}`);
  },

  model() {
    return new Ember.RSVP.Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
});
