const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styleFibGen', function() {
  gulp.src('style.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

gulp.task('watchFibGen', function() {
  gulp.watch('style.css', ['styleFibGen']);
});
