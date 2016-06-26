import Ember from 'ember';
import moment from 'moment';

export default Ember.Helper.extend({
  currentTime: Ember.inject.service(),

  compute(params, {value}) {
    const currentTimeService = this.get('currentTime');

    const originalTime = moment(value);
    const currentTime = moment(currentTimeService.get('currentTime'));

    return currentTime.to(originalTime);
  },

  observeCurrentTime: Ember.observer('currentTime.currentTime', function() {
    this.recompute();
  })
});
