'use strict';
var Filter = require('broccoli-filter');
var fat = require('es6-arrow-function').compile;

function arrowFilter(inputTree, options) {
	if (!(this instanceof arrowFilter)) {
		return new arrowFilter(inputTree, options);
	}

	this.inputTree = inputTree;
}

arrowFilter.prototype = Object.create(Filter.prototype);
arrowFilter.prototype.constructor = arrowFilter;

arrowFilter.prototype.extensions = ['js'];
arrowFilter.prototype.targetExtension = 'js';

arrowFilter.prototype.processString = function (str) {
	return fat(str);
};

module.exports = arrowFilter;
