'use strict'

if (true) {
  var a = true;
}
console.log(a);  // True

function b() {
  if (true) {
    var c = '42';
  }
  console.log(c);
}
b();   // 42
console.log(c);  // ReferenceError

var d = 'AK42';
var d = 'JS42';
console.log(d);  // JS42

function e() {
  f = 'K42';
  console.log(f);
  var f;
}
e();   // K42

function g() {
  h = 'JS';
  if (true) {
    var h;
  }
  console.log(h);
}
g();   // JS

function i() {
  console.log(j);
  var j = 'VAK';
}
i();   // Undefined

(function () {
  console.log('a');
})();  // a
(function () {
  console.log('b');
}());  // b
!function () {
  console.log('c');
}();  // c
+function () {
  console.log('d');
}();  // d

/*
No Block Scope
Tolerate Redeclaration
Can Be Declared Below Their Use
Declaration - Hoisted | Assignment - Not Hoisted
*/
