/******************模块化***************************/
//第一种导出方法
export let A=123;

export function test(){
  console.log('test');
}

export class Hello{
  test(){
    console.log('class');
  }
}


//第二种导出方法

let A=123;
let test=function(){
  console.log('test');
}
class Hello{
  test(){
    console.log('class');
  }
}

//default 不用取名字都行，这种方法更好
export default {
  A,
  test,
  Hello
}

// 其它文件导入这个文件的模块用 import {A,test,Hello} from "lesson17.js"