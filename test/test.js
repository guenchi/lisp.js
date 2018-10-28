
const {cons, car, cdr, list, ref} = require('list.js');



const alist = list(cons(1, 2), cons(3, 4), cons(5, 6));

console.log(ref(alist, 1));
console.log(ref(alist, 3));
console.log(ref(alist, 5));


console.log(car(cdr(list(1,2,3,4))));