
const {cons, car, cdr, caddr, list, ref, val} = require('list.js');



const alist = list(cons(1, 2), cons(3, 4), cons(5, 6));

console.log(ref(alist, 1));
console.log(ref(alist, 3));
console.log(val(alist, 6));
console.log(ref(alist, 7));


console.log(caddr(list(1,2,3,4)));