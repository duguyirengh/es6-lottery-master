function test(){
  //let a = 2;
  // console.log(a);

  for(let i=1;i<3;i++){  //用let声明的变量只在自己的作用域内有效
    console.log(i);  // 分别打印出1,2
  }
  console.log(a);  // 报错
  
  //不允许重复声明一个变量，不然连编译都通不过
  // let a=1;
  // let a=2;
}

function last(){
  const PI=3.1415926;   //用const声明一个常量,该常量不可以被修改
  const k={
    a:1
  }
  k.b=3; //注意这里是可以修改的，因为对象返回的是一个指针，指针是不能改，但对象本身是可以改的
  console.log(PI,k);
}


//test();
last();
