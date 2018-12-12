{
  //默认参数，注意：默认值变量后面不能有非默认值变量
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');  // 默认值 hello world
  test('hello','kill'); // 默认值 hello kill
}

{
  //作用域
  let x='test';
  function test2(x,y=x){  //这里的y取的是参数里的x的值
    console.log('作用域',x,y);
  }
  test2('kill');  // 作用域 kill kill
}

{
  // rest参数，即... ，在不确定参数的个数时，会把所有参数转成一个数组
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  // 扩展运算符... 会把一个数组转成一些离散的值，与rest的作用相反
  console.log(...[1,2,4]);  // 1 2 4
  console.log('a',...[1,2,4]);  // a 1 2 4
}

{
  // 箭头函数
  let arrow = v => v*2; // 一个参数，则直接参数名称，多个参数要用()
  let arrow2 = () => 5; //如果没有参数，则写()
  console.log('arrow',arrow(3));  // arrow 6
  console.log(arrow2()); // 5
}

{
  // 尾调用,就是指某个函数的最后一步是调用另一个函数。尾调用不一定出现在函数尾部，
  // 只要是最后一步操作即可。注意：只能是最后一步，只能是return tail(x)
  // 我们称tail()是尾调用
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123) // tail 123
}
