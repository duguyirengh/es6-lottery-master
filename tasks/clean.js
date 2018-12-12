import gulp from 'gulp';
import del from 'del';
import args from './util/args';

// 清空服务器下的无效的资源文件
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
