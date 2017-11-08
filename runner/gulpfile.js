var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

//var minifyCSS = require('gulp-csso');

gulp.task('pug', function() {
   return gulp.src('../source/pug/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('../dev/'))	
  .pipe(gulp.dest('../prod/'))	
});

gulp.task('sass', function(){
  return gulp.src('../source/scss/*.scss')
    .pipe(sass())
   // .pipe(minifyCSS())
    .pipe(gulp.dest('../dev/css'))
    .pipe(gulp.dest('../prod/css'))
});

gulp.task('js', function(){
  return gulp.src('../source/js/*')
  .pipe(gulp.dest('../dev/js'))
  .pipe(gulp.dest('../prod/js'))
});

gulp.task('images', () =>
    gulp.src('../source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../dev/img'))
        .pipe(gulp.dest('../prod/img'))
);

gulp.task('fonts', function(){
  return gulp.src('../source/fonts/*')
  .pipe(gulp.dest('../dev/fonts'))
  .pipe(gulp.dest('../prod/fonts'))
});


gulp.task('default', ['pug', 'sass', 'js', 'images', 'fonts']);
