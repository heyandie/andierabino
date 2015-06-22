var gulp    = require('gulp');
var sass    = require('gulp-sass');
var config  = require('../config').sass;
var sourceMaps = require('gulp-sourcemaps');
var autpoPrefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
  stream = gulp.src(config.src)
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(autpoPrefixer())
    .pipe(browserSync.stream());

  if(process.env.RAILS_ENV === 'production')
   stream = stream
    .pipe(minifyCSS());

  stream.pipe(gulp.dest(config.dest))
   .pipe(browserSync.reload({stream:true}));



});
