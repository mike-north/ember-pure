import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | p button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{p-button}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#p-button}}
        template block text
      {{/p-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('disabled state is handled with appropriate style', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{#p-button disabled=true}}Disabled{{/p-button}}`);

    assert.equal(this.element.textContent.trim(), 'Disabled');
    assert.equal(this.element.querySelector('.pure-button').classList.contains('pure-button-disabled'), true);
  });

  test('active state is handled with appropriate style', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    await render(hbs`{{#p-button active=true}}Active{{/p-button}}`);

    assert.equal(this.element.textContent.trim(), 'Active');
    assert.equal(this.element.querySelector('.pure-button').classList.contains('pure-button-active'), true);
  });
});
