const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano      = require('gulp-cssnano'),
      browserSync  = require('browser-sync');

gulp.task('scss', () => gulp.src('app/styles/**/*.scss')
  .pipe(sass())
  .pipe(cssnano())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade:  false
  }))
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(browserSync.reload({ stream: true })));
