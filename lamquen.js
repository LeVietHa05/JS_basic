// //khai bao bien
//
// let a = 1123;
// let b = "jgahsjk"
// let c = true;
// let d = null;
// let e = undefined;
//
// const pi = 3.14;
//
// var f = 1;
//
// //cac phep toan hoc
//
// let x = 5;
// let y = a + x;
// let z = a - x;
// let t = a * x;
// let u = a / x;
// let v = a % x;
//
// //thu vien Math
// let k = Math.sqrt(9);
// let l = Math.pow(2, 3);
// let m = Math.abs(-5);
// let n = Math.max(x, y, z, t, u, v);
// let o = Math.round(u);
// let p = Math.floor(u);
// let q = Math.ceil(u);
// let r = Math.random();
//
// //console log
//
// console.log("Hello World");
// console.log("a = " + a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(t);
// console.log(u);
// console.log(v);
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);
// console.log(o);
// console.log(p);
// console.log(q);
// console.log(r);
//
// // random tu a toi b
// let a1 = 1;
// let b1 = 10;
// /*
// let random = Math.floor(Math.random() * (b1 - a1 + 1)) + a1;
//
// function randomAB(a=1, b=10) {
//     let a2 = a;
//     let b2 = b;
//     console.log("a1 = " + a1);
//     console.log("b1 = " + b1);
//     let random = Math.floor(Math.random() * (b1 - a1 + 1)) + a1;
//     return [a1, b1, random];
// }
//
// let random1 = randomAB(20,100);
// console.log(random1);
// let random2 = randomAB(1, 10000);
// */
// //cu phap khai bao function
let t = 5;
function tenHam(x, y, z) {
    if (x == true) {
        console.log("x = true");
    } else {
        console.log(y, z)
    }

    t = 10;
    console.log(t);
}
tenHam(false, 145, 123);
console.log(t);
const tenham1 = function () {
    //code
    return "ABC"
}
tenham1();
const tenham2 = ( a = 2, b = 3) => { //arrow function
    //code
    return a + b;
}
console.log(tenham2(10))
let tong = tenham2(10, 20);


/**
 * calculate the perimeter and area of a rectangle
 * @param {number} a first parameter
 * @param {number} b sencond parameter
 */
function hcn(a, b) {
    let chuvi = 0;
    let dientich = 0;
    chuvi = (a + b) * 2;
    dientich = a * b;
    console.log("chu vi = " + chuvi);
    console.log("dien tich = " + dientich);
}
hcn(5, 10);