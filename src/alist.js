

const {cons, car, cdr, caar, cdar, list} = require('./list');

const ref = (lst, k) => {
    if(lst === null){
        return false;
    }else{
        if(caar(lst) === k){
            return cdar(lst);
        }else{
            return ref(cdr(lst), k);
        }
    }
}

exports.ref = ref;