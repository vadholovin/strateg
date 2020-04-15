/**
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
const gulp = require('gulp');
const { series, parallel } = require('gulp');

// Tasks
const { reload, serve } = require('./server');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const { templates } = require('./templates');
const { assets } = require('./assets');
const { copy } = require('./copy');

// Config
const { paths } = require('../config');

function watch(cb) {
  gulp.watch([paths.styles.watch, paths.styles.modules, paths.styles.templates], series(styles));
  gulp.watch([paths.scripts.watch, paths.scripts.modules], series(scripts, reload));
  gulp.watch([paths.templates.watch, paths.templates.modules], series(templates, reload));
  gulp.watch(paths.assets.src, series(assets, reload));
  gulp.watch(paths.copy.src, series(copy, reload));
  cb();
}

exports.watch = series(
  serve,
  watch
);
