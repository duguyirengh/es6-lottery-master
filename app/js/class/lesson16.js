/******************decorator***********************/
// 修饰器就是一个函数，用来修改类的行为。
// 需要babel导入下面的插件才能使用decorator：babel-plugin-transform-decorators-legacy

{
  //定义一个decorator函数，target是要修改的类，name是要修改的类的属性名称，
  //descriptor是这个属性的描述，是一个对象
  let readonly=function(target,name,descriptor){
    console.log(descriptor); 
    // Object {writable: true, enumerable: false, configurable: true,value:function(){}}
    descriptor.writable=false; //设置这个属性不可写
    return descriptor
  };

  class Test{
    @readonly 
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();
  
  // 下面的会报错
  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());  //2017-03-11
}

{
  let typename=function(target,name,descriptor){
    target.myname='hello';  //设置类的属性
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);  // 类修饰符 hello
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  //这里之所以要用箭头函数，是因为要接收@log的参数
  let log=(type)=>{
    return function(target,name,descriptor){
      console.log(descriptor); 
      // Object {writable: true, enumerable: false, configurable: true,value:function(){}}
      
      let src_method=descriptor.value; //获取被修饰的方法
      console.log(src_method);  
      // show(){
      //   console.info('ad is show');
      // }
       
      //修改方法的行为
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show');
    }
    @log('click')
    click(){
      console.info('ad is click');
    } 
  }

  let ad=new AD();
  ad.show();
  ad.click();
}