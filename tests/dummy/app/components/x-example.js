import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['x-example'],
  snippetName: computed('name', function() {
    return `${this.get('name')}.hbs`;
  }),
  partialPath: computed('name', function() {
    return `snippets/${this.get('name')}`;
  })
});
