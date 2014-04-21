var gulp		= require('gulp'),
	gutil		= require('gulp-util'),
	compass		= require('gulp-compass'),
	watch		= require('gulp-watch'),
	notify		= require('gulp-notify');


gulp.task( 'compass', function() {
	gulp.src('scss/**/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'css',
			sass: 'scss'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('css'))
		.pipe(notify({ message: 'Compass task complete.' }));
});

gulp.task( 'default', ['compass', 'watch'] );

gulp.task( 'watch', function() {
	gulp.watch('scss/**/*.scss', function() {
		gulp.run('compass');
	});
});