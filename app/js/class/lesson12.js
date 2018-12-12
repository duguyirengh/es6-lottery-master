/*******************类与对象**************************/
{
  // 基本定义和生成实例
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }
  let v_parent=new Parent('v');
  console.log('构造函数和实例',v_parent); // 构造函数和实例 Parent {name: "v"}
}

{
  // 继承
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{

  }

  console.log('继承',new Child()); // 继承 Child {name: "mukewang"}
}

{
  // 继承传递参数
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name); //调用父类的方法，用super()，一定要放在第一行
      this.type='child';
    }
  }

  console.log('继承传递参数',new Child('hello')); //继承传递参数 _Child {name: "hello", type: "child"}
}

{
  // getter,setter
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
    // 注意这里longName是属性，不是一个方法
    get longName(){
      return 'mk'+this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v=new Parent();
  console.log('getter',v.longName); // getter mkmukewang
  v.longName='hello';
  console.log('setter',v.longName); // setter mkhello
}

{
  // 静态方法
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }
    static tell(){
      console.log('tell');
    }
  }
  Parent.tell(); // tell
}

{
  // 静态属性
  class Parent{
    constructor(name='mukewang'){
      this.name=name;
    }

    static tell(){
      console.log('tell');
    }
  }
  Parent.type='test'; //  定义静态属性
  console.log('静态属性',Parent.type); // 静态属性 test
}
