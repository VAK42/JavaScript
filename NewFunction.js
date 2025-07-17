'use strict'

let a = new Function('b', 'c', 'return b + c');
console.log(a(4, 2));  // 6

let d = new Function('console.log("VAK42")');
d();    // VAK42

function e() {
  let f = 'JS';
  let g = new Function('console.log(f)');
  return g;
}
e()();  // ReferenceError

function h() {
  let i = 'JS';
  let j = function () { console.log(i); };
  return j;
}
h()();  // JS
