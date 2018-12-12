import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// 创建css的任务，将CSS拷贝到服务器目录下
gulp.task('css',()=>{
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))

})
