//if
let a = 11;
if (a % 2 == 0) {
  console.log("a la so chan")
}
//else
else {
  console.log("a la so le")
}

//if , else if, else
let d = 13; let b = 11; let c = 12;
if (d > b) {
  if (d > c) {
    console.log("d lon nhat")
  }
} else if (b > c) {
  console.log("b lon nhat")
} else {
  console.log("c lon nhat")
}

//and or not
//&& || !

let isBoy = 'boy';
let age = 18;
if (!isBoy) {
  console.log("boy")
} else {
  console.log("get out")
}

const password = "abcdfgjegjk";
if (password.length >= 6 && password.indexOf(' ') === -1) {
  if (typeof password.charAt(0) == 'string') {
    console.log("VALID PASSWORD");
  } else {
    console.log("INCORRECT FORMAT FOR PASSWORD");
  }
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD");
}


//age for mony 
//0-5 free
//5-10 $10
//10-65 $20
//65+ free
const age = 11;
if (0 <= age && age < 5 || age >= 65) {
  console.log("FREE");
} else if (age >= 5 && age <= 10) {
  console.log("$10");
} else if (10 < age && age < 65) {
  console.log("$20");
} else {
  console.log("INVALID AGE!");
}
//output: $10

//toan tu 3 ngoi
let exp = 4;
let salary;
if (exp > 3) salary = 1000;
else salary = 500;

salary = exp > 3 ? 1000 : exp > 2 ? 800 : exp > 1 ? 500 : 300
console.log(salary); 

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

switch (true) {
  case 0 <= age && age < 5 || age >= 65: {
    console.log("FREE");
    break;
  }
  case age >= 5 && age < 10: {
    console.log("$10");
    break;
  }
  case age >= 10 && age < 65: {
    console.log("$20");
    break;
  }
  default: {
    console.log("INVALID AGE!");
  }
}
