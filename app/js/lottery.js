// 模块的整合
import 'babel-polyfill';
import Base from './lottery/base.js';
import Timer from './lottery/timer.js';
import Calculate from './lottery/calculate.js';
import Interface from './lottery/interface.js';
import $ from 'jquery';

//深度拷贝
const copyProperties=function(target,source){
  for(let key of Reflect.ownKeys(source)){  //拿到源对象上的所有属性
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){  //过滤
      let desc=Object.getOwnPropertyDescriptor(source,key); // 获取指定对象的自身属性描述符
      Object.defineProperty(target,key,desc);
    }
  }
}

//多重继承函数
const mix=function(...mixins){
  class Mix{}  //声明一个空的类
  for(let mixin of mixins){
    copyProperties(Mix,mixin);  //深度拷贝
    copyProperties(Mix.prototype,mixin.prototype);  //也拷贝原型
  }
  return Mix
}

//多重继承
class Lottery extends mix(Base,Calculate,Interface,Timer){
  constructor(name='syy',cname='11选5',issue='**',state='**'){
    super();
    this.name=name;
    this.cname=cname;
    this.issue=issue;
    this.state=state;
    this.el='';
    this.omit=new Map();
    this.open_code=new Set();  //开奖号码
    this.open_code_list=new Set(); //开奖记录
    this.play_list=new Map();
    this.number=new Set();  //奖号
    this.issue_el='#curr_issue';
    this.countdown_el='#countdown'; //倒计时的选择器
    this.state_el='.state_el'; //状态的选择器
    this.cart_el='.codelist'; //购物车的选择器
    this.omit_el=''; //遗漏
    this.cur_play='r5'; //当前的默认玩法
    this.initPlayList();
    this.initNumber();
    this.updateState(); //更新状态
    this.initEvent();
  }

  /**
   * [updateState 状态更新]
   * @return {[type]} [description]
   */
  updateState(){
    let self=this;
    this.getState().then(function(res){  // getState()是接口里的方法
      self.issue=res.issue; //拿到期号
      self.end_time=res.end_time; //拿到截止时间
      self.state=res.state; //拿到状态
      $(self.issue_el).text(res.issue); //更新期号
      self.countdown(res.end_time,function(time){ //倒计时
        $(self.countdown_el).html(time)
      },function(){ //重新获取
        setTimeout(function () {
          self.updateState();
          self.getOmit(self.issue).then(function(res){

          });
          self.getOpenCode(self.issue).then(function(res){

          })
        }, 500);
      })
    })
  }

  /**
   * [initEvent 初始化事件]
   * @return {[type]} [description]
   */
  initEvent(){
    let self=this;
    $('#plays').on('click','li',self.changePlayNav.bind(self));
    $('.boll-list').on('click','.btn-boll',self.toggleCodeActive.bind(self));
    $('#confirm_sel_code').on('click',self.addCode.bind(self));
    $('.dxjo').on('click','li',self.assistHandle.bind(self));
    $('.qkmethod').on('click','.btn-middle',self.getRandomCode.bind(self));
  }
}

export default Lottery;
