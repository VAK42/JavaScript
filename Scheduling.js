'use strict'

let a = function () {
  console.log('VAK');
};

setTimeout(a, 1000);
setInterval(a, 1000);

let b = function (x, y) {
  console.log(x + y);
};

setTimeout(b, 1000, 'VAK', '42');
setInterval(b, 1000, 'VAK', '42');
setTimeout(() => console.log('JS'), 1000);
setInterval(() => console.log('JS'), 1000);

let c = setTimeout(() => console.log('VAK'), 1000);
console.log(c);
clearTimeout(c);
console.log(c);

let d = setInterval(() => console.log('VAK'), 1000);
console.log(d);
clearInterval(d);
console.log(d);

/*
  Feature                 | SetTimeout()                           | SetInterval()                                              |
  ----------------------- | -------------------------------------- | ---------------------------------------------------------- |
  Execution               | Execute Once After A Delay             | Execute Repeatedly At The Specified Interval               |
  Stopping                | Stop Automatically After Running Once  | Need To Be Stopped Manually With clearInterval()           |
  Behavior After Execution| Only Execute Once Then Clear The Timer | Continue Executing At The Specified Interval Until Stopped |
*/
