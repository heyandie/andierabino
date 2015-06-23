var gulp = require('gulp');
var config = require('../config');
var rev = require('gulp-rev');
var manifest = require('gulp-rev-rails-manifest');
// Add md5 hashes to assets
gulp.task('rev-assets', function() {
  return gulp.src(config.public + '/**/*.{css,js,eot,woff,ttf}')
    .pipe(rev())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(manifest())
    .pipe(gulp.dest(config.publicAssets));
});
