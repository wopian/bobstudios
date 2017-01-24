const gulp   = require('gulp'),
      deploy = require('gulp-gh-pages');

gulp.task('deploy', () => gulp.src('./dist/**/*')
  .pipe(deploy()));
