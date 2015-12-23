/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pure',

  included: function(app) {
    var useContext = (app.options.pure && app.options.pure.useContext) ? app.options.pure.useContext : false;
    var pureModules = app.options.pure && app.options.pure.modules
      ? app.options.pure.modules
      : null;
    if (pureModules) {
      var m = null;
      app.import(app.bowerDirectory + '/pure/' + (useContext ? 'base-context' : 'base') + '.css');
      for (m in pureModules) {
        app.import(app.bowerDirectory + '/pure/' + pureModules[m] + '.css');
      }
    } else {
      app.import(app.bowerDirectory + '/pure/pure.css');
      app.import(app.bowerDirectory + '/pure/grids-responsive.css');
    }
  }
};
