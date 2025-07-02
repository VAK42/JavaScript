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
