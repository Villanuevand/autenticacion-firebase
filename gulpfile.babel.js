'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemap = require('gulp-sourcemaps');



gulp.task('default', () => {
    return gulp.src('app/src/js/app.js')
        .pipe(babel())
        .pipe(gulp.dest('app/dist/js'))
});