{
  /********************set和map数据结构****************/
  //set数据类型，类似于集合，里面的元素不会重复
  let list = new Set();
  list.add(5); //利用add()方法往set里添加元素
  list.add(7);

  console.log('size',list.size);   //2，元素的数量
}

{
  //另一种为set赋值的方法，即直接往参数里传一个数组
  let arr = [1,2,3,4,5];
  let list = new Set(arr);  //直接往参数里传一个数组

  console.log('size',list.size); //5
}

{

  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);  //没有添加成功

  console.log('list',list); // list Set
  
  //利用set来去重
  //转换时不会做数据类型的转换，如'2'和2就是不一样的
  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);  

  console.log('unique',list2);  // unique Set
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);
  //判断是否有某个元素
  console.log('has',list.has('add')); // has true
  //删除元素
  console.log('delete',list.delete('add'),list);// delete true Set {"delete", "clear", "has"}
  list.clear(); //清空元素
  console.log('list',list);  // list Set {}
}

{
  // set的遍历
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);
  
  //利用keys()来获取key
  for(let key of list.keys()){
    console.log('keys',key);
  }
  //利用values()来获取value
  for(let value of list.values()){
    console.log('value',value);
  }
  //利用entries()来获取key和value
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }
  //直接遍历list
  for(let value of list){
    console.log('list',value);
  }
  //利用forEach遍历
  list.forEach(function(item){console.log(item);})
}


{
  // WeakSet和Set的区别：
  // 1:支持的数据类型不一样,WeakSet的元素只能是对象
  // 2:WeakSet的元素对象是个弱引用,只是个地址,不会检测这个地址是否被垃圾回收机制回收掉了
  // 3:没有size属性，也不能使用clear
  // 4:无法遍历
  let weakList=new WeakSet();

  let arg={};

  weakList.add(arg);

  // weakList.add(2);  //无法添加

  console.log('weakList',weakList); // weakList WeakSet {Object {}}
}

{
  //Map是特殊的对象，其中的key可以是任何数据类型！
  let map = new Map();
  let arr=['123'];

  map.set(arr,456);  // 添加元素，key为arr数组，值为456

  console.log('map',map,map.get(arr)); // map Map {["123"] => 456} 456
}

{
  //也可以通过传参的方式，其参数是一个数组，数组的每个元素也是数组
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map); // map args Map {"a" => 123, "b" => 456}
  console.log('size',map.size); // size 2
  console.log('delete',map.delete('a'),map); // delete true Map {"b" => 456}
  console.log('clear',map.clear(),map); // clear undefined Map {}

  //Map的遍历和Set的一样
}

{
  // WeakMap和Map的区别：
  // 1:支持的数据类型不一样,WeakMap的元素只能是对象
  // 2:WeakMap的元素对象是个弱引用,只是个地址,不会检测这个地址是否被垃圾回收机制回收掉了
  // 3:没有size属性，也不能使用clear
  // 4:无法遍历
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));  // 123
}


{
  //数据结构横向对比，map和数组的对比，增删改查
  let map=new Map();
  let array=[];
  //增
  map.set('a',1);
  array.push({'a':1});
  console.log('map-array-insert',map,array); // map-array Map {"a" => 1} [Object]
  //查
  let map_exist=map.has('a');
  let array_exist=array.find(item=>item.a);  //返回item.a
  console.log('map-array-exist',map_exist,array_exist);//map-array-exist true Object {a: 1}
  //改
  map.set('a',2);
  array.forEach(item=>item.a?item.a=2:'');//遍历每个item，判断key为a的item是否存在，存在则改
  console.log('map-array-update',map,array); 
  //删
  map.delete('a');
  let index=array.findIndex(item=>item.a);
  array.splice(index,1);
  console.log('map-array-delete',map,array); // map-array-delete Map {} []
}

{
  //数据结构横向对比，Set和数组的对比，增删改查
  let set=new Set();
  let arr=[];

  //增
  set.add({t:1});
  arr.push({t:1});
  console.log('set-array-insert',set,arr); //set-array-insert Set {Object {t: 1}} [Object]

  //查
  let set_exist=set.has({t:1});
  let arr_exist=arr.find(item=>item.t);  //返回item.a
  console.log('set-array-exist',set_exist,arr_exist);//set-array-exist false Object {t: 1}

  //改
  set.forEach(item=>item.t?item.t=2:'');
  arr.forEach(item=>item.t?item.t=2:'');//遍历每个item，判断key为a的item是否存在，存在则改
  console.log('set-array-update',set,arr);  //set-array-update Set {Object {t: 2}} [Object]

  //删
  set.forEach(item=>item.t?set.delete(item):'');
  let index=arr.findIndex(item=>item.t);
  arr.splice(index,1);
  console.log('set-array-delete',set,arr); // set-array-delete Set {} []

}

{
  // set,map,object对比
  let item={t:1};
  let set=new Set();
  let map=new Map();
  let obj={};
  
  //增
  set.add(item);
  map.set('t',1);
  obj['t']=1;
  console.log("set-map-obj",set,map,obj);//set-map-obj Set {Object {t: 1}} Map {"t" => 1} Object {t: 1}

  //查
  console.log({
    'set-exist':set.has(item),
    'map-exist':map.has('t'),
    'obj-exist':'t' in obj
  });  // Object {set-exist: true, map-exist: true, obj-exist: true}

  //改
  item.t=2; //set元素的修改，因为存储的是地址
  map.set('t',2);
  obj['t']=2;
  console.log("set-map-obj-update",set,map,obj); // set-map-obj-update Set {Object {t: 2}} Map {"t" => 2} Object {t: 2}
  
  //删
  set.delete(item);
  map.delete('t');
  delete obj['t'];
  console.log("set-map-obj-delete",set,map,obj); // set-map-obj-delete Set {} Map {} Object {}
}

//总结：优先使用map，能使用map就使用map，不使用数组，object。
//考虑数据存储的唯一性，则使用set。