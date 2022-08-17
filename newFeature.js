/**
 * default value
 * spread syntax
 * rest param
 * destructing
 */

//default value
function greet(name, msg = 'Hello') {
    console.log(`${msg}, ${name}!!`);
}
greet('sir')
function rollDice(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}
console.log(rollDice());

//spread
const numbers = [1243,124,125,325,235,4,57,5];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));

const animals = ['dog','cat', 'tiger']
const animals2 = ['lion', 'aligator']
const allAnimals = [...animals, ...animals2]
console.log(...allAnimals);

//rest param
// function sum () { 
//     return arguments.reduce((total, el) => total + el) //arguments khong phai array nen
//     //khong dung duoc method reduce
// }
function sum (...num) {
    return num.reduce((total, el) => total + el);
}

//destructuring
const score = [982346,2983612,1298361,981265,1928365]
const first = score[0];
const second = score[1];

const [num1, num2, ...others] = score;
console.log(others);

const user = {
    firstName : 'le',
    lastName : 'ha',
    born : 2000,
    city : 'Ha Noi'
}
const {firstName: Họ = 'Lê', lastName: tên = 'Hà', isDead = false } = user;
console.log(`${Họ} ${tên} is dead? : ${isDead}`);
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}
