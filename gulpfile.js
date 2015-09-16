var gulp = require("gulp")
var gutil = require("gulp-util")
var serve = require('gulp-serve')
var webpack = require("webpack")
var webpackConfig = require("./webpack.config.js")

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

gulp.task('default', ["webpack:build-dev", "serve"], function() {
    gulp.watch(["app/**/*"], ["webpack:build-dev"])
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

gulp.task('serve', serve('public'))
