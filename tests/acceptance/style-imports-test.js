import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | style imports');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.pure-button-primary').css('background-color'), 'rgb(0, 120, 231)');
    assert.equal(currentURL(), '/');
  });
});
