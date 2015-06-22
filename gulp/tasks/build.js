var gulp =  require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', ['clean'], function(callback) {
  var tasks = ['clean', ['images'], ['sass']];
  if(process.env.RAILS_ENV === 'production')
    tasks.push('rev-assets');
  tasks.push(callback);
  gulpSequence.apply(this, tasks);
});
