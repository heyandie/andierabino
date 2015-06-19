var gulp =  require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', function(callback) {
  var tasks = ['sass'];
  if(process.env.RAILS_ENV === 'production') tasks.push('rev');
  tasks.push(callback);
  gulpSequence.apply(this, tasks);
});
