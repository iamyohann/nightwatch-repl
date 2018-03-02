# Nightwatch REPL
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fiamyohann%2Fnightwatch-repl.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fiamyohann%2Fnightwatch-repl?ref=badge_shield)


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

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fiamyohann%2Fnightwatch-repl.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fiamyohann%2Fnightwatch-repl?ref=badge_large)