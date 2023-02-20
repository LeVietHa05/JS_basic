function compare1(a, b) {
    if (b == 'jan') return 1 
    if (a == 'jan') return -1
    else return 0;
}

console.log(['q3fqwf', 'ag'].sort(compare1))

function sum(...args) {
   return args.reduce((previous, current) => {
     return previous + current;
   });
}

console.log(sum(1,2,35,23,624,274,43))
