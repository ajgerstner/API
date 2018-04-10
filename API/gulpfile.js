var gulp = require('gulp')
var sass= require('gulp-sass')

gulp.task('default',function(){
    
})

//command gulp scss

gulp.task('scss',function(){
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
})

//command gulp watch

gulp.task('watch',function(){
    gulp.watch('./scss/*.scss',['scss'])
})