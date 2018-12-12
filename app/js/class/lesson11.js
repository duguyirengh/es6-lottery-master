/*****************代理和反射**********************/

{ //代理就是用户和真实供应商之间不能直接联系，只能通过代理来实现

  //供应商
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };
  
  //代理商，对用户而言，是直接操作monitor对象，而不是原始供应商obj
  //new Proxy()第一个参数是要代理的对象，第二个参数是具体的要代理的逻辑
  let monitor=new Proxy(obj,{
    // 拦截对象属性的读取,get方法的第一个参数是target
    get(target,key){
      return target[key].replace('2017','2018')
    },
    // 拦截对象设置属性
    set(target,key,value){
      if(key==='name'){   //只能修改name属性
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target,key){
      if(key==='name'){   //只暴露name属性
        return target[key]
      }else{
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){  //只能删除带_的属性
        delete target[key];
        return true;
      }else{
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target){   //只能获取属性不为time的属性
      return Object.keys(target).filter(item=>item!='time')
    }
  });
  
  //读取
  console.log('get',monitor.time);
  
  //设置
  monitor.time='2018';
  monitor.name='mukewang';
  console.log('set',monitor.time,monitor);
  
  //has拦截
  console.log('has','name' in monitor,'time' in monitor);
  
  //删除
  delete monitor.time;
  console.log('delete',monitor);
  delete monitor._r;
  console.log('delete',monitor);

  //最后看key值是否还存在
  console.log('ownKeys',Object.keys(monitor));
}


{
  //反射
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get',Reflect.get(obj,'time')); // Reflect get 2017-03-11
  Reflect.set(obj,'name','mukewang');
  console.log(obj); // Object {time: "2017-03-11", name: "mukewang", _r: 123}
  console.log('has',Reflect.has(obj,'name'));  // has true
}

{
  /***********利用代理来实现业务解耦的功能**********/
  //验证函数
  function validator(target,validator) {
      return new Proxy(target,{
          _validator:validator,
          set(target,key,value,proxy){
            if(target.hasOwnProperty(key)){  //判断对象是否有这个key
                let va=this._validator[key];
                if(!!va(value)){  //先判断是否能赋值
                    return Reflect.set(target,key,value,proxy);
                }else{
                    throw Error(`不能设置${key}到${$value}`);
                }
            }else{
                throw Error(`${key} 不存在`);
            }
          }
      });
  }

  //设置校验条件
  const personValidators={
    name(val){
        return typeof val==='string';
    },
    age(val){
        return typeof val==='number'&&val>18;
    }
  }

  //person对象
  class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        return validator(this,personValidators);
    }
  }

  const person=new Person('zls',20);
  console.log(person);
  person.name=18;   //会报错
}