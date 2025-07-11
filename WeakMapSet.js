'use strict';

// Memory
let a = { JS: 'VAK' };
a = null;           // Garbage Collected
console.log(a);     // Null

a = { JS: 'VAK' };
let b = [a];
a = null;           // Not Garbage Collected
console.log(b[0]);  // {JS: 'VAK'}

a = { JS: 'VAK' };
let c = new Map();
c.set(a, 'VAK42');
a = null;           // Not Garbage Collected
for (let d of c) {
  console.log(d);   // [{ JS: 'VAK' }, 'VAK42']
}

// WeakMap
let d = new WeakMap();
let e = {};             // Key Must Be Object - Not Primitive
d.set(e, 'VAK42');      // OK
d.set('K', 'K42');      // Error

let f = { JS: 'VAK' };
let g = new WeakMap();  // Iteration + keys() + values() + entries() - Not Supported
g.set(f, 'VAK');        // get() + set() <-> add() - Not Available
f = null;               // Garbage Collected
g.get(f);               // Undefined
g.has(f);               // False
g.delete(f);            // False

// WeakSet
let h = new WeakSet();
let i = {};             // Key Must Be Object - Not Primitive
h.add(i);               // OK
h.add('K');             // Error

let j = { JS: 'VAK' };
let k = new WeakSet();  // Iteration + keys() + values() + entries() - Not Supported
k.add(j);               // add() <-> get() + set() - Not Available
j = null;               // Garbage Collected
k.has(j);               // False
k.delete(j);            // False
