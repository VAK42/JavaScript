'use strict'

// Arrow Functions Inherit 'this' From Their Enclosing Scope
let a = {
  b: 'VAK',
  c: ['JS', 'K42', '42'],
  d() {
    this.c.forEach(e => console.log(this.b + ': ' + e));
  }
};
a.d();

// Regular Functions Create Their Own 'this' Context
let f = {
  g: 'VAK',
  h: ['JS', 'K42', '42'],
  i() {
    this.h.forEach(function (j) {
      console.log(this.g + ': ' + j);
    }, this);  // The Second Parameter 'this' Is Required For The Callback Otherwise It Will Return An Error When Called
  }
};
f.i();

/*
Not Have 'this'
Not Have Arguments
Not Have 'super'
Can't Be Called With 'new'
*/
