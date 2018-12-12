import 'babel-polyfill';
import Lottery from './lottery';  //引入彩票的入口文件

const syy=new Lottery();

//测试es6的功能
//import './class/lesson16.js'

/*******导入模块****/
// 1. 对应lesson17.js里的第一种导出方法
// 导入指定的内容
// import {A,test,Hello} from './class/lesson17.js'  
// console.log(A,test,Hello)

// 只导入A
// import {A} from './class/lesson17.js'  
// console.log(A)

// 全部导入
// import * as lesson17 from './class/lesson17.js'   //取别名，可以任意
// console.log(lesson17.A,lesson17.test)

// 2.对应lesson17.js里的第二种导出方法
// import lesson17 from './class/lesson17.js'   //这里的lesson17 也是任意起的名字
// console.log(lesson17.A,lesson17.test)