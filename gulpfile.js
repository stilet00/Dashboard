var gulp = require('gulp');
var postcss = require('gulp-postcss');
gulp.task('css', function () { return gulp.src(‘./css/*.css') .pipe(gulp.dest(‘./build'));
});
