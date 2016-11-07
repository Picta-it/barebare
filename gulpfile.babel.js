'use strict';

var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var isparta = require('isparta');
var runSequence = require('run-sequence');

// Transform all required files with Babel
require('babel-core/register');

// Files to process
var TEST_FILES = 'tests/**/*.js';
var SRC_FILES = 'app/**/*.js';

/*
 * Instrument files using istanbul and isparta
 */
gulp.task('coverage:instrument', function () {
  return gulp.src(SRC_FILES)
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter // Use the isparta instrumenter (code coverage for ES6)
      // Istanbul configuration (see https://github.com/SBoudrias/gulp-istanbul#istanbulopt)
      // ...
    }))
    .pipe(istanbul.hookRequire()); // Force `require` to return covered files
});

/*
 * Write coverage reports after test success
 */
gulp.task('coverage:report', function () {
  return gulp.src(SRC_FILES, { read: false })
    .pipe(istanbul.writeReports({
      // Istanbul configuration (see https://github.com/SBoudrias/gulp-istanbul#istanbulwritereportsopt)
      // ...
    }));
});

/**
 * Run unit tests
 */
gulp.task('test', function () {
  return gulp.src(TEST_FILES, { read: false })
    .pipe(mocha({
      // Prepare environement for React/JSX testing
      require: path.join(__dirname, 'bin/test/jsdomParser')
    }));
});

/**
 * Run unit tests with code coverage
 */
gulp.task('test:coverage', function (done) {
  runSequence('coverage:instrument', 'test', 'coverage:report', done);
});

/**
 * Watch files and run unit tests on changes
 */
gulp.task('tdd', function (done) {
  gulp.watch([
    TEST_FILES,
    SRC_FILES
  ], ['test']).on('error', gutil.log);
});

// var fs = require('fs');
// var config = require('config');
// var gulp = require('gulp');
// var istanbul = require('gulp-istanbul');
// var mocha = require('gulp-mocha');
// var eslint = require('gulp-eslint');
// var eslintrc = JSON.parse(fs.readFileSync('./.eslintrc', 'utf8'));
// var coveralls = require('gulp-coveralls');
//
// gulp.task('pre-test', function () {
//   return gulp.src(['bin/**/*.js', 'app/**/*.js'])
//     // Covering files
//     .pipe(istanbul())
//     // Force `require` to return covered files
//     .pipe(istanbul.hookRequire());
// });
//
// gulp.task('test', ['lint', 'pre-test'], function () {
//   return gulp.src(['test/**/*.js'])
//     .pipe(mocha())
//     // Creating the reports after tests ran
//     .pipe(istanbul.writeReports())
//     // Enforce a coverage of at least 90%
//     .pipe(istanbul.enforceThresholds({ thresholds: { global: config.test.thresholds } }));
// });
//
// gulp.task('lint', function () {
//   // ESLint ignores files with "node_modules" paths.
//   // So, it's best to have gulp ignore the directory as well.
//   // Also, Be sure to return the stream from the task;
//   // Otherwise, the task may end before the stream has finished.
//   return gulp.src(['./app/*.js', './bin/*.js', './app/**/*.js', './bin/**/*.js'])
//       // eslint() attaches the lint output to the "eslint" property
//       // of the file object so it can be used by other modules.
//       .pipe(eslint(eslintrc))
//       // eslint.format() outputs the lint results to the console.
//       // Alternatively use eslint.formatEach() (see Docs).
//       .pipe(eslint.format())
//       // To have the process exit with an error code (1) on
//       // lint error, return the stream and pipe to failAfterError last.
//       .pipe(eslint.failAfterError());
// });
//
// gulp.task('coveralls', function () {
//   if (!process.env.CI) return;
//   return gulp.src('./coverage/lcov.info')
//     .pipe(coveralls());
// });
