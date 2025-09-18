'use strict'

// Wrapper
let a = {
  b: 'VAK',
  c() { console.log(this.b); }
};

setTimeout(a.c, 1000);                     // Undefined - 'this' Lost
setTimeout(function () { a.c(); }, 1000);  // VAK - 'this' Preserved
setTimeout(() => a.c(), 1000);             // VAK - 'this' Preserved
/*
A Function Passed As An Argument Will Lose Its 'this' Context
Anonymous Function | Arrow Function | .bind() Can Be Used For 'this' Context Preservation
*/

// Bind
let d = a.c.bind(a);
d();                  // VAK
setTimeout(d, 1000);  // VAK
/*
Create New Function Where 'this' Is Permanently Bound To The Object
Fix 'this' & Can Pre-set Arguments - Partial Function
*/

// Partial Function
function e(f, g) {
  return f * g;
}

let h = e.bind(null, 2);
console.log(h(2));  // 4
console.log(h(4));  // 8
console.log(h(5));  // 10
