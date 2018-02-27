/*
                               _ _  __  __
                              | (_)/ _|/ _|
   ___  __ _ ___ ___ ______ __| |_| |_| |_
  / __|/ _` / __/ __|______/ _` | |  _|  _|
  \__ \ (_| \__ \__ \     | (_| | | | | |
  |___/\__,_|___/___/      \__,_|_|_| |_|

  GULP TASKS

  output: render and write
  verify: render and check, against written
  default: watch test dir, -> output

  TODO

  - consider using gulp-watch endless stream https://github.com/floatdrop/gulp-watch

*/

'use strict';

const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const diff = require('gulp-diff');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');

const testDest = './test';
const testGlob = './test/**/*.scss';
const sassIncl = path.join(__dirname, 'node_modules');

gulp.task('work', function () {
  return watch(testGlob, { ignoreInitial: true })
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(gulp.dest(testDest));
});

// function renderTests() {
//   return gulp.src(testGlob)
//     .pipe(sass({
//       outputStyle: 'expanded',
//       includePaths: [sassIncl]
//     }).on('error', sass.logError))
// }

// gulp.task('work', function(){
//   return renderTests()
//     .pipe(gulp.dest(testDest))
// });

gulp.task('test', function(){
  return gulp.src(testGlob)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [sassIncl]
    }).on('error', sass.logError))
    .pipe(rename({extname: '.css'}))
    .pipe(diff())
    .pipe(diff.reporter({ fail: true }));
});

// gulp.task('default', function () {
//   return gulp.watch(testGlob, ['work']);
// });
