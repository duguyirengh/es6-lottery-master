  //Symbol是ES6新增的数据类型，这种数据类型提供独一无二的值
{
  // 声明
  let a1=Symbol(); //生成独一无二的变量a1
  let a2=Symbol(); //生成独一无二的变量a2
  console.log(a1===a2);  // false
  let a3=Symbol.for('a3');  // 为变量a3取个key值为a3
  let a4=Symbol.for('a3');  // 为变量a4取个key值为a3
  console.log(a3===a4);  // true
}

{
  // 用Symbol解决对象属性名冲突的问题
  let a1=Symbol.for('abc');
  console.log(a1);   //  Symbol(abc)

  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj); // obj Object {abc: 345, c: 456, Symbol(abc): "123"}

  //用这种遍历方法取不到Symbol的属性
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value); //let of abc 345   let of c 456
  }
  
  //只获取Symbol属性
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(item,obj[item]);   // Symbol(abc) "123"
  })

  //必须要用这种方式遍历，才能获取包括了Symbol的所有属性
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
    // ownkeys abc 345
    // ownkeys c 456
    // ownkeys Symbol(abc) 123
  })
}
