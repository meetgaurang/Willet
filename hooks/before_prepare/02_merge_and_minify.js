#!/usr/bin/env node

var gulp = require('gulp');
var useref = require('gulp-useref');
var fs = require('fs');
var del = require('del');

gulp.task('duplicate-www', function(arg) {
	return gulp.src(['./www/**/*']).pipe(gulp.dest('./www_bkup'));
});
gulp.task('remove-unwanted-files', ['duplicate-www'], function(arg) {
	return del([
    'www/js/**/*',
    'www/js',
    //'!www/js/abc.txt' // we don't want to clean this file though so we negate the pattern
  ]);
});
gulp.task('default', ['remove-unwanted-files'], function(arg) {
	// Process index.html file as it already have input what all files should be merged into what
	return gulp.src('./www_bkup/index.html')
      .pipe(useref())
      .pipe(gulp.dest('./www/'));
});

gulp.start('default');