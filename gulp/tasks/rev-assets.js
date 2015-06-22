var gulp = require('gulp');
var config = require('../config');
var rev = require('gulp-rev');

// Add md5 hashes to assets
gulp.task('rev-assets', function() {

  return gulp.src(config.publicAssets + '/stylesheets/global.css')
    .pipe(gulp.dest(config.publicAssets))
    .pipe(rev())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.publicAssets))

});
