const {cons, car, cdr, ref} = require('list.js');



const alist = cons(cons(1, 2), cons(cons(3, 4), cons(cons(5, 6), null)));

console.log(ref(alist, 1));
console.log(ref(alist, 3));
console.log(ref(alist, 5));