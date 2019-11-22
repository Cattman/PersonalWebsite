'use strict';
var config = require('./protractor.conf').config;
config.baseUrl = require('./package.json').config.dev.deploy.e2eUrl;
var ci = require('./protractor-ci.conf');
exports.config = ci.configure(config);