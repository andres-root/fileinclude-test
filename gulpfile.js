'use strict';

var fileinclude = require('gulp-file-include');


gulp.task('build-html', function() {
  return gulp.src( "./components/**/*.html" )
    .pipe(fileinclude())
    .pipe(gulp.dest( "./" ));
});
