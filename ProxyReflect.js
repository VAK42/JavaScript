'use strict';

// Proxy   - Intercept + Customize Behavior Of Operations On Objects
// Reflect - Provide Default Methods To Forward Operations Inside Proxy Traps
let a = {};
let b = new Proxy(a, {
  get(c, d, e) {
    return Reflect.get(c, d, e);                    // Get Property Value
  },
  set(c, d, f, e) {
    return Reflect.set(c, d, f, e);                 // Set Property Value
  },
  has(c, d) {
    return Reflect.has(c, d);                       // Check If Property Exists
  },
  deleteProperty(c, d) {
    return Reflect.deleteProperty(c, d);            // Delete Property
  },
  apply(c, d, e) {
    return Reflect.apply(c, d, e);                  // Call Function
  },
  construct(c, d, e) {
    return Reflect.construct(c, d, e);              // Create New Instance
  },
  getPrototypeOf(c) {
    return Reflect.getPrototypeOf(c);               // Get Prototype
  },
  setPrototypeOf(c, d) {
    return Reflect.setPrototypeOf(c, d);            // Set Prototype
  },
  isExtensible(c) {
    return Reflect.isExtensible(c);                 // Check If Object Is Extensible
  },
  preventExtensions(c) {
    return Reflect.preventExtensions(c);            // Make Object Non-Extensible
  },
  defineProperty(c, d, f) {
    return Reflect.defineProperty(c, d, f);         // Define New Property
  },
  getOwnPropertyDescriptor(c, d) {
    return Reflect.getOwnPropertyDescriptor(c, d);  // Get Property Descriptor
  },
  ownKeys(c) {
    return Reflect.ownKeys(c);                      // List All Property Keys
  }
});

b.x = 10;
console.log(b.x);                                            // 10
console.log('x' in b);                                       // True
console.log(delete b.x);                                     // True
Object.defineProperty(b, 'y', { value: 20 });
console.log(Object.getOwnPropertyDescriptor(b, 'y').value);  // 20
console.log(Object.getPrototypeOf(b));                       // [Object: null prototype] {}
console.log(Object.setPrototypeOf(b, {}));                   // {}
console.log(Object.isExtensible(b));                         // True
console.log(Object.preventExtensions(b));                    // {}
console.log(Object.getOwnPropertyNames(b));                  // ['y']

function l() {
  return 'm';
}
function L() {
  this.v = 'M';
  return this;
}

let m = new Proxy(L, {
  apply(n, o, p) {
    return Reflect.apply(l, o, p);      // Call Function
  },
  construct(n, o, p) {
    return Reflect.construct(n, o, p);  // Create New Instance
  }
});

console.log(m());      // 'm'
console.log(new m());  // L { v: 'M' }
