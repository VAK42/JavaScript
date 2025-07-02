'use strict';

console.log(null === undefined);  // False
console.log(null == undefined);   // True
console.log(null > 0);            // False
console.log(null == 0);           // False
console.log(null >= 0);           // True
console.log(undefined > 0);       // False
console.log(undefined < 0);       // False
console.log(undefined == 0);      // False
console.log(+null);               // 0
console.log(+undefined);          // NaN
