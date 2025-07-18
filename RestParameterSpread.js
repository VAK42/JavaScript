'use strict'

/*
Gather Remaining Parameters Into Array
Must Be At The End
*/
let a = function (...b) {
  let c = 0;
  for (let d of b) c += d;
  return c;
};
console.log(a(1));            // 1
console.log(a(1, 4));         // 5
console.log(a(1, 4, 10));     // 15

let e = function (f, g, ...h) {
  console.log(f + g);         // VAK42
  console.log(h[0]);          // K42
  console.log(h[1]);          // JS
  console.log(h.length);      // 2
};
e('VAK', '42', 'K42', 'JS');

let i = [4, 5, 1];
console.log(Math.max(...i));  // 5

let j = [4, 5, 1];
let k = [8, 9, 15];
let l = [0, ...j, 2, ...k];
console.log(l);               // [0, 4, 5,  1, 2, 8, 9, 15]

let m = 'VAK';
console.log([...m]);          // ['V', 'A', 'K']

let n = 'VAK';
console.log(Array.from(n));   // ['V', 'A', 'K']

let o = [1, 2, 4];
let p = [...o];
console.log(JSON.stringify(o) === JSON.stringify(p));  // True
console.log(o === p);                                  // False
o.push(4);
console.log(o);                                        // [1, 2, 4, 4]

let q = { a: 1, b: 2, c: 4 };
let r = { ...q };
console.log(JSON.stringify(q) === JSON.stringify(r));  // True
console.log(q === r);                                  // False

q.d = 4;
console.log(JSON.stringify(q));                        // {"a":1,"b":2,"c":4,"d":4}
console.log(JSON.stringify(r));                        // {"a":1,"b":2,"c":4}
