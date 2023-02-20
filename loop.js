// import { stdin, stdout } from "node:process";
const stdout = require("node:process")
const animals = ["dog", "cat", "lion", "cat", "tiger"];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
for (let animal of animals) {
  console.log(animal);
}
for (let char of "helo world") {
  console.log(char);
}

const languages = {
  first: "C",
  second: "Java",
  third: "Python",
  fourth: "PHP",
  fifth: "JavaScript",
};

for (it in languages) {
  console.log(it, languages[it]);
}

for (let it of Object.keys(languages)) {
  console.log(it, languages[it]);
}

for (let i = 0; i < 5; i++) {
  console.log("vòng lặp ngoài số: " + i);
  for (let j = 0; j < 3; j++) {
    console.log("       vòng lặp trong số: " + j);
  }
}

// let gameOver = false;
// while (!gameOver) {
//     console.log('hello');
//     // i++;
//     if (hp < 0) gameOver = true;
// }

while (true) {
  let userInput = prompt("nhap so");
  if (userInput === "q") break;
}

// let x = 0;
// while ( x < 5) {
//     x ++ ;
//      console.log(x);
// }

// let x = 5;
// let str = '*'
// while (str.length < x )
// {
//     console.log(str);
//     str = str + '*'
// }

let x = 5;
let str = "*";
while (str.length <= x) {
  console.log(str);
  str = str + "*";
}

for (let i = 0; i <= 15; i++) {
  if (i == 0) console.log("day la so 0");
  else if (i % 2 == 1) console.log(i + " la so le");
  else console.log(i + " la so chan");
}

let sum = 0;
let mu = 0;
for (let i = 1; i < 10; i++) {
  //ham tram
  for (let j = 0; j < 10; j++) {
    //hang chuc
    for (let z = 0; z < 10; z++) {
      //hang don vi
      sum = i * 100 + j * 10 + z;
      mu = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(z, 3);
      if (sum == mu) console.log(sum + " is armstrong number");
    }
  }
}

let a = 336;
let b = 360;
let min = a <= b ? a : b;
let gcd = 0;
for (let i = 0; i <= min; i++) {
  if (a % i == 0 && b % i == 0) {
    gcd = i;
  }
}
console.log(gcd);

let sum1 = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum1 += i;
  }
}
console.log(sum1);

("thequickbrownfoxjumpsoverthelazydog");
("thequickbrownfxjmpsvlazydg");
function lockitu(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (output.indexOf(str.charAt(i)) == -1) {
      output += str.charAt(i);
    }
  }
  return output;
}
console.log(
  lockitu("zse5xdrcyfvtgbhinjmko,yetjykjehrwyueirtluj.hxgfdhsghrtykulj")
);

// let a = 4;
while (true) {
  a++;
  if (a > 12) break;
}

// 1 1 1 1 1 1
// 2 2 2 2 2 2
// 3 3 3 3 3 3
for (let i = 1; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    console.log(i);;
  }
}
