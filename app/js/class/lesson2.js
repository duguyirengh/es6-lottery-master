{
  let a,b,rest;
  [a,b]=[1,2];  //数组解构赋值，等同于将1赋给a, 2赋给b
  console.log(a,b); // 1,2
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];  // 将1赋给a,2赋给b,3~6赋给rest
  console.log(a,b,rest); // 1,2,[3,4,5,6]   即rest是一个数组
}

{
  let a,b;
  ({a,b}={a:1,b:2})  //对象解构赋值,注意{a:1,b:2}这里面必须是a,b
  console.log(a,b);  // 1,2
}

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];   
  // c取默认值3,如果不写c=3，而是只写c，那么就只定义而未初始化
  //只要是没有配对成功，都会undefined
  console.log(a,b,c);  // 1,2,3
}

{
  let a=1;
  let b=2;
  [a,b]=[b,a]; //解构赋值的运用，值的交换
  console.log(a,b); // 2,1
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();  // 将函数的返回值解构赋值給a,b
  console.log(a,b);   // 1,2
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();  // 隔了两个不取
  console.log(a,b);   // 1,4
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();  //隔了一个不取，后面的赋给b
  console.log(a,b);  // 1,[3,4,5]
}

{
  let o={p:42,q:true};
  let {p,q}=o;   //对象解构赋值，左右都是对象，按照key-value的形式赋值
  console.log(p,q);  // 42,true
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);  //3,5
}

{
  let metaData={ 
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData; //json格式的解构赋值，特别常用
  console.log(esTitle,cnTitle); // abc,test
}