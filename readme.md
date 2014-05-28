# [broccoli](https://github.com/joliss/broccoli)-fat-arrow [![Build Status](https://travis-ci.org/hemanth/broccoli-es6-arrow.svg?branch=master)](https://travis-ci.org/hemanth/broccoli-fat-arrow)

> Compiles ES6 arrow functions to ES5 compliant code

```js
[1, 2, 3].map(n => n * 2);
```

compiles to this:

```js
[1, 2, 3].map(function(n) { return n * 2; });
```

## Install

```
npm install --save broccoli-es6-arrow
```


## Example

```js
var md = require('broccoli-es6-arrow');
tree = md(tree);
```


## License

MIT © [Hemanth.HM](http://h3manth.com)
