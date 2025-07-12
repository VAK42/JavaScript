'use strict';

console.log(1234567890123456789012345678901234567890n);           // 1234567890123456789012345678901234567890n
console.log(BigInt("1234567890123456789012345678901234567890"));  // 1234567890123456789012345678901234567890n
console.log(4n + 2n);  // 6n
console.log(5n / 2n);  // 2n
console.log(1n + 2);   // Error
console.log(4n + BigInt(2));  // 6n
console.log(Number(4n) + 2);  // 6
console.log(+1n);       // Error
console.log(1 == 1n);   // True
console.log(1 === 1n);  // False
