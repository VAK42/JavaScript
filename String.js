'use strict';

let a = 'VAK42';
a[0] = '!';
console.log(a[0]);                    // V
console.log(a.at(0));                 // V
console.log(a[a.length - 1]);         // 2
console.log(a.at(-1));                // 2
console.log(a[-1]);                   // Undefined
console.log('VAK\n'.length);          // 4
a = '!' + a[0];
console.log(a);                       // !V
/*
Single-quoted  - 'VAK4'
Double-quoted  - "VAK4"
Backticks      - `${K}`
\n             - New Line
\'             - Escaped Single Quote
\"             - Escaped Double Quote
\`             - Escaped Backtick
\\             - Backslash
\t             - Tab
*/
console.log('Vak42'.toLowerCase());   // vak42
console.log('Vak42'.toUpperCase());   // VAK42
console.log('Vak'[2].toUpperCase());  // K
console.log('VAK42'.indexOf('v'));    // -1
console.log('VAK42'.indexOf('V'));    // 0
console.log('VAV'.indexOf('V', 1));   // 2
console.log('VAK'.lastIndexOf('K'));  // 0
console.log('VAK'.includes('V'));     // True
console.log('VAK'.includes('4'));     // False
console.log('VAK'.includes('V', 1));  // False
console.log('VAK'.startsWith('V'));   // True
console.log('VAK'.endsWith('K'));     // True
console.log('42VAK'.slice(2, 0));     // Not Supported
console.log('42VAK'.slice(0, 2));     // 42
console.log('42VAK'.slice(2));        // VAK
console.log('42VAK'.slice(-2, -1));   // A
console.log('AK42'.substring(2, 0));  // AK
console.log('AK42'.substring(0, 2));  // AK
console.log('AK42'.substring(2));     // 42
console.log('42'.substring(-2, -1));  // Not Supported
/*
| Method          | Range               | Negative |
|-----------------|---------------------|----------|
| slice(S, E)     | From Start → End    | Allowed  |
| substring(S, E) | Between Start & End | = 0      |
| substr(S, L)    | From Start & Length | Allowed  |
*/
console.log('o' > 'O');                        // True
console.log('Ö' > 'O');                        // True
console.log('Z'.codePointAt(0));               // 90
console.log('Z'.codePointAt(0).toString(16));  // 5a
console.log(String.fromCodePoint(90));         // Z
console.log(String.fromCodePoint(0x5a));       // Z
