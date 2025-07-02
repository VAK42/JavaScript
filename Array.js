'use strict';

let a = new Array('VAK', { JS: '42' }, function () { console.log('VAK42') }, true, 0);
let b = ['VAK', { JS: '42' }, function () { console.log('VAK42') }, true, 0];
console.log(b[0]);              // VAK
console.log(b[1].JS);           // 42
b[2]();                         // VAK42
b[4] = 8;
b[5] = 18;
console.log(b);                 // ['VAK', { JS: '42' }, [Function (anonymous)], true, 8, 18]
console.log(b.length);          // 6
console.log(b[-1]);             // Undefined
console.log(b[b.length - 1]);   // 18
console.log(b.at(-1));          // 18
console.log(b.pop());           // 18
console.log(b);                 // ['VAK', { JS: '42' }, [Function (anonymous)], true, 8]
b.push(18);
console.log(b.shift());         // VAK
console.log(b);                 // [{ JS: '42' }, [Function (anonymous)], true, 8, 18]
b.unshift('VAK');
b.push('JS', 42);
b.unshift(24, false);
console.log(b);                 // [24, false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 8, 18, 'JS', 42]
let c = b;
console.log(c === b);           // True
console.log(c.pop());           // 42
console.log(b);                 // [24, false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 8, 18, 'JS']
/*
Performance: push/pop > shift/unshift
*/
for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}
for (let d of c) {
  console.log(d);
}
for (let d in c) {
  console.log(c[d]);
}
/*
| Loop     | Over                 | Best Use             | Index | Value | Array? |
|----------|----------------------|----------------------|-------|-------|--------|
| for      | Indices (0 → Length) | Fine-Grained Control | Yes   | Yes   | Yes    |
| for...of | Values               | Value Iteration      | No    | Yes   | Yes    |
| for...in | Keys (String)        | Object Properties    | Yes   | Yes   | No     |
*/
c.length = 8;
c.length = 9;
console.log(c[8]);        // Undefined
let e = new Array(2);
console.log(e[0]);        // Undefined
console.log(e.length);    // 2
let f = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(f[0][1]);     // 2
console.log(String(f));   // 1,2,3,4,5,6,7,8,9
console.log([] + 1);      // 1
console.log([1] + 1);     // 11
console.log([1, 1] + 1);  // 1,11
console.log([] == []);    // False
console.log('' == []);    // True
console.log(0 == []);     // True
