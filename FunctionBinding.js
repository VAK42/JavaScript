'use strict'

// Wrapper
let a = {
  b: 'VAK',
  c() { console.log(this.b); }
};

setTimeout(a.c, 1000);                     // Undefined
setTimeout(function () { a.c(); }, 1000);  // VAK
setTimeout(() => a.c(), 1000);             // VAK

// Bind
let d = a.c.bind(a);
d();                  // VAK
setTimeout(d, 1000);  // VAK

// Partial Function
function e(f, g) {
  return f * g;
}

let h = e.bind(null, 2);
console.log(h(2));  // 4
console.log(h(4));  // 8
console.log(h(5));  // 10
