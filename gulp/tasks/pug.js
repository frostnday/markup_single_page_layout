var gulp = require("gulp");
var pug = require("gulp-pug");
var plumber = require("gulp-plumber");
var config = require('../config').pug;

gulp.task("pug", function(){
  gulp.src(config.src)
      .pipe(plumber()) // エラーが発生しても処理を継続
      .pipe(pug(config.options))
      .pipe(gulp.dest(config.dest));
});

gulp.task("pug_watch", function(){
  gulp.watch('./src/pug/*.pug', ['pug']);
})

gulp.task('default', ['pug']);