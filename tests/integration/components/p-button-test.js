import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('p-button', 'Integration | Component | p button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{p-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#p-button}}
      template block text
    {{/p-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('disabled state is handled with appropriate style', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{#p-button disabled=true}}Disabled{{/p-button}}`);

  assert.equal(this.$().text().trim(), 'Disabled');
  assert.equal(this.$('.pure-button').hasClass('pure-button-disabled'), true);
});

test('active state is handled with appropriate style', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{#p-button active=true}}Active{{/p-button}}`);

  assert.equal(this.$().text().trim(), 'Active');
  assert.equal(this.$('.pure-button').hasClass('pure-button-active'), true);
});
