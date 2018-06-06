'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function(){
    return gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});