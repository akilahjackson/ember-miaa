'use strict';

module.exports = function(environment) {

  let ENV = {
    modulePrefix: 'ember-miaa',
    environment,
    rootURL: '/',
    locationType: 'auto',

    firebase: {
    apiKey: 'AIzaSyAo0VdEuM9QT8CfAXTTxGN1oBw4WXu6tYo',
    authDomain: 'miaa-webapp.firebaseapp.com',
    projectId: "miaa-webapp",
    databaseURL: 'https://miaa-webapp.firebaseio.com',
    storageBucket: 'miaa-webapp.appspot.com',
    messagingSenderId: "871953992198",
    appId: "1:871953992198:web:8776c4842c7ad978"
  },

  // if using ember-cli-content-security-policy
  contentSecurityPolicy: {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
  },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      
    },

    emberWordpress: {
          host: 'https://miaa-53b41d.easywp.com/'
        }
  };
  ////// Wordpress integration


  ///// END integration

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
