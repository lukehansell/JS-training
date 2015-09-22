var del = require('del')
var gulp = require("gulp")
var gutil = require("gulp-util")
var less = require('gulp-less')
var minifyCss = require('gulp-minify-css')
var minifyHTML = require('gulp-minify-html');
var path = require('path')
var serve = require('gulp-serve')
var template = require('gulp-template')
var webpack = require("webpack")
var webpackConfig = require("./webpack.config.js")

gulp.task('default', ["webpack:build-dev", "haml:build-dev", "less:build-dev", "serve"], function() {
    gulp.watch(["app/**/*"], ["webpack:build-dev"])
    gulp.watch(["assets/**/*.html"], ["haml:build-dev"])
});

gulp.task('build-production', ["webpack:build-production", "haml:build-production", "less:build-production"])

gulp.task('webpack:build-dev', function(callback) {
    // run webpack
    webpack( webpackConfig.uncompressed, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err)
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback()
    });
});

gulp.task('webpack:build-production', function(callback) {
	webpack( webpackConfig.minified, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err)
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback()
    });
})

gulp.task('haml:build-dev', function() {
    return gulp.src('assets/*.html')
        .pipe(template({env: 'development'}))
        .pipe(gulp.dest('dev'))
})


gulp.task('haml:build-production', function() {
    return gulp.src('assets/**/*.html')
        .pipe(template({env: 'production'}))
        .pipe(minifyHTML({
            empty: true,
            conditionals: true,
            spare: true,
            quotes: true
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('less:build-dev', function() {
    return gulp.src('assets/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dev'))
})

gulp.task('less:build-production', function() {
    return gulp.src('assets/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'))
})

gulp.task('clean:dev', function() {
    return del([
        'dev'
    ])
})

gulp.task('clean:production', function() {
    return del([
        'dist'
    ])
})

gulp.task('serve', serve('dev'))