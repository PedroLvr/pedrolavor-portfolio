
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// HTML
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
})


// SCSS
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// JS
gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

// SYNC
gulp.task('sync', function(){
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });
});

// WATCH
gulp.task('watch', ['html', 'sass', 'js', 'sync'],function() {
    gulp.watch('src/*.html', ['html', browserSync.reload]);
    gulp.watch('src/scss/*.scss', ['sass', browserSync.reload]);
    gulp.watch('src/js/*.js', ['js', browserSync.reload]);
});

// INIT
gulp.task('default', [ 'html', 'sass', 'js', 'watch' ]);