
'use strict'

const cons = (x, y) => m => m(x, y);

const car = (m) => m((x, y) => x);

const cdr = (m) => m((x, y) => y);

const list = (...k) => {
    let x = null;
    for(let i = k.length; i >= 0; i--){
        x = cons(k[i], x);
    }
    return x;
}

const ref = (lst, k) => {
    if(lst === null){
        return false;
    }else{
        if(car(car(lst)) === k){
            return cdr(car(lst));
        }else{
            return ref(cdr(lst), k);
        }
    }
}


exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
exports.list = list;
exports.ref = ref;
