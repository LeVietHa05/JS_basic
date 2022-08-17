// console.log("hello from my first js file");
// console.log("goodbye")
// let userInput = prompt("nhap so bat ki nho hon 10").toLowerCase()
// if (userInput <= 5) {
//     console.log("so nho hon 5")
// }
// else console.log("so lon hon 5")

/**
 * password must be 6+ charactors
 * password can not include space
 */
// const password = prompt("enter your password: ");
// if (password.length <= 6 ) {
//     alert("your password is too short. must be 6+")
// } else {
//     if (password.indexOf(' ') === -1){
//         alert("valid password")
//     }
//     else {
//         alert("oh no, there is space in your password")
//     }
// }

// //PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// let fullAddress = restaurant.address + ', ' + restaurant.city +', '+ restaurant.state + ' ' + restaurant.zipcode;
// console.log(fullAddress)

/************************ */
//guess number

// let maxNum = parseInt(prompt('enter your maximum number: '));
// while (!maxNum) {
//     maxNum = parseInt(prompt('pls, enter a valid number:'));
// }

// const targetNum = Math.floor(Math.random() * maxNum) + 1;
// let numberOfTry = 0;
// let guess = parseInt(prompt('enter ur guess'));
// while (!guess){
//     guess = parseInt(prompt('come on, a valid number'));
// }
// numberOfTry ++;
// while (parseInt(guess) !== targetNum) {
//     if (parseInt(guess) < targetNum) {
//         guess = prompt('too low, again ');
//     }
//     if (parseInt(guess) > targetNum) {
//         guess = prompt('too high, again');
//     }
//     if (guess === 'q'){
//         break;
//     }
//     numberOfTry ++;
// }
// if (guess === 'q'){
//     alert('oke, quitting');
// }
// else {
//     alert(`congrat!! it tool u ${numberOfTry} guess.`)
// }
/*********************** */

/********************** */
//todo list
// let userInput = prompt('what do u want to do');
// const todoList = ['eat', 'drink'];
// while (userInput.toLowerCase() !== 'quit'){
//     if (userInput.toLowerCase() === 'list' ){
//         console.log('*****************"');
//         for (let i = 0; i < todoList.length; i++){
//             console.log(`${i}: ${todoList[i]}`);
//         }
//         console.log('*****************"');
//     } else if (userInput.toLowerCase() === 'new') {
//         const newJop = prompt('oke, what is the new job?');
//         todoList.push(newJop);
//         console.log(`${newJop} added to the list`);
//     } else if (userInput.toLowerCase() === 'delete'){
//         const index = parseInt(prompt('enter the index to delete'));
//         if (!Number.isNaN(index) && index < todoList.length){
//             const deleted = todoList.splice(index, 1);
//             console.log(`${deleted} is deleted from the list`);
//         } else console.log('invalid index');
//     }
//     userInput = prompt('what do u want to do');
// }
// console.log('oke. now quitting')
/********************** */

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

// let num1 = prompt('max');
// if (typeof num1 !== Number){
//   console.log("ky tu vua nhap khong phai la so")
// }
// let num2 = parseInt(prompt('min'));
// let ran = Math.floor(Math.random() * (num1 - num2)) + num2;
// console.log(ran);

let ten = "Le Viet Ha sadgfhgjhlafsgdf";
let so = 12947 + "asd"; //"12947asd"
let kethop = `sajbd  ${so}`;

ten1 = `ten ${so}`

console.log(so.length);


/**
 * 
 * @param {*} input 
 * @param {*} input23 
 * @returns 
 */
const daokitu = function (input =123, input23 ='123') {
  let output;

  console.log(output);
  return output
};

daokitu(123,125); //
/**
 * sjbfa
 * akjbfkjasf
 * jkbvkjasvb
 */

let as = '12'
let as21 = '124'
let asf12 = 'dsc'

let asf2 = as.concat(as, 'asga g', as21, asf12)
let asf3 = as + as + 'asga g' + as21 + asf12
console.log(asf2);
console.log(asf3);
