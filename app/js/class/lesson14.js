/*******************Iterator**************************/
{
  let arr=['hello','world'];
  let map=arr[Symbol.iterator](); // 数组内部已经实现了Symbol.iterator接口，
  //arr[Symbol.iterator]会返回一个遍历的函数,再()一下执行这个函数,会返回一个对象
  console.log(arr[Symbol.iterator]);  // function values() { [native code] }
  // map.next()先返回第一个值，如果还有下一个值，则done为false
  console.log(map.next());  //Object {value: "hello", done: false}
  // map.next()再返回第二个值，如果还有下一个值，则done为false
  console.log(map.next());  //Object {value: "world", done: false}
  // map.next()已经没有下一个值了，done为true，表示已完成
  console.log(map.next());  //Object {value: undefined, done: true}
}

{
  //自定义iterator接口，以便可以用for...of循环
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end); //先将这两个数组连接起来
      let len=arr.length;
      return {   //返回一个对象，这个对象有next()方法，next()方法又返回一个对象
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  for(let key of obj){
    console.log(key); // 1 3 2 7 9 8
  }
}

{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}