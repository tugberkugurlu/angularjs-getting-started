var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

gulp.task('clean', function(cb) {
    del(['assets/css', 'assets/js', 'assets/img'], cb)
});

gulp.task('styles', function() {
    
   return gulp.src('bower_components/bootstrap/dist/css/*')
              .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts', function() {
    
   return gulp.src([
        'bower_components/jquery/dist/*',
        'bower_components/bootstrap/dist/js/*',
        'bower_components/angular/*.js', 
        'bower_components/angular/*.map',
        'bower_components/underscore/*.js',
        'bower_components/underscore/*.map'
       ]
   ).pipe(gulp.dest('assets/js'));
});