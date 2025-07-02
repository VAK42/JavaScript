'use strict';

let a = null;
let b = undefined;
console.log(a || 'Nullish');     // 1st Truthy - Nullish
console.log(b ?? 'Coalescing');  // 1st Defined - Coalescing
