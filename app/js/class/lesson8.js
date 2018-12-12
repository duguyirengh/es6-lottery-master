{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={  //当属性名和属性值的变量名相同时才可以这么写
    o,
    k
  };
  console.log(es5,es6); // Object {o: 1, k: 2} Object {o: 1, k: 2}

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello()); // hello  hello
}

{
  // 属性表达式，属性可以是一个变量，但要用[]包起来以区分
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj); // Object {a: "c", b: "c"} Object {b: "c"}

}

{
  // 新增API
  // Object.is用于比较两个元素是否全等，等同于===
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc'); // 字符串 true true
  console.log('数组',Object.is([],[]),[]===[]); // 数组 false false
  
  // Object.assign，对象浅拷贝，只是把引用地址拷贝一下
  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); // 拷贝 Object {a: "a", b: "b"}
  
  // Object.entries,取得对象的key和value
  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);  // ["k", 123]  ["o", 456]
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // 等价于
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
