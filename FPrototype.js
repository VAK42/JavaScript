'use strict';

let a = { b: true };
function c(d) {
  this.e = d;
}
c.prototype = a;
let f = new c('JS');                         // c.__proto__ == a
console.log(f.b);                            // True

function g() { }                             // g.prototype = { constructor: g }
console.log(g.prototype.constructor === g);  // True
let h = new g();
console.log(h.constructor === g);            // True

function i(j) {
  this.k = j;
  console.log(j);
}
let l = new i('A');                          // A
let m = new l.constructor('B');              // B

function n() { }
n.prototype = { o: true };                   // Replace n.prototype = { constructor: n } -> constructor: Object
let p = new n();
console.log(p.constructor === n);            // False
console.log(p.constructor === Object);       // True

function q() { }
q.prototype.r = true;
console.log(new q().constructor === q);      // True

q.prototype = {
  s: true,
  constructor: q
};
console.log(new q().constructor === q);      // True
