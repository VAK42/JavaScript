'use strict';

let a = {};
console.log(a.__proto__ === Object.prototype);            // True
console.log(a.toString === a.__proto__.toString);         // True
console.log(a.toString === Object.prototype.toString);    // True
console.log(Object.prototype.__proto__);                  // Null

let b = [8, 2, 4];
console.log(b.__proto__ === Array.prototype);             // True
console.log(b.__proto__.__proto__ === Object.prototype);  // True
console.log(b.__proto__.__proto__.__proto__);             // Null

function c() { }
console.log(c.__proto__ === Function.prototype);          // True
console.log(c.__proto__.__proto__ === Object.prototype);  // True

let d = "JS";
let e = 42;
let f = true;
console.log(d.__proto__ === String.prototype);            // True
console.log(e.__proto__ === Number.prototype);            // True
console.log(f.__proto__ === Boolean.prototype);           // True
console.log(d.toUpperCase());                             // JS
console.log(e.toFixed(2));                                // 42.00
console.log(f.valueOf());                                 // True

let g = {
  0: 'VAK',
  1: 'K42',
  length: 2,
  join: Array.prototype.join
};
console.log(g.join(' - '));                               // VAK - K42
