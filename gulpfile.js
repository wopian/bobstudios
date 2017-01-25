const gulp   = require('gulp'),
      requireDir = require('require-dir'),
      runSequence = require('run-sequence');

requireDir('tasks');

gulp.task('default', callback => runSequence(
  'yaml',
  ['json', 'scss'],
  'hbs',
  callback));
