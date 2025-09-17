'use strict'

// PowerArray - No Symbol.species
class a extends Array {
  b() {
    return this.length === 0;
  }
  c() {
    return this.length;
  }
}

let d = new a(1, 2, 5, 10, 50);
console.log(d.b());           // False
let e = d.filter(f => f >= 10);
console.log(e instanceof a);  // True
console.log('JS', e);         // JS a(2) [ 10, 50 ]
console.log(e.b());           // False

// PowerArray - Symbol.species
class g extends Array {
  h() {
    return this.length === 0;
  }
  i() {
    return this.length * 2;
  }
  static get [Symbol.species]() {
    return Array;
  }
}

let j = new g(1, 2, 5, 10, 50);
console.log(j.h());               // False
let k = j.filter(l => l >= 10);
console.log(k instanceof g);      // False
console.log(k instanceof Array);  // True
console.log('JS', k);             // JS [ 10, 50 ]
console.log(k.h());               // Error

/*
Symbol.species: Derived Array Methods Return Instances Of The Subclass
Symbol.species = Array: Derived Array Methods Return Plain Arrays
=> Control The Type Of Objects Returned By Methods That Create New Instances
*/
