'use strict';
// Protractor configuration file modified for continuous integration
module.exports = {
    configure: function (config) {
        config.capabilities = {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--no-sandbox']
            }
        };
        return config;
    }
};