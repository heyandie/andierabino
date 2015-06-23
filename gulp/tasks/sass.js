var gulp    = require('gulp');
var sass    = require('gulp-sass');
var config  = require('../config').sass;
var sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sourceMaps.init())
      .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(config.dest));
});
