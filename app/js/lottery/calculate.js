//金额计算模块
class Calculate{
  /**
   * [computeCount 计算注数]
   * @param  {number} active    [当前选中的号码的个数]
   * @param  {string} play_name [当前的玩法标识,如R2,即任二]
   * @return {number}           [注数]
   */
  computeCount(active,play_name){
    let count=0;
    const exist=this.play_list.has(play_name); //判断玩法列表里面是否有这样的玩法,set形式
    const arr=new Array(active).fill('0'); //生成长度为active的数组，并填充为0
    if(exist && play_name.at(0)==='r'){
      count=Calculate.combine(arr,play_name.split('')[1]).length;
    }
    return count;
  }

 /**
   * [computeBonus 奖金范围预测]
   * @param  {number} active    [当前选中的号码个数]
   * @param  {string} play_name [当前的玩法标识,如R2,即任二]
   * @return {[type]}           [奖金范围]
   */
  computeBonus(active,play_name){
    const play=play_name.split(''); //得到当前玩法,例如R2
    const self=this;
    let arr=new Array(play[1]*1).fill(0);
    let min,max;
    if(play[0]==='r'){
      let min_active=5-(11-active);   //最小命中数
      if(min_active>0){
        if(min_active-play[1]>=0){
          arr=new Array(min_active).fill(0);
          min=Calculate.combine(arr,play[1]).length;
        }else{
          if(play[1]-5>0&&active-play[1]>=0){ //任五以上，并且多选了注数
            arr=new Array(active-5).fill(0);
            min=Calculate.combine(arr,play[1]-5).length;
          }else{
            min=active-play[1]>-1?1:0
          }
        }
      }else{
        min=active-play[1]>-1?1:0;
      }

      let max_active=Math.min(active,5);
      if(play[1]-5>0){   //任五以上
        if(active-play[1]>=0){
          arr=new Array(active-5).fill(0);
          max=Calculate.combine(arr,play[1]-5).length;
        }else{
          max=0;
        }
      }else if(play[1]-5<0){ //任五以下
        arr=new Array(Math.min(active,5)).fill(0);
        max=Calculate.combine(arr,play[1]).length;
      }else{ //任五
        max=1;
      }
    }
    return [min,max].map(item=>item*self.play_list.get(play_name).bonus) //返回金额范围
  }

 /**
   * [combine 组合运算 C(m,n)]  
   * 计算注数:选了5个,如果是任二,则注数为C(2,5),如果是任三,则注数为C(3,5)
   * @param  {array} arr  [参与组合运算的数组]
   * @param  {number} size [组合运算的基数]
   * @return {[type]}      [计算注数]
   */
  static combine(arr,size){ // arr=[1,2,3,4,5]   size=3
    let allResult=[];
    (function f(arr,size,result){
      let arrLen=arr.length;
      if(size>arrLen){
        return;
      }
      if(size===arrLen){
        allResult.push([].concat(result,arr))  //组合元素的子集
      }else{
        for(let i=0;i<arrLen;i++){
          let newResult=[].concat(result);
          newResult.push(arr[i]);
          if(size===1){
            allResult.push(newResult)
          }else{
            let newArr=[].concat(arr);
            newArr.splice(0,i+1);
            f(newArr,size-1,newResult);   //这里不能用argument.callee
          }
        }
      }

    })(arr,size,[])
    return allResult
  }

}

export default Calculate
