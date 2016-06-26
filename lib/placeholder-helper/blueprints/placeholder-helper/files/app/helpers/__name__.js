import Ember from 'ember';

export function <%= camelizedModuleName %>(params, {w, h}) {
  const base = '<%= base %>';
  return `${base}/${w}x${h}`;
}

export default Ember.Helper.helper(<%= camelizedModuleName %>);
