{
  // 二进制以0B开头，B可以小写，也可以大写
  console.log('B',0B111110111); // B 503
  // 八进制以0o开头
  console.log(0o767);  // 503
}

{ 
  // isFinite判断一个数是否有界（有效），如果是数字，则返回true
  // isFinite的判断和isNaN的判断刚好相反
  console.log('15',Number.isFinite(15));
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));

}

{
  console.log('25',Number.isInteger(25));  // true
  console.log('25.0',Number.isInteger(25.0));  // true
  console.log('25.1',Number.isInteger(25.1)); // false
  console.log('25.1',Number.isInteger('25'));  // false
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);// 9007199254740991 -9007199254740991
  console.log('10',Number.isSafeInteger(10)); // true
  console.log('a',Number.isSafeInteger('a'));  // false
}

{
  // Math.trunc()取整
  console.log(4.1,Math.trunc(4.1)); // 4
  console.log(4.9,Math.trunc(4.9)); // 4
}

{
  // Math.sign()判断一个数是正数、负数、还是0。正数返回1，负数返回-1,0返回0。不是数返回NAN。
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}

{
  // 立方根的计算
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
