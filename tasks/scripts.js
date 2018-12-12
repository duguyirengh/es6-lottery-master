import gulp from 'gulp';
import gulpif from 'gulp-if'; // gulp语句里作if判断
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';  // gulp是基于文件流的，所以webpack打包时需要这个
import named from 'vinyl-named';  //文件重命名
import livereload from 'gulp-livereload'; //代码自动更新
import plumber from 'gulp-plumber';  //管道拼接的包
import rename from 'gulp-rename';   //文件重命名
import uglify from 'gulp-uglify';  // 压缩包
import {log,colors} from 'gulp-util';
import args from './util/args';  //命令行参数解析的包

//创建脚本任务，完成压缩，自动刷新等功能
gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({   // 重命名
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))  //压缩
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))   // 自动刷新
})
