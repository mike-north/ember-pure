import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, visit, findAll } from '@ember/test-helpers';

module('Acceptance | style imports', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    const elem = findAll('.pure-button-primary')[0];
    assert.equal(elem.computedStyleMap().get('margin-top').value, 20);
    assert.equal(currentURL(), '/');
  });
});
