import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; //启动一个脚本作为服务器
import args from './util/args';

//创建服务器的任务
gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();  //如果不是处于监听状态，则直接执行回调函数

  var server = liveserver.new(['--harmony','server/bin/www']); //创建服务器
  server.start();   // 启动服务器

  //监听服务器下的资源文件
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);  //把改动告诉服务器
  })

  //监听路由文件、服务器启动入口文件
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)();   //有改变时，重启服务器
  });
})
