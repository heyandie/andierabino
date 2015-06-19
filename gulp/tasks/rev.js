var gulp = require('gulp');
var config = require('../config');
var revCollector = require('gulp-rev-collector');

/**
 * Replace all assets in files from a manifest files
 */

 gulp.task('rev', ['rev-assets'], function() {
   return gulp.src([config.publicAssets + '/rev-manifest.json', config.publicAssets + '/**/*.{css,js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.publicAssets));
 });
