'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should compile md', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.js', 'utf8'),
		fs.readFileSync('fixture/expected.js', 'utf8').trim()
	);
});
