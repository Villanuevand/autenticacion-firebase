'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sourcemap = require('gulp-sourcemaps');



gulp.task('bundleJs', () => {
    return gulp.src('app/src/js/app.js')
        .pipe(babel())
        .pipe(gulp.dest('app/dist/js'))
});

gulp.task('server', () => {
    browserSync.init({
        open: false,
        port: 3001,
        reloadOnRestart: true,
        server: './app',
        ui: false
    })

});

gulp.task('default', ['bundleJs','server']);