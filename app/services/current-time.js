import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    this.setCurrentTime();

    this.setLater();
  },

  setCurrentTime() {
    this.set('currentTime', new Date());
  },

  setLater() {
    Ember.run.later(() => {
      this.setCurrentTime();
      this.setLater();
    }, 5000);
  }
});
