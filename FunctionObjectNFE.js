'use strict'

let a = function () {
  console.log('VAK');
};
console.log(a.name);    // a

let b = function () {
  console.log('VAK');
};
console.log(b.name);    // b

function c(d = function () { }) {
  console.log(d.name);  // d
}
c();

let e = {
  f() { console.log('JS'); },
  g: function () { console.log('K42'); }
};
console.log(e.f.name);  // f
console.log(e.g.name);  // g

let h = [function () { }];
console.log(h[0].name);

function i(j) { }
function k(j, l) { }
function m(j, l, ...n) { }
console.log(i.length);  // 1
console.log(k.length);  // 2
console.log(m.length);  // 2

let o = function () {
  console.log('42');
  o.z++;                // Property - Not Variable
};
o.z = 0;
o();                    // 42
o();                    // 42
console.log(o.z);       // 2

let p = function (q) {
  if (q) {
    console.log(q);
  } else {
    p('JS42');          // Error - p - Not Function
  }
};
let r = p;
p = null;
r();                    // Error

let s = function t(q) {
  if (q) {
    console.log(q);
  } else {
    t('VAK');
  }
};
let u = s;
s = null;
u();                    // VAK
/* 
Allows Function To Reference Itself Internally
Not Visible Outside Of Function
*/
