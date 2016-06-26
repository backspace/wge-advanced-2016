import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    email: {
      replace: true
    },
    name: {
      replace: true
    }
  }
});
