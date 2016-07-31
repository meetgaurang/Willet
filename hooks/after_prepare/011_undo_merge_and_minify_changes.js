#!/usr/bin/env node

var gulp = require('gulp');
var fs = require('fs');
var del = require('del');

gulp.task('clear-dist', function(arg) {
	return del([
    	'dist/**/*'
  	]);
});
gulp.task('copy-compressed-version-to-dist', ['clear-dist'], function(arg) {
	return gulp.src(['./www/**/*']).pipe(gulp.dest('./dist'));
});
gulp.task('clear-www', ['copy-compressed-version-to-dist'], function(arg) {
	return del([
    	'www/**/*'
  	]);
});
gulp.task('restore-backup-in-www', ['clear-www'], function(arg) {
	return gulp.src(['./www_bkup/**/*']).pipe(gulp.dest('./www'));
});

gulp.task('default', ['restore-backup-in-www'], function(arg) {
	return del([
    	'www_bkup/**/*',
    	'www_bkup'
  	]);
});

gulp.start('default');