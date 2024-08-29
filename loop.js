// // import { stdin, stdout } from "node:process";
// const stdout = require("node:process")
// const animals = ["dog", "cat", "lion", "cat", "tiger"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }
// for (let animal of animals) {
//   console.log(animal);
// }
// for (let char of "helo world") {
//   console.log(char);
// }
// 
// const languages = {
//   first: "C",
//   second: "Java",
//   third: "Python",
//   fourth: "PHP",
//   fifth: "JavaScript",
// };
// 
// for (it in languages) {
//   console.log(it, languages[it]);
// }
// 
// for (let it of Object.keys(languages)) {
//   console.log(it, languages[it]);
// }
// 
// //vi du lap co ban
// for (let i = 10; i > 0; i--) {
//   console.log('hello' + i)
// }
// 
// //vi du lap dung while
// let i = 0;
// while (true) {
//   console.log("hello" + i);
//   i++;
//   if (i > 10) break;
// }
// 
// //vi du lap dung do while
// let j = 10;
// do {
//   console.log("hello" + j);
// } while (j < 10);
// 
// //vi du dung break
// let alive = true;
// let hp = 10;
// while (alive) {
//   conosle.log("still alive");
//   hp--;
//   if (hp < 0) alive = false;
// }
// 
// for (let i = 0; i < 5; i++) {
//   console.log("vòng lặp ngoài số: " + i);
//   for (let j = 0; j < 3; j++) {
//     console.log("       vòng lặp trong số: " + j);
//   }
// }
// 
// // let gameOver = false;
// // while (!gameOver) {
// //     console.log('hello');
// //     // i++;
// //     if (hp < 0) gameOver = true;
// // }
// 
// while (true) {
//   let userInput = prompt("nhap so");
//   if (userInput === "q") break;
// }
// 
// // let x = 0;
// // while ( x < 5) {
// //     x ++ ;
// //      console.log(x);
// // }
// 
// // let x = 5;
// // let str = '*'
// // while (str.length < x )
// // {
// //     console.log(str);
// //     str = str + '*'
// // }
// 
// let x = 5;
// let str = "*";
// while (str.length <= x) {
//   console.log(str);
//   str = str + "*";
// }
// 
// for (let i = 0; i <= 15; i++) {
//   if (i == 0) console.log("day la so 0");
//   else if (i % 2 == 1) console.log(i + " la so le");
//   else console.log(i + " la so chan");
// }
// 
// let sum = 0;
// let mu = 0;
// for (let i = 1; i < 10; i++) {
//   //ham tram
//   for (let j = 0; j < 10; j++) {
//     //hang chuc
//     for (let z = 0; z < 10; z++) {
//       //hang don vi
//       sum = i * 100 + j * 10 + z;
//       mu = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(z, 3);
//       if (sum == mu) console.log(sum + " is armstrong number");
//     }
//   }
// }
// 
// let a = 336;
// let b = 360;
// let min = a <= b ? a : b;
// let gcd = 0;
// for (let i = 0; i <= min; i++) {
//   if (a % i == 0 && b % i == 0) {
//     gcd = i;
//   }
// }
// console.log(gcd);
// 
// let sum1 = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     sum1 += i;
//   }
// }
// console.log(sum1);
// 
// ("thequickbrownfoxjumpsoverthelazydog");
// ("thequickbrownfxjmpsvlazydg");
// function lockitu(str) {
//   let output = "";
//   for (let i = 0; i < str.length; i++) {
//     if (output.indexOf(str.charAt(i)) == -1) {
//       output += str.charAt(i);
//     }
//   }
//   return output;
// }
// console.log(
//   lockitu("zse5xdrcyfvtgbhinjmko,yetjykjehrwyueirtluj.hxgfdhsghrtykulj")
// );
// 
// // let a = 4;
// while (true) {
//   a++;
//   if (a > 12) break;
// }
// 
// // 1 1 1 1 1 1
// // 2 2 2 2 2 2
// // 3 3 3 3 3 3
// for (let i = 1; i < 4; i++) {
//   for (let j = 0; j < 6; j++) {
//     console.log(i);;
//   }
// }
// 
// let z = 'thequickbrownfoxjumpsoverthelazydog';
// for (let i = 0; i < z.length; i++) {
//   for (let j = i + 1; j < z.length; j++) {
//     if (z[i] == z[j]) {
//       z = z.slice(0, j) + z.slice(j + 1);
//     }
//   }
// }
// console.log(z)
// 
// 
// 
// /**
//  * HALL OF FAME
//  * TODO LIST APP viết bởi KEVIN MINH TOAN
//  */ 
// 
// const toDo = [];
// function addTodo() {
//   const newTodo = prompt("Enter new task:");
//   toDo.push(newTodo);
//   console.log("Task added.");
// }
// function todoList() {
//   if (toDo.length == 0) {
//     console.log("No task.");
//   } else {
//     console.log("Tasks:");
//     for (let i = 0; i < toDo.length; i++) {
//       console.log(`${i + 1}. ${todoList[i]}`);
//     }
//   }
// }
// function delTodo() {
//   const index = prompt("Enter task to delete:");
//   if (index >= 0 && index < toDo.length) {
//     todoList.splice(index, 1);
//     console.log("Task deleted");
//   } else {
//     console.log("Invalid task");
//   }
// }
// function quitTodo() {
//   console.log("Quitting the Todo List app");
// }
// function startTodo() {
//   let command;
// 
//   while (command !== "quit" && command !== "q") {
//     command = prompt("Enter a command: (new, list, delete, quit)");
//     switch (command) {
//       case "new":
//         addTodo();
//         break;
//       case "list":
//         todoList();
//         break;
//       case "delete":
//         delTodo();
//         break;
//       case "quit":
//       case "q":
//         quitTodo();
//         break;
//       default:
//         console.log("Invalid command! Please try again.");
//     }
//   }
// }
// startTodo();
// 
// 
// let a = 15
// let b = 45
// for (let i = Math.min(a, b); i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     console.log(i); break
//   }
// 
// }
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readLine.question(questionText, resolve);
  });
}

async function start() {
  let name = await ask("What is your name? ");
  console.log(`Hello, ${name}`);
  process.exit();
}

start();