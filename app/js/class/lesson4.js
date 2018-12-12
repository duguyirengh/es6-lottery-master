{
  console.log('a',`\u0061`); // a a
  console.log('s',`\u20BB7`); // s ₻7   大于两个字节的字符输出不来
  //用{}将unicode包起来
  console.log('s',`\u{20BB7}`);  //s 𠮷
}

{
  // es5的方法
  let s='𠮷'; // 𠮷有四个字节
  console.log('length',s.length);  // length 2
  console.log('0',s.charAt(0)); // 0  ，取不出字符
  console.log('1',s.charAt(1));  // 1 ，取不出字符
  console.log('at0',s.charCodeAt(0));  // at0 55362, 取的前两个字节的码值
  console.log('at1',s.charCodeAt(1));  // at1 57271, 取的后两个字节的码值
  
  //es6的方法
  let s1='𠮷a';  // 𠮷有四个字节
  console.log('length',s1.length); // length 3
  console.log('code0',s1.codePointAt(0));  // code0 134071，10进制的格式，取的四个字节的码值
  console.log('code0',s1.codePointAt(0).toString(16)); // code0 20bb7, 16进制的格式
  console.log('code1',s1.codePointAt(1)); // code1 57271，取𠮷的后两个字节的码值
  console.log('code2',s1.codePointAt(2));  // code2 97
}


{
  //从unicode转换成字符
  console.log(String.fromCharCode("0x20bb7"));  //  ஷ  
  console.log(String.fromCodePoint("0x20bb7"));  //  𠮷，能提取大于两个字节的字符
}

{
  //字符串的遍历
  let str='\u{20bb7}abc';
  // es5的方法
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  // es5结果:
  // es5 
  // es5 
  // es5 a
  // es5 b
  // es5 c
  
  // es6的方法，比较常用
  for(let code of str){
    console.log('es6',code);
  }
  // es6结果:
  // es6 𠮷
  // es6 a
  // es6 b
  // es6 c
  
}

{
  //判断字符串是否包含某个字符，以及是否以什么开始、结束
  let str="string";
  console.log('includes',str.includes("c"));  // includes false
  console.log('start',str.startsWith('str'));  // start true
  console.log('end',str.endsWith('ng'));  // end true
}


{  
  //重复输出
  let str="abc";
  console.log(str.repeat(2));  // abcabc
}

{
  //模板字符串，很重要
  let name="list";
  let info="hello world";
  let m=`i am ${name},${info}`;  // 数据项移动要用${}包起来，然后要用反引号
  console.log(m);
}


{
  //补白的作用，很有用
  console.log('1'.padStart(2,'0'));  //01 ，向前补白
  console.log('1'.padEnd(2,'0'));  // 10，向后补白
} 


{  //标签模板,比如在过滤的时候，非常有用
  let user={
    name:'list',
    info:'hello world'
  };
  console.log(abc`i am ${user.name},${user.info}`);
  // 上面打印出的结果就是abc函数的结果
  function abc(s,v1,v2){
    // console.log(s);  // ["i am ", ",", "", raw: Array[3]]，是一个数组
    // console.log(v1);  // list
    // console.log(v2);  // hello world
    return s+v1+v2; // i am ,,,listhello world
  }
}

{
  //  String.raw会对\开头的转义
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
