var gulp = require('gulp');
var bistre = require('bistre');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');

var isProduction = process.env.NODE_ENV !== 'development';

var vendors = [
//  'react/addons',
  'moment',
  'axios',
  'immutable',
  'alt'
];

function handleError (err) {
  gutil.log(err);
  process.exit();
}

gulp.task('build:vendor', function () {
  var bundler = browserify({
    debug: !isProduction,
    require: vendors
  });

  function rebundle () {
    gutil.log('vendor rebundle...');

    var stream = bundler.bundle();

    return stream
      .on('error', function () {
      })
      .pipe(source('vendor.js'))
      .pipe(gulpif(isProduction, streamify(uglify())))
      .pipe(gulp.dest('static/assets'));
  }

  return rebundle();
});

function bundleApp (watch) {

  var bundler = browserify({
    entries: [ 'frontend/app.jsx' ],
    debug: !isProduction,
    extensions: [ '.jsx' ],
    fullPaths: false
  });

  bundler.transform(babelify);

  vendors.forEach(function (vendor) {
    bundler.external(vendor);
  });

  if (watch) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  function rebundle () {
    gutil.log('app rebundle...');

    var stream = bundler.bundle();

    return stream
      .on('error', handleError)
      .pipe(source('app.js'))
      .pipe(gulpif(isProduction, streamify(uglify())))
      .pipe(gulp.dest('static/assets'));
  }

  return rebundle();
}

gulp.task('nodemon', function () {
  process.env.NODE_ENV = 'dev';

  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: [
      'node_modules/',
      'static/',
      'frontend/',
      'gulpfile.js'
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

gulp.task('build:app', function () {
  return bundleApp(false);
});

gulp.task('watch:app', [ 'build:app' ], function () {
  return bundleApp(true);
});

gulp.task('build', [ 'build:vendor', 'build:app' ]);

gulp.task('dev', [ 'nodemon', 'watch:app' ]);
