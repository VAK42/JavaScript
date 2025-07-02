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
