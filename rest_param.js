

/**
 * 
 * @param {*} thing to compare
 * @param {*} type to compare
 * @param  {...any} args 
 * @returns array of thing
 */
function dataFilter(thing, type, ...args) {
    let result = args.filter(e => typeof e === type);
    result = result.filter(e => e === thing);
    return result;
}
let kq1 = dataFilter('a', 'string', 1, 'a', null, undefined, 2, 'c');
console.log(kq1); // ['a', 'c']


/**
 * 
 * @param {*} type 
 * @param  {...any} args 
 * @returns array of the same type
 */
function locDuLieu(type, ...args) {
    return args.filter(e => typeof e === type);
}
let kq2 = locDuLieu('string', 1, 'a', null, undefined, 2, 'c');
console.log(kq2); // ['a', 'c']


/**
 * 
 * @param  {...any} args 
 * @returns tinh tong
 */
function tingTong(...args) {
    let tong = 0;
    for (const x of args) {
        if (typeof x === 'number') 
        tong += x;
    }
    return tong;
}
console.log(tingTong(12,21));

/**
 * 
 * @param {*} multiplier he so nhan
 * @param  {...any} args nhung so can nhan
 * @returns mang ket qua da nhan xong
 */
function multiply(multiplier, ...args) {
    return args.map(e => e * multiplier);
}
let mulTest = multiply(3, 5, 7, 12);
console.log(mulTest);

