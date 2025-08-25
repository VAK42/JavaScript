'use strict';

// Add & Remove
let a = ['VAK', { JS: '42' }, function () { console.log('VAK42') }, true, 0];
let b = [42, false];
a.push(...b);
a.pop();
a.unshift(...b);
a.shift();
console.log(a);          // [false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 0, 42]

// Splice
delete a[6];
console.log(a[6]);       // Undefined
console.log(a);          // [false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 0, <1 empty item>]
a.splice(6, 1);
console.log(a);          // [false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 0]
a.splice(0, 3, 'VAK');
console.log(a);          // ['VAK', [Function (anonymous)], true, 0]
let c = a.splice(0, 1);
console.log(c);          // ['VAK']
console.log(a);          // [[Function (anonymous)], true, 0]
a.splice(2, 0, 'JS');
console.log(a);          // [[Function (anonymous)], true, 'JS', 0]
a.splice(-1, 0, 4, 2);
console.log(a);          // [[Function (anonymous)], true, 'JS', 4, 2, 0]

// Slice
console.log(a.slice(1, 4));  // [true, 'JS', 4]
console.log(a.slice(-2));    // [2, 0]
console.log(a);              // [[Function (anonymous)], true, 'JS', 4, 2, 0]

// Concat
let d = [1, 2];
let e = { 0: 7, 1: 8 }
let f = { 0: 7, 1: 8, length: 2, [Symbol.isConcatSpreadable]: true }
console.log(d.concat([3, 4]));          // [1, 2, 3, 4]
console.log(d.concat([3, 4], [5, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(d.concat([3, 4], 5, 6));    // [1, 2, 3, 4, 5, 6]
console.log(d.concat(e));               // [1, 2, { '0': 7, '1': 8 }]
console.log(d.concat(f));               // [1, 2, 7, 8]

// forEach
['VAK', '42', 'JS'].forEach(console.log);
/*
VAK 0 ['VAK', '42', 'JS']
42  1 ['VAK', '42', 'JS']
JS  2 ['VAK', '42', 'JS']
*/
['VAK', '42', 'JS'].forEach((item, index, array) => {
  console.log(`${item} - ${index} - ${array}`);
});
/*
VAK - 0 - VAK,42,JS
42  - 1 - VAK,42,JS
JS  - 2 - VAK,42,JS
*/

// Search
console.log(d.indexOf(null));      // -1
console.log(d.indexOf(2));         // 1
console.log(d.lastIndexOf(2));     // 0
console.log(d.includes(1));        // True
console.log([NaN].indexOf(NaN));   // -1
console.log([NaN].includes(NaN));  // True
/*
indexOf() Uses Strict Equality Comparison - NaN === NaN => False
includes() Uses SameValueZero Comparison  - NaN Is Considered The Same As NaN
*/
let g = [
  { A: 0, B: 'VAK' },
  { A: 2, B: 'K42' },
  { A: 4, B: 'VAK' },
  { A: 8, B: false }
];
console.log(g.find(item => item.A == 0));               // { A: 0, B: 'VAK' }
console.log(g.find(item => item.A == 1));               // Undefined
console.log(g.findIndex(item => item.B == 'VAK'));      // 0
console.log(g.findIndex(item => item.B == true));       // -1
console.log(g.findLastIndex(item => item.B == 'VAK'));  // 2
console.log(g.findLastIndex(item => item.B == true));   // -1
console.log(g.filter(item => item.A < 4));              // [{ A: 0, B: 'VAK' }, { A: 2, B: 'K42' }]
console.log(g.filter(item => item.A > 8));              // []

// Transform
console.log(['VAK', '42', 'JS'].map(item => item));         // ['VAK', '42', 'JS']
console.log(['VAK', '42', 'JS'].map(item => item.length));  // [3, 2, 2]
console.log([1, 2, 14].sort());                             // [1, 14, 2]
function h(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log([1, 2, 14].sort(h));                                  // [1, 2, 14]
console.log([1, 2, 14].sort((a, b) => a - b))                     // [1, 2, 14]
console.log(['Ö', 'A', 'V'].sort((a, b) => a > b ? 1 : -1));      // ['A', 'V', 'Ö']
console.log(['Ö', 'A', 'V'].sort((a, b) => a.localeCompare(b)));  // ['A', 'Ö', 'V']
console.log([1, 2, 8, 6, 4].reverse());                           // [4, 6, 8, 2, 1]
let i = 'VAK, 42, JS'.split(', ');
for (let j of i) {
  console.log(j);                                                 // VAK 42 JS
}
console.log('VAK, 42, JS'.split(', ', 2));                        // ['VAK', '42']
console.log('VAK42'.split(''));                                   // ['V', 'A', 'K', '4', '2']
console.log(['VAK', '42', 'JS'].join('; '));                      // VAK; 42; JS
console.log([0, 2, 8, 6, 4].reduce((a, b) => a + b, 0));          // 20
/*
| Step | Accumulator (a) | Current Value (b) | Result (a + b) |
|------|-----------------|-------------------|----------------|
| 1st  | 0               | 0                 | 0              |
| 2nd  | 0               | 2                 | 2              |
| 3rd  | 2               | 8                 | 10             |
| 4th  | 10              | 6                 | 16             |
| 5th  | 16              | 4                 | 20             |
*/
console.log([0, 2, 8, 6, 4].reduce((a, b) => a + b));             // 20
/*
| Step | Accumulator (a) | Current Value (b) | Result (a + b) |
|------|-----------------|-------------------|----------------|
| 1st  | 0               | 2                 | 2              |
| 2nd  | 2               | 8                 | 10             |
| 3rd  | 10              | 6                 | 16             |
| 4th  | 16              | 4                 | 20             |
*/
console.log([0, 2, 8, 6, 4].reduceRight((a, b) => a + b, 0));     // 20
/*
| Step | Accumulator (a) | Current Value (b) | Result (a + b) |
|------|-----------------|-------------------|----------------|
| 1st  | 0               | 4                 | 4              |
| 2nd  | 4               | 6                 | 10             |
| 3rd  | 10              | 8                 | 18             |
| 4th  | 18              | 2                 | 20             |
| 5th  | 20              | 0                 | 20             |
*/
console.log([].reduce((a, b) => a + b));  // Error

console.log(typeof {});          // Object
console.log(typeof []);          // Object
console.log(Array.isArray({}));  // False
console.log(Array.isArray([]));  // True
