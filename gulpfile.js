var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('styleSheet', function() {
    var processors = [
	autoprefixer({browsers: ['last 2 version']}),
	cssnext,
	precss
    ];

    return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest/'));
});
