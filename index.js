/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-pure',

  included(app) {
    let useContext = (app.options.pure && app.options.pure.useContext) ? app.options.pure.useContext : false;
    let pureModules = app.options.pure && app.options.pure.modules
      ? app.options.pure.modules
      : null;
    if (pureModules) {
      let m = null;
      app.import(`${app.bowerDirectory  }/pure/${  useContext ? 'base-context' : 'base'  }.css`);
      for (m in pureModules) {
        app.import(`${app.bowerDirectory  }/pure/${  pureModules[m]  }.css`);
      }
    } else {
      app.import(`${app.bowerDirectory  }/pure/pure.css`);
      app.import(`${app.bowerDirectory  }/pure/grids-responsive.css`);
    }
  }
};
