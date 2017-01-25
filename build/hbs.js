const gulp = require('gulp'),
      runSequence = require('run-sequence'),
      fs = require('fs'),
      rename = require('gulp-rename'),
      gutil = require('gulp-util'),
      zeroFill = require('zero-fill'),
      stringWidth = require('string-width'),
      handlebars = require('gulp-compile-handlebars'),
      hbs = [],
      options = {
        ignorePartials: true,
        batch:          ['app/templates/components'],
        helpers:        {
          ifEq (a, b, opts) {
            if (a === b) {
              return opts.fn(this);
            }
            return opts.inverse(this);
          },
          ifNotEq (a, b, opts) {
            if (a !== b) {
              return opts.fn(this);
            }
            return opts.inverse(this);
          },
          limit (a, limit) {
            return a.slice(0, limit);
          }
        }
      },
      slugify = text => text.toString().toLowerCase()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start of text
        .replace(/-+$/, '')       // Trim - from end of text
      ;


gulp.task('hbs', callback => runSequence(
  'hbs:read',
  'hbs:generate',
  callback));

gulp.task('hbs:read', () => {
  hbs[0] = JSON.parse(fs.readFileSync('tmp/posts.json'));
});

gulp.task('hbs:generate', () => {
  Object.values(hbs[0]).forEach((post) => {
    const date = post.date.slice(0, 10);
    gulp.src('app/templates/post.hbs')
      .pipe(handlebars(post, options))
      .pipe(rename(`${date}-${slugify(post.title)}/index.html`))
      .pipe(gulp.dest('dist'));
  });
});
