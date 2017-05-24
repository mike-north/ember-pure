/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    pure: {

    }
  });
  app.options.snippetPaths = ['tests/dummy/app/templates/snippets'];
  app.options.snippetSearchPaths = ['tests/dummy', 'app', 'addon'];
  app.import('vendor/highlight.pack.js');
  return app.toTree();
};
