var gulp = require('gulp');
var watch  = require('gulp-watch');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['sass'], function() {
  browserSync.init(null, config.browserSync);

  watch(config.sass.src, function() { gulp.start('sass'); });
  watch(config.images.src, function() { gulp.start('images'); });
});
