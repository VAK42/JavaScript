'use strict';

// Add & Remove
let a = ['VAK', { JS: '42' }, function () { console.log('VAK42') }, true, 0];
let b = [42, false];
a.push(...b);
a.pop();
a.unshift(...b);
a.shift();
console.log(a);  // [false, 'VAK', { JS: '42' }, [Function (anonymous)], true, 0, 42]

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
