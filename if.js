// if (condition) {
//     //statement
//     //code
// } else {
//     //statement
// }

switch (age) {
  case 1:
    statement1;
    break;
  case 2:
    statement2;
    break;
  case 3:
    statement3;
    break;
  case 4:
  default:
    tatementDefault;
}

// 4 == '4' => '4' == '4' String == String

// 4 === '4' Number == String
let userInput = 10;

if (userInput > 0 || userInput < 9) {
  console.log("ban khong nhap gi ca");
} else {
  console.log("ban da nhap : ", userInput);
}

let max = 10 < 4 ? 1000 : 100;
console.log(max);

if (10 < 4) max = 1000;
else max = 100;

tuoi = 2
switch (true) {
  case tuoi < 3 || tuoi > 60: {
    console.log("abc");
    break;
  }
  default: {
    console.log("default");
  }
}


// 0 - 5; 5 - 10; 10 - 65; > 65

let age = 60;
let giaTien = age >= 0 && age <= 5 || age > 65 ? 'Free' : age > 5 && age <= 10 ? "$5" : age > 10 && age <= 65 ? "$10" : "$5";
console.log(giaTien);