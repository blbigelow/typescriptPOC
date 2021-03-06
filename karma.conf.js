// Karma configuration
// Generated on Wed Apr 08 2015 12:11:59 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

  // list of files to exclude
  exclude: [
      'public/bower_packages/*'
  ],

    // list of files / patterns to load in the browser
    files: [
        'public/bower_packages/angular/angular.js',
        'public/bower_packages/router/dist/router.es5.js',
        'public/bower_packages/angular-mocks/angular-mocks.js',
        'public/bower_packages/angular-material/angular-material.js',
        'public/bower_packages/angular-animate/angular-animate.js',
        'public/bower_packages/angular-aria/angular-aria.js',
        'public/app/**/*.js',
        'public/components/**/*.js',
        'test/**/*.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
