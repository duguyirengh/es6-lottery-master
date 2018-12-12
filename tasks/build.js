import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//把最终的任务全部串联起来
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//注意server必须放到最后
//先清空服务器端无效的资源，再拷贝app下的css和模板到服务器下，再执行脚本任务。
//当app下的资源有变动时，及时更新资源到服务器，最后服务器再重启
