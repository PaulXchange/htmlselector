var gulp = require('gulp');
var webserver = require('gulp-webserver');



gulp.task('watch', function(){
	gulp.watch('./', ['css']);
	gulp.watch(['./'], ['html']);
});

gulp.task('webserver', function(){
	gulp.src('./')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('default', ['watch', 'webserver']);

