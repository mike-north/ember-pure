# ember-pure

[![Greenkeeper badge](https://badges.greenkeeper.io/mike-north/ember-pure.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mike-north/ember-pure.svg?branch=master)](https://travis-ci.org/mike-north/ember-pure) [![Ember Observer Score](https://emberobserver.com/badges/ember-pure.svg)](https://emberobserver.com/addons/ember-pure)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-pure/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-pure) [![npm version](https://badge.fury.io/js/ember-pure.svg)](https://badge.fury.io/js/ember-pure)


An ember addon to use [Pure.css](http://purecss.io/) in your ember.js app.

## Setting your project up

#### Installation
```
ember install ember-pure
```

#### Configuration
You can decide which pure modules you wish to import, and configure your `ember-cli-build.js` accordingly. By default, all of Pure will be included.

**Example ember-cli-build.js for opting in to only a few modules**
```js
/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    pure: {
      modules: ['grids', 'grids-responsive', 'menus', 'buttons']
    }
  });

  return app.toTree();
};

```

Additionally, Pure can be incorporated into your project in "context mode", where no style is applied to naked tags (i.e., `h1`, `h2`, etc...). Instead, these kinds of styles will be applied only to elements that are decendants the `pure` class.

```html
<div class="pure">
  <h1>This will be styled</h1>
</div>

<h1>This will not</h1>
```

To operate in this mode, you must configure `ember-pure` in your `ember-cli-build.js` file. By default, the addon will NOT be used in context mode, and naked HTML tags will be styled.

**Example ember-cli-build.js for operating in "context mode"**
```js
/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    pure: {
      useContext: true
    }
  });

  return app.toTree();
};
```

* **ember-pure** (c) 2015-2016 Mike North, All Rights Reserved
* **pure.css** (c) 2014 Yahoo! Inc., All Rights Reserved
