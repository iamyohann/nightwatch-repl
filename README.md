# Nightwatch REPL

A simple REPL for nightwatch.

## Install

```
npm install nightwatch-repl
```

## Setup
Note: If you use nightwatch.json configuration, you must create a new file called
`nightwatch.conf.js`

```
// nightwatch.conf.js

var repl = require('nightwatch-repl');

module.exports = (function (settings) {
    repl.init(settings);
    ...
    ...
    return settings;
})(require('./nightwatch.json'));
```

## Usage Example

```
module.exports = {
  'demo test google' : function (browser) {
    browser
      .url('http://google.com')
      .waitForElementPresent('body', 1000);

    // show repl in the console
    browser.repl();
  },

  'part two' : function(client) {
    ....
  }
};
```