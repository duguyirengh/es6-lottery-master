import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建处理模板文件的任务，将模板拷贝到服务器目录下
gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs')   // **是指所有目录层级
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))  //监听更新
})
