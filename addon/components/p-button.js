import Component from '@ember/component';
import layout from '../templates/components/p-button';

export default Component.extend({
  layout,
  classNames: ['pure-button'],
  classNameBindings: [
    'disabled:pure-button-disabled',
    'active:pure-button-active'
  ]
});
