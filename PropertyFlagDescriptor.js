'use strict';

let a = { x: 'JS' };
let b = Object.getOwnPropertyDescriptor(a, 'x');
console.log(JSON.stringify(b, null, 2));

let c = {};
Object.defineProperty(c, 'x', {
  value: 'JS'
});
let d = Object.getOwnPropertyDescriptor(c, 'x');
console.log(JSON.stringify(d, null, 2));

Object.defineProperties(c, {
  y: {
    value: 'A',
    writable: false,
    enumerable: false,
    configurable: false
  },
  z: {
    value: 'B',
    writable: false,
    enumerable: true,
    configurable: false
  },
  w: {
    value: 'C',
    writable: true,
    enumerable: false,
    configurable: true
  }
});
let e = Object.getOwnPropertyDescriptors(c);
console.log(JSON.stringify(e, null, 2));
