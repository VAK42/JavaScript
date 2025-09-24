'use strict';

let a = {x:4};
let b = {y:2};
console.log(Object.getPrototypeOf(a)===Object.prototype);  // True
console.log(Object.getPrototypeOf(a));  // [Object: null prototype] {}
Object.setPrototypeOf(a,b);
console.log(Object.getPrototypeOf(a));  // { y: 2 }
console.log(a.y);  // 2

let c = Object.create(b);
c.z = 8;
console.log(c.y);  // 2
console.log(c.z);  // 8

let d = Object.create(null);
console.log(Object.getPrototypeOf(d));  // Null

let e = Object.create(Object.prototype, {
  j:{
    value:42,
    writable:true,
    enumerable:true,
    configurable:true
  }
});
console.log(e.j);  // 42
console.log(Object.getPrototypeOf(e)===Object.prototype);  // True
