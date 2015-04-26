/**
 * Created by bbigelow on 4/2/15.
 */
'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf = require('gulp-rimraf'),
    Config = require('./gulpfile.config'),
    karma = require('karma').server;

var config = new Config();

/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
gulp.task('gen-ts-refs', function () {
    var target = gulp.src(config.appTypeScriptReferences);
    var sources = gulp.src([config.allTypeScript], {read: false});
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typings));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
        config.libraryTypeScriptDefinitions, //reference to library .d.ts files
        config.appTypeScriptReferences];     //reference to app.d.ts files

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            declarationFiles: false,
            noExternalResolve: true
        }));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-test-ts', function () {
    var sourceTsFiles = [config.allTestTypeScript,
        config.libraryTypeScriptDefinitions
    ];                //path to typescript files


    var tsResult = gulp.src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            declarationFiles: false,
            noExternalResolve: false
        }));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsTestOutputPath));
});

/**
 * Copy HTML to public folder
 */
gulp.task('copy-html', function () {
    var htmlFiles = [config.srcHtml, config.srcStyles];



    return gulp.src(htmlFiles)
        .pipe(gulp.dest(config.publicDir));

});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function () {
    var typeScriptGenFiles = [config.tsOutputPath + '/app',  // path to generated JS files
        config.tsOutputPath + '/components',
        config.sourceApp +'**/*.js',    // path to all JS files auto gen'd by editor
        config.sourceApp +'**/*.js.map', // path to all sourcemap files auto gen'd by editor
        config.tsTestOutputPath + '/**/*.js',
        config.tsTestOutputPath + '/**/*.js.map',
        '!' + config.publicDir + '/bower_packages/**/*'
    ];

    // delete the files
    return gulp.src(typeScriptGenFiles, {read: false})
        .pipe(rimraf());
});

gulp.task('clean-html', function() {
    var htmlCleanUp = ['./public/*.html',
        config.publicDir + '/app/**/*.html',
        config.publicDir + '/components/**/*.html',
        '!' + config.publicDir + '/bower_packages'
    ];
    return gulp.src(htmlCleanUp, {read: false})
        .pipe(rimraf());
});

gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('clean-all', ['clean-ts', 'clean-html']);

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript, config.allTestTypeScript, config.srcHtml], ['ts-lint', 'compile-ts', 'compile-test-ts', 'copy-html', 'gen-ts-refs', 'test']);
});

gulp.task('default', ['ts-lint', 'compile-ts', 'compile-test-ts', 'copy-html', 'gen-ts-refs', 'watch']);