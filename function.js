
//function declaration
function sing(a = 2, b = 2) {
  console.log(a);
  console.log(b);
  if (a % 2 == 0) {
    let a = 1;
    console.log(a);
    return "lalala";
  } else {
    return "another lalala"
  }
}

let a = 8;
//calling a function;
console.log(sing(23, 27));
console.log(a)




function sing(songName) {
  if (typeof songName !== "string") {
    console.log("hey u mother fucker, that is not a song");
    return false;
  }
  console.log(`searching for ${songName}`);
  console.log("found");
  console.log(`now playing ${songName}`);
}
let x = 10;
let a = 10;
function add(x, y) {
  let a = 5;
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  a = a + x;
  console.log(a)
  return x + y;
  console.log(x + y);
  console.log("askjb");
}
console.log(add(1, 2));
console.log(a)

function sumArray(array) {
  let total = 0;
  for (let i of array) {
    total += i;
  }
  return total;
}

function returnDay(DayToCheck) {
  const DayOfWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  if (typeof DayToCheck !== "number") return false;
  if (DayToCheck < 1 || DayToCheck > 7) return null;
  return DayOfWeek[DayToCheck];
}

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};


//reverse number 
function reverseNumber(number) {
  let reversedNumber = 0;
  while (number !== 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversedNumber;
}