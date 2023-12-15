const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'))
const connect = require('gulp-connect')
const image = require('gulp-imagemin');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('pug', function () {
  return gulp.src('src/pug/*.pug').pipe(pug()).pipe(gulp.dest('dist'))
})

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss').pipe(sass()).pipe(gulp.dest('dist'))
})

gulp.task('server', function () {
  connect.server({
    root: 'dist',
    livereload: true,
  })
})

gulp.task('build-images', () =>
  gulp
    .src([`src/assets/img/*.{jpg,jpeg,png,svg}`])
    .pipe(image())
    .pipe(gulp.dest('dist/img'))
);

gulp.task('fonts', function () {
  return gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('reload', function () {
  return gulp.src('dist/*')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/pug/*.pug', gulp.series('pug','reload'))
  gulp.watch('src/scss/**/*.scss', gulp.series('sass','reload'))
  gulp.watch('src/js/*.js', gulp.series('js','reload'))
  gulp.watch('src/assets/img/*.{jpg,jpeg,png,svg}', gulp.series('build-images','reload'))
})

gulp.task('default', gulp.series('build-images', gulp.parallel('pug', 'sass', 'js', 'server', 'watch', 'fonts')))