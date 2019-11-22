'use strict';
var config = require('./protractor.conf').config;
config.baseUrl = require('./package.json').config.dev.deploy.e2eUrl;
var ci = require('./protractor-ci.conf');
config = ci.configure(config);
config.capabilities.chromeOptions.args.push('--headless');
exports.config = config;