const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

//compile sass - the most important!!
gulp.task('sass', ()=> {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


//watch and serve
gulp.task('serve', ['sass'], ()=> {
    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


// Default Task
gulp.task('default', ['serve']);