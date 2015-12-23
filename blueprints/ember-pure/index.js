/*jshint node:true*/
var RSVP = require('rsvp');

module.exports = {
  description: 'Setup ember-pure in an ember.js app',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('pure', '~0.6.0')
    ]);
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
