const gulp       = require('gulp'),
      jsonConcat = require('gulp-json-concat'),
      jsonFormat = require('gulp-json-format');

gulp.task('json', () => gulp.src('tmp/pages/posts/*.json')
  .pipe(jsonConcat('posts.json', data => new Buffer(JSON.stringify(data))))
  .pipe(jsonFormat(2))
  .pipe(gulp.dest('tmp/pages')));
