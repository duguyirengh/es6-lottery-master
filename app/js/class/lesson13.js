/*******************Promise***************************/
{
  // 异步编程方式：通过回调
  let ajax=function(callback){
    console.log('执行');
    setTimeout(function () {
      callback&&callback.call()
    }, 1000);
  };
  ajax(function(){
    console.log('timeout1');
  })
}

{
  // 一个promise
  let ajax=function(){
    console.log("执行");
    // resolve表示下一步操作,reject表示终止当前操作
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },5000);
    });
  }

  //Promise的实例有一个then方法，表示下一步要执行的操作。then方法有两个参数，都是匿名函数，
  //分别对应于resolve和reject，一般只写resolve
  ajax().then(function(){
    console.log('执行完成');
  })
}

{
  //多个promise，形成串联
  let ajax=function(){
    console.log("执行0");
    // resolve表示下一步操作,reject表示终止当前操作
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },1000);
    });
  }

  ajax().then(function(){
    console.log("执行1");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },2000);
    });
  }).then(function(){
    console.log("执行2");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },2000);
    });
  }).then(function(){
    console.log("执行完成");
  });
}

{
  //如果出错了，则可以捕获异常
  let ajax=function(num){
    console.log("num"+num);
    return new Promise(function(resolve,reject){
      if(num>5){
        resolve();
      }else{
        throw new Error(`出错了,${num}不是大于5的`);
      }
    });
  }
  
  //正常执行下一步
  ajax(6).then(function(){
    console.log('log',6);
  }).catch(function(err){
    console.log('catch',err);
  })

  //抛出错误
  ajax(3).then(function(){
    console.log('log',3);
  }).catch(function(err){
    console.log('catch',err);
  })
}

{
  //功能：所有的图片都加载完后再添加到页面里
  
  //加载图片
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      //图片加载完后
      img.onload=function(){
          resolve(img);
      }
      //图片加载失败
      img.onerror=function(err){
          reject(err);
      }
    });
  }
  
  //展示图片
  function showImgs(imgs){
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }
  
  //Promise.all([])  意思是把多个promise实例当成一个promise实例,当这些实例的状态都发生改变时
  //才会返回一个新的promise实例，才会执行then方法
  Promise.all([
    loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    loadImg("https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/imgad/pic/item/6f061d950a7b0208b8265dea6ad9f2d3562cc8ca.jpg"),
    loadImg("https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/imgad/pic/item/9f510fb30f2442a750999faed943ad4bd1130221.jpg")
  ]).then(showImgs);

}

{
  //功能：三张图片，只加载最先被加载的，先到先得
  
  //加载图片
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      //图片加载完后
      img.onload=function(){
          resolve(img);
      }
      //图片加载失败
      img.onerror=function(err){
          reject(err);
      }
    });
  }

  //展示图片
  function showImg(img){
     let p=document.createElement("p");
     p.appendChild(img);
     document.body.appendChild(p);
  }
  
  //只加载最先完成的
  Promise.race([
    loadImg("http://i4.buimg.com/567571/df1ef0720bea6832.png"),
    loadImg("https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/imgad/pic/item/6f061d950a7b0208b8265dea6ad9f2d3562cc8ca.jpg"),
    loadImg("https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/imgad/pic/item/9f510fb30f2442a750999faed943ad4bd1130221.jpg")
  ]).then(showImg);

}