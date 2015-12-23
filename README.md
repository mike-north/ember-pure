# ember-pure

An ember addon to use [Pure](http://http://purecss.io/) in your ember.js app.

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


**ember-pure** (c) 2015-2016 Mike North, All Rights Reserved
**pure.css** (c) 2014 Yahoo! Inc., All Rights Reserved
