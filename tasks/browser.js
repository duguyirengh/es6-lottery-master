import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

// 当app下的资源文件改变时，自动重新编译，再生成到server下
gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']);  // 当js改变时，会执行scripts任务
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
