const gulp   = require('gulp'),
      requireDir = require('require-dir'),
      runSequence = require('run-sequence');

requireDir('tasks');

gulp.task('generate', callback => runSequence(
  'yaml',
  'json',
  'hbs',
  callback));

gulp.task('default', callback => runSequence(
  ['generate', 'scss', 'images'],
  callback));
