'use strict'

class a {
  static b = 'JS';
  constructor(c, d) {
    this.e = d;
    this.f = c;
  }
  g(h = 0) {
    this.e += h;
    console.log('JS');
  }
  static i(j, k) {
    return j.e - k.e;
  }
}

class l extends a {
  m() {
    console.log('JS');
  }
}

let n = [
  new l('JS', 10),
  new l('JS', 5)
];
n.sort(l.i);
n[0].g();                                            // JS
console.log(l.b);                                    // JS
console.log(l.__proto__ === a);                      // True
console.log(l.prototype.__proto__ === a.prototype);  // True
/*
Static Property: Shared Among All Instances & Can Be Accessed Through The Class Directly
Static Method: Can Be Called On The Class Directly Without An Instance & Typically Operates On Class-Level Functionality
*/
