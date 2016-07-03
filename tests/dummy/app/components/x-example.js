import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['x-example'],
  snippetName: computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  partialPath: computed('name', function() {
    return `snippets/${this.get('name')}`;
  })
});
