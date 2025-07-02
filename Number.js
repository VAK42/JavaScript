'use strict';

let a = 4, b = 2;
console.log(1000000000 === 1_000_000_000);  // True
console.log(1.2e9 === 1.2 * 1000000000);    // True
console.log(1.2e-9 === 1.2 / 1000000000);   // True
console.log(0b11111111 === 0xFF);           // True - Binary <> Hexadecimal
console.log(0b11111111 === 0o377);          // True - Binary <> Octal
console.log(999999..toString(36));          // lflr
console.log(999999..toString(16));          // f423f
console.log((999999).toString(2));          // 11110100001000111111
/*
| Number | Math.floor | Math.ceil | Math.round | Math.trunc |
|--------|------------|-----------|------------|------------|
|  4.1   |     4      |     5     |     4      |     4      |
|  4.5   |     4      |     5     |     5      |     4      |
|  4.6   |     4      |     5     |     5      |     4      |
| -1.1   |    -2      |    -1     |    -1      |    -1      |
| -1.5   |    -2      |    -1     |    -1      |    -1      |
| -1.6   |    -2      |    -1     |    -2      |    -1      |
*/
console.log(Math.floor(4.1));   // 4
console.log(Math.ceil(4.1));    // 5
console.log(Math.round(4.1));   // 4
console.log(Math.trunc(4.1));   // 4
console.log(Math.floor(4.5));   // 4
console.log(Math.ceil(4.5));    // 5
console.log(Math.round(4.5));   // 5
console.log(Math.trunc(4.5));   // 4
console.log(Math.floor(4.6));   // 4
console.log(Math.ceil(4.6));    // 5
console.log(Math.round(4.6));   // 5
console.log(Math.trunc(4.6));   // 4
console.log(Math.floor(-1.1));  // -2
console.log(Math.ceil(-1.1));   // -1
console.log(Math.round(-1.1));  // -1
console.log(Math.trunc(-1.1));  // -1
console.log(Math.floor(-1.5));  // -2
console.log(Math.ceil(-1.5));   // -1
console.log(Math.round(-1.5));  // -1
console.log(Math.trunc(-1.5));  // -1
console.log(Math.floor(-1.6));  // -2
console.log(Math.ceil(-1.6));   // -1
console.log(Math.round(-1.6));  // -2
console.log(Math.trunc(-1.6));  // -1
console.log(+9.85.toFixed(1));  // 9.9
console.log(+9.92.toFixed(1));  // 9.9
/*
IEEE 754: (-1)^Sign × (1 + Fraction) × 2^(Exponent - 1023)
- Binary: 0.1 = 0.0001100110011001100110011001100110011...
- 52b Truncation:
+ Fraction - Mantissa | Binary: 0001100110011001100110011001100110011001100110011001
+ Fraction - Hexadecimal:       0x1999999999999
- Normalized Binary: 1.100110011001... × 2^(-4)
- Exponent:
+ Actual Exponent: -4
+ Biased Exponent: -4 + 1023 = 1019
+ Exponent Binary: 01111111011
- IEEE 754:
Sign Bit: 0
Exponent: 01111111011
Mantissa: 1001100110011001100110011001100110011001100110011001
-> 0 01111111011 1001100110011001100110011001100110011001100110011001 | 0x3FB999999999999A
= (+1) × (1 + 0.6000000000000001...) × 2^(-4)
= 1.6000000000000001... × 0.0625
≈ 0.10000000000000000555111512312578...
*/
console.log(isNaN(NaN));                           // True
console.log(isNaN('VAK'));                         // True - NaN
console.log(NaN === NaN);                          // False
console.log(isFinite('42'));                       // True
console.log(isFinite('VAK'));                      // False
console.log(isFinite(Infinity));                   // False
console.log(Number.isNaN(NaN));                    // True
console.log(Number.isNaN('VAK'));                  // False - String
console.log(Number.isNaN('VAK' / 2));              // True
console.log(Number.isFinite(42));                  // True
console.log(Number.isFinite(Infinity));            // False
console.log(Number.isFinite(2 / 0));               // False
console.log(Number.isFinite('42'));                // False - String
console.log(Object.is(NaN, NaN));                  // True
console.log(Object.is(0, -0));                     // False
console.log(Object.is(a, b));                      // False - console.log(a === b)
console.log(parseInt('9K'));                       // 9
console.log(parseFloat('9.9K'));                   // 9.9
console.log(parseInt('9.9'));                      // 9
console.log(parseFloat('9.9.5'));                  // 9.9
console.log(parseInt('VAK42'));                    // NaN
console.log(parseFloat('VAK42'));                  // NaN
console.log(parseInt('lflr', 36));                 // 999999
console.log(parseInt('f423f', 16));                // 999999
console.log(parseInt('11110100001000111111', 2));  // 999999
console.log(Math.random());                        // 0 -> 1
console.log(Math.min(-2, -1, 0, 1, 2));            // -2
console.log(Math.max(-2, -1, 0, 1, 2));            // 2
console.log(Math.pow(2, 10));                      // 1024
