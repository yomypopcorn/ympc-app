var gulp = require('gulp');
var bistre = require('bistre');
var nodemon = require('gulp-nodemon');
var jsx = require('gulp-react');
var babel = require('gulp-babel');

gulp.task('nodemon', function () {
  process.env.NODE_ENV = 'dev';

  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: [
      'node_modules/'
    ],
    stdout: false,
  })
  .on('readable', function () {
    this.stdout
      .pipe(bistre({time: true}))
      .pipe(process.stdout);

    this.stderr
      .pipe(bistre({time: true}))
      .pipe(process.stderr);
  });
});

gulp.task('jsx', function() {
  return gulp.src('frontend/*.jsx')
    .pipe(jsx())
    .pipe(babel())
    .pipe(gulp.dest('static/js'));
});

gulp.task('dev', [ 'nodemon' ]);
