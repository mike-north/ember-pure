import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['x-example'],
  snippetName: computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  partialPath: computed('name', function() {
    return `snippets/${this.get('name')}`;
  })
});
