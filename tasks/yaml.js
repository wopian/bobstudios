const gulp = require('gulp'),
      yaml = require('gulp-yaml');

gulp.task('yaml', () => gulp.src('pages/**/*.yml')
  .pipe(yaml({ space: 2 }))
  .pipe(gulp.dest('tmp/pages')));
