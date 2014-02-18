'use strict';
var Filter = require('broccoli-filter');
var markdown = require( "markdown" ).markdown;

function mdFilter(inputTree, options) {
	if (!(this instanceof mdFilter)) {
		return new mdFilter(inputTree, options);
	}

	this.inputTree = inputTree;
}

mdFilter.prototype = Object.create(Filter.prototype);
mdFilter.prototype.constructor = mdFilter;

mdFilter.prototype.extensions = ['md'];
mdFilter.prototype.targetExtension = 'html';

mdFilter.prototype.processString = function (str) {
	return markdown.toHTML(str);
};

module.exports = mdFilter;
