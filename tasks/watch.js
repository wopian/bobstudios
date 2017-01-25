const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      runSequence = require('run-sequence');

gulp.task('w', ['watch']);

gulp.task('watch', callback => runSequence(
  'default',
  'browserSync',
  'watch:files',
  callback
));

gulp.task('watch:rebuild', callback => runSequence(
  'yaml',
  'hbs',
  callback
));

gulp.task('watch:files', () => {
  gulp.watch('app/**/*.scss', ['scss']);
  gulp.watch('app/**/*.yml', ['watch:rebuild']);
  gulp.watch('app/**/*.hbs', ['hbs']);
});


gulp.task('browserSync', () => browserSync.init({
  server: {
    baseDir: 'dist'
  },
  ghostMode: {
    clicks:   true,
    location: true,
    forms:    true,
    scroll:   true
  },
  logFileChanges: true,
  logLevel:       'info',
  logPrefix:      'bobstudios',
  logConnections: false,
  notify:         true,
  open:           false
}));
