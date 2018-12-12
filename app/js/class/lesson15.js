/********************genertaor*********************************/
// Generator也是异步编程的一种解决方案。比promise更高级。
/*
{

  let tell=function* (){  // function加*
      yield 'a';
      yield 'b';
      return 'c';
  }
  let k=tell();  //调用tell时遇到yield会停下来
  //调用next时会执行第一个yield
  console.log(k.next()); // Object {value: "a", done: false}
  console.log(k.next()); // Object {value: "b", done: false}
  console.log(k.next()); // Object {value: "c", done: true}
  console.log(k.next()); // Object {value: "undefined", done: true}
  //Generator返回的就是一个Iterator接口
}

{
  // 让对象也可以遍历，Generator就是一个遍历器生成函数
  let obj={};
  obj[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
  }

  for(let value of obj){
    console.log('value',value);  
    // value 1
    // value 2
    // value 3
  }
}

{
  //状态机，只存在三种状态(A,B,C)   (A->B->C->A->B....一直循环)
   let state=function* (){
    while(1){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status=state();
  console.log(status.next()); // Object {value: "A", done: false}                    
  console.log(status.next()); // Object {value: "B", done: false}
  console.log(status.next()); // Object {value: "C", done: false}
  console.log(status.next()); // Object {value: "A", done: false}
  console.log(status.next()); // Object {value: "B", done: false}
}


// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
    //功能:实现前端抽奖次数的限制
    
    //具体抽奖的逻辑
    let draw=function(count){
      //这里写具体的抽奖逻辑
      console.info(`剩余${count}次`);
    }
    
    //次数减1
    let reduice=function* (count){
      while(count>0){
        count--;
        yield draw(count);
      }
    }
    
    //开始抽奖
    let start=reduice(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent="抽奖";
    document.body.appendChild(btn);
    document.getElementById("start").addEventListener('click',function(){
        start.next();
    },false);
}
*/

{
  //长轮询
  let ajax=function* (){
    yield new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({code:0});
        },2000);
    });
  }

  let pull=function(){
    let genertaor=ajax();
    let step=genertaor.next();
    step.value.then(function(d){  //这里的d就是上面的{code:0}
      if(d.code!=0){
        setTimeout(function(){
           console.log('wait');
           pull(); 
        });
      }else{
        console.log(d);
      }
    })
  }

  pull();
}