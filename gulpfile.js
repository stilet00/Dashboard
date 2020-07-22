var gulp = require('gulp');
var postcss = require('gulp-postcss');
gulp.task('css', function () {
    return gulp.src('source/style.css')
        .pipe(gulp.dest('./build'));
});
gulp.task('html', function () {
    return gulp.src('source/index.html')
        .pipe(gulp.dest('./build'));
});
gulp.task('image', function () {
    return gulp.src('source/images/*')
        .pipe(gulp.dest('./build/images'));
});
gulp.task('fonts', function () {
    return gulp.src('source/fonts/*/*')
        .pipe(gulp.dest('./build/fonts'));
});
gulp.task('build', gulp.series(['css', 'html', 'image', 'fonts']))