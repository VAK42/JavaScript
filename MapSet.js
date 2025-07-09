'use strict';

// Map
let a = new Map();
a.set('K', 'VAK');
a.set(4, '42');
a.set(true, 'VAK42');
console.log(a.get(4));    // 42
console.log(a.get('K'));  // VAK
console.log(a.size);      // 3
console.log(a.has('K'));  // True
console.log(a.has('A'));  // False
a.delete(4);
console.log(a.get(4));    // Undefined
a.clear();
console.log(a.size);      // 0

let b = { A: 'VAK' };
let c = new Map();
c.set(b, 42);
console.log(c.get(b));    // 42

let d = { A: 'JS' };
let e = {};
e[d] = 24;
e[b] = 48;
console.log(e["[object Object]"]);  // 48

c.set('K', 'VAK').set(4, '42').set(true, 'VAK42');

// Map Iteration
let g = new Map([
  ['VAK', 400],
  ['K42', 800],
  ['JS', 1000]
]);

for (let h of g.keys()) {
  console.log(h);  // VAK → K42 → JS
}

for (let i of g.values()) {
  console.log(i);  // 400 → 800 → 1000
}

for (let j of g.entries()) {
  console.log(j);  // ['VAK', 400] → ['K42', 800] → ['JS', 1000]
}

for (let k of g) {
  console.log(k);  // ['VAK', 400] → ['K42', 800] → ['JS', 1000]
}

g.forEach((k, l, m) => {
  console.log(l, k);
});
/*
| Key | Value |
|-----|-------|
| VAK | 400   |
| K42 | 800   |
| JS  | 1000  |
*/

// Map <-> Object
let l = {
  A: 'VAK',
  B: 42
};
let m = new Map(Object.entries(l));
console.log(m);            // Map(2) {'A' => 'VAK', 'B' => 42}
console.log(m.entries());  // [Map Entries] {['A', 'VAK'], ['B', 42]}

let n = Object.fromEntries([
  ['VAK', 4],
  ['K42', 2],
  ['JS', 42]
]);
console.log(n);  // {VAK: 4, K42: 2, JS: 42}

let o = new Map();
o.set('VAK', 4);
o.set('K42', 2);
o.set('JS', 42);
let p = Object.fromEntries(o.entries());
let q = Object.fromEntries(o);
console.log(p);  // {VAK: 4, K42: 2, JS: 42}
console.log(q);  // {VAK: 4, K42: 2, JS: 42}

// Set
let r = new Set();
let s = { JS: 'VAK' };
let t = { JS: 'K42' };
let u = { JS: false };
r.add(s);
r.add(t);
r.add(u);
console.log(r.size);       // 3
for (let v of r) {
  console.log(v.JS);       // VAK → K42 → false
}
console.log(r.has(t));     // True
console.log(r.delete(t));  // True
console.log(r.has(t));     // False
r.clear();
console.log(r.size);       // 0

// Set Iteration
let w = new Set(['VAK', 'JS', 42]);

for (let x of w) console.log(x);  // VAK → JS → 42

w.forEach((y, z, A) => {
  console.log(y);  // VAK → JS → 42
});

for (let B of w.keys()) {
  console.log(B);  // VAK → JS → 42
}

for (let C of w.values()) {
  console.log(C);  // VAK → JS → 42
}

for (let D of w.entries()) {
  console.log(D);  // ['VAK', 'VAK'] → ['JS', 'JS'] → [42, 42]
}
