const gulp = require('gulp')
const  sass = require('gulp-sass')
 
 
function compilaSass(){
    return gulp.src('css/scss/*.scss')
    .pipe(sass())
 
    .pipe(gulp.dest('css/'))
}
 
gulp.task('sass',compilaSass);
 
function watch(){
    gulp.watch('css/scss/*.scss', compilaSass )
}
 
gulp.task('default', watch)
