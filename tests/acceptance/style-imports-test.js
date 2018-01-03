import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | style imports');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.pure-button-primary').css('margin-top'), '20px');
    assert.equal(currentURL(), '/');
  });
});
