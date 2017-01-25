const gulp = require('gulp'),
      yaml = require('gulp-yaml');

gulp.task('yaml', () => gulp.src('app/posts/**/*.yml')
  .pipe(yaml({ space: 2 }))
  .pipe(gulp.dest('tmp/posts')));