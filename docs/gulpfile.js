/**
 * GULP PLUGIN
 *
 * .....gulp 
 * .....gulp-minify-html
 * .....gulp-minify-css
 * .....gulp-imagemin
 * .....gulp-concat (Merge many JS to single file)
 * .....browser-sync
 *
 * .....Default Task for browser-sync
 * .....Default Task for Production
 *
 */

/*------------------------------------*\
    gulp
\*------------------------------------*/
// โหลด package "gulp" มาใช้ (บรรทัดนี้ต้องใส่เสมอ)
var gulp = require('gulp');

/*------------------------------------*\
    gulp-minify-html
\*------------------------------------*/
//var minifyHTML = require('gulp-minify-html');
//
//gulp.task('minify-html', function () {
//  var opts = {comments:true,spare:true};
//  gulp.src('../*.php')
//    .pipe(minifyHTML(opts))
//    .pipe(gulp.dest('../'))
//});

/*------------------------------------*\
    gulp-minify-css
\*------------------------------------*/
//var minifyCSS = require('gulp-minify-css');
//
//gulp.task('minify-css', function () {
//  gulp.src('../css/main.css')
//    .pipe(minifyCSS({keepBreaks:true}))
//    .pipe(gulp.dest('../css/'))
//});

/*------------------------------------*\
    gulp-imagemin
\*------------------------------------*/
//var imagemin = require('gulp-imagemin');
//var pngcrush = require('imagemin-pngcrush');
//
//gulp.task('imagemin', function () {
//    return gulp.src('../images/*')
//        .pipe(imagemin({
//            progressive: true,
//            svgoPlugins: [{removeViewBox: false}],
//            use: [pngcrush()]
//        }))
//        .pipe(gulp.dest('../images/'));
//});

/*------------------------------------*\
    gulp-concat
\*------------------------------------*/
//var concat = require('gulp-concat');
//
//gulp.task('merge-js', function () {
//  gulp.src('../js/plugins/*.js')
//    .pipe(concat('all.js'))
//    .pipe(gulp.dest('../js/plugins/'))
//});

/*------------------------------------*\
    browser-sync
\*------------------------------------*/
var browserSync = require('browser-sync');
 
gulp.task('browser-sync', function () {
    browserSync.init(["*.html", "css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

/*------------------------------------*\
    Default Task for browser-sync 
\*------------------------------------*/
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['*.html'], browserSync.reload);
    gulp.watch(['css/*.css'], browserSync.reload);
    gulp.watch(['js/*.js'], browserSync.reload);
});

/*------------------------------------*\
    Default Task for Production 
\*------------------------------------*/
//gulp.task('default', ['minify-html', 'minify-css', 'imagemin'], function () {});




















