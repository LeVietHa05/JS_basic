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
