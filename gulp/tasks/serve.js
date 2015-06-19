var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('serve', ['sass'], function() {
  browserSync(config.browserSync);

  gulp.watch(config.sass.src, ['sass']);
});
