var gulp = require('gulp');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var gulpSequence = require('gulp-sequence');
var del = require('del');
var sourceMaps = require('gulp-sourcemaps');
var revCollector = require('gulp-rev-collector');
var rev = require('gulp-rev');
var imageMin = require('gulp-imagemin');


var src = {
  sass: ['gulp/assets/stylesheets/**/*.scss'],
  images: ['gulp/assets/images/**/*']
}

var publicAssets = './public/assets';

gulp.task('sass', function() {
  return gulp.src(src.sass)
    .pipe(sourceMaps.init())
    .pipe(sass({imagePath: src.images }))
    .pipe(autoPrefixer())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('images', function() {
  return gulp.src(src.images)
    .pipe(imageMin({ optimizationLevel: 5}))
    .pipe(gulp.dest('public/assets/images'));
});

gulp.task('clean', function() {
  del(publicAssets);
});

gulp.task('rev-assets', function() {
  return gulp.src(publicAssets + '/**/*!(css|js)')
    .pipe(rev())
    .pipe(gulp.dest(publicAssets))
    .pipe(rev.manifest())
    .pipe(gulp.dest(publicAssets))
});

gulp.task('rev', ['rev-assets'], function() {
  return gulp.src([publicAssets+'/rev-manifest.json', publicAssets + '/**/*.{css, js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(publicAssets));
});


gulp.task('build', function(callback) {
  var tasks = ['clean', ['sass'], 'images'];
  tasks.push('rev');
  tasks.push(callback);
  gulpSequence.apply(this, tasks);
});

gulp.task('default', function() {
  gulp.start('build');
});
