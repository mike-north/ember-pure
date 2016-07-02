import Ember from 'ember';
import layout from '../templates/components/p-button';

const { Component } = Ember;

export default Component.extend({
  layout,
  classNames: ['pure-button'],
  classNameBindings: [
    'disabled:pure-button-disabled',
    'active:pure-button-active'
  ]
});
