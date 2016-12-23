"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect');	// dev-server
var open = require('gulp-open');	// open URL in browser
var browserify = require('browserify'); 	// bundles JS files
var reactify = require('reactify');	// converts JSX to JS
var source = require('vinyl-source-stream');	//Use conventional text streams with Gulp
var concat = require('gulp-concat'); 	// concat files
var lint = require('gulp-eslint');	// lints JS, JSX

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html:'./src/*.html',
		js:'./src/**/*.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
    images: './src/images/*',
		dist:'./dist',
		MainJs:'./src/main.js'
	}

}

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});
 
gulp.task('open', ['connect'],function () {
  gulp.src('dist/index.html')
    .pipe(open('',{url:config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
  	.pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify(config.paths.MainJs)
  	.transform(reactify)
  	.bundle()
  	.on('error', console.error.bind(console))
  	.pipe(source('bundle.js'))
  	.pipe(gulp.dest(config.paths.dist +'/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
  	.pipe(concat('bundle.css'))
  	.pipe(gulp.dest(config.paths.dist +'/css'));
   
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist +'/images'))
    .pipe(connect.reload());

    gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist ));
});

gulp.task('lint', function(){
	return gulp.src('config.paths.js')
		.pipe(lint({config:'eslint.config.json'}))
		.pipe(lint.format());
});
 
gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js','lint']);
});
 
gulp.task('default', ['html', 'js','css','images','lint', 'open', 'watch']);