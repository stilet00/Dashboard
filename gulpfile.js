var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rigger = require('gulp-rigger');

gulp.task('css', function () {
    return gulp.src('source/style.css')
        .pipe(gulp.dest('./build'));
});
gulp.task('html', function () {
    return gulp.src('source/index.html')
        .pipe(rigger())
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
gulp.task('js', function () {
    return gulp.src('source/script.js')
        .pipe(gulp.dest('./build'));
});
gulp.task('build', gulp.series(['css', 'html', 'image', 'fonts', 'js']))