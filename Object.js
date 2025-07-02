'use strict';

// Object Constructor
let a = new Object();

// Object Literal
let b = {
  S: 'JS',
  A: function () {
    console.log(this.S);
  },
  B() {
    console.log(this.S);
  }
};

// Add & Remove Property
console.log(b.S);  // JS
b.A();             // JS
b.B();             // JS
b.O = true;        // Add Property
delete b.O;        // Remove Property
b['4 K'] = 0;      // Add Multiword Property
delete b['4 K'];   // Remove Multiword Property

// Computed Property
let S = 'JS';
let c = {
  [S]: 42
};

function d(A, B) {
  return {
    A: A,
    B: B
  };
}
let e = d('VAK', 42);
console.log(e.A);       // VAK
console.log('B' in e);  // True

// Loop
for (let k in b) {
  console.log(k);
  console.log(b[k]);
}
/*
| Key | Value         |
|-----|---------------|
| S   | JS            |
| A   | [Function: A] |
| B   | [Function: B] |
*/

// Comparison
let f = {};
let g = {};
let h = f;
console.log(f === g);  // False
console.log(f === h);  // True

// Merging
let i = { A: 'A' };
let j = { B: 'B' };
let l = { C: 'C' };
Object.assign(i, j, l);
console.log(i.A);  // A
console.log(i.B);  // B
console.log(i.C);  // C
let m = Object.assign({}, i);
console.log(m.A);  // A
console.log(m.B);  // B
console.log(m.C);  // C
Object.assign(i, { A: 'AB' });
console.log(i.A);  // AB
let n = structuredClone(i);
console.log(i.A === m.A);  // False
console.log(i.A === n.A);  // True

// Constructor
function o(S) {
  this.S = S;
  this.A = true;
  this.B = function () {
    console.log(this.S);
  };
}
let p = new o('S');
console.log(p.S);  // S
console.log(p.A);  // True

// Optional Chaining
console.log(p?.A)  // True
console.log(p?.K)  // Undefined
