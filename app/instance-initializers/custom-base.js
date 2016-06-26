import customBase from 'advancedmorning/routes/custom-base';

export function initialize(appInstance) {
  appInstance.register('route:basic', customBase);
}

export default {
  name: 'custom-base',
  initialize
};
