{
  // Array.of() 把一组参数转换成一个数组
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr); // arr= Array[5]

  let empty=Array.of();  //如果不传参数，则会得到一个空数组
  console.log('empty',empty);  // empty []
}

{
  // Array.from()可以将一个集合转换成数组
  let p=document.querySelectorAll('p');
  console.log('集合',p);   //节点集合
  let pArr=Array.from(p);  //节点数组
  console.log('数组',pArr); //节点数组
  pArr.forEach(function(item){
    console.log(item.textContent);
  });

  // Array.from() 传第二个参数可以将数组的每个元素进行某种映射
  console.log(Array.from([1,3,5],function(item){return item*2}));  // [2, 6, 10]
}

{
  // .fill()可以将数组的元素替换掉，只传一个参数表示全部替换掉
  console.log('fill-7',[1,'a',undefined].fill(7));  // fill-7 [7, 7, 7]
  console.log('fill,pos',['a','b','c'].fill(7,1,2)); // fill,pos ["a", 7, "c"]
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); // fill,pos ["a", 7, 7]
  //上面.filll(7,1,3)意思是从第一个位置开始替换，直到第3个位置，但不把第三个位置上的数替换掉
}

{
  //与遍历有关的， 数组遍历用for(let a of arr)
  //.keys()取键， .values()取值，entries()既取键也取值
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);  // 0 1 2
  }
  for(let value of ['1','c','ks'].values()){
    console.log('values',value); // 1 c ks
  }
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

{
  // 0表示从第0个位置开始替换，用第3个位置到第4个位置之间的数替换
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // [4, 2, 3, 4, 5]
}

{
  //找出第一个大于3的数
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));  // 4
  //找出第一个大于3的数的下标
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));  // 3
}

{
  //是否包含某个数，可以为NaN。包含则返回true，否则为false
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
