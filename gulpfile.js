const gulp   = require('gulp'),
      requireDir = require('require-dir'),
      runSequence = require('run-sequence');

requireDir('build');

gulp.task('default', callback => runSequence(
  'yaml',
  ['json', 'scss'],
  'hbs',
  // 'clean',
  callback));
