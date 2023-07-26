let fruits = ["guava", "draagon fruit", "strawberry", "orange"];
fruits.push("mango");
fruits.pop("mango");
fruits.shift("guava");
fruits.unshift("apple");
if (fruits.includes("strawberry")) {
  console.log("YES");
} else {
  console.log("NO");
}
fruits.indexOf("strawberry");
fruits.reverse();
console.log(fruits[(fruits.length - 1, fruits.length - 2)]);
fruits.sort();

function evenNumber(...ABC) {
  for (let i = 0; i < ABC.length; i++) {
    if (ABC[i] % 2 === 0);
    else {
      return false;
    }
  }
  return true;
}
if (evenNumber(23, 45, 11, 20)) {
  console.log("all elements are even");
} else {
  console.log("contains odd");
}

const str = "thequickbrownfoxjumpsoverthelazydog";

function lockitu(str) {
  let output = "";
  for (char of str) {
    if (output.indexOf(char) === -1) {
      output += char;
    }
  }
  return output;
}

console.log(lockitu(str));

const animals = ["dog", "cat", "lion", "cat", "tiger"];
// for (let i = 0 ; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
for (let x of animals) {
  console.log(x);
}
for (let i in animals) {
  console.log(i);
}

//viet ham co chuc nang tuong tự map
function hamMap(dauvao) {
  let daura = [];
  for (i of dauvao) {
    daura.push(i);
  }
  return daura;
}

//bai tap phan callback
obj = [
  {
    name: "abc",
    gender: "xcz",
    rPoint: 400,
    wPoint: 200,
    mPoint: 233,
  },
  {
    name: "abgsdgc",
    gender: "xcz",
    rPoint: 300,
    wPoint: 280,
    mPoint: 310,
  },
  {
    name: "absgdsc",
    gender: "xczsdg",
    rPoint: 360,
    wPoint: 190,
    mPoint: 250,
  },
  {
    name: "asdbc",
    gender: "xczsdg",
    rPoint: 250,
    wPoint: 350,
    mPoint: 400,
  },
];
//
function diemSAT(arr) {
  return arr.map(({ name, rPoint, wPoint, mPoint }) => ({
    [name]: rPoint + wPoint + mPoint,
  }));
}
const maxSat = Math.max(...diemSAT(obj).map((el) => Object.values(el)));
console.log(obj.find(el => el.satPoint === maxSat));

function thongTinHocSinhNam(arr) {
  let output = arr.filter(function (e) {
    e.gender == "xczsdg";
  });
  return output;
}

const tenHocSinhNu = (arr) =>
  arr.filter((e) => e.gender == "xczsdg").map((e) => e.name);
function hocSinhNam(arr) {
  arr
    .filter((e) => e.gender == "xczsdg")
    .map((e) => {
      console.log(`ten hoc sinh: ${e.name}`);
      console.log(`gioi tinh: ${e.gender}`);
      console.log(`diem doc: ${e.rPoint}`);
      console.log(`diem viet: ${e.wPoint}`);
      console.log(`diem toan: ${e.mPoint}`);
    });
}

function diemSAT(arr) {
  return arr.map((e) => ({
    name: e.name,
    satPoint: e.rPoint + e.mPoint + e.wPoint,
  }));
}
console.log(diemSAT(obj));
function maxSat(arr) {
  const output = arr.reduce((pre, cur) =>
    pre.satPoint > cur.satPoint ? pre : cur
  );
  return [output.name, output.satPoint];
}
function minSat(arr) {
  const output = arr
    .filter((el) => el.gender == "xcz")
    .reduce((pre, cur) => (pre.satPoint < cur.satPoint ? pre : cur));
  return [output.name, output.satPoint];
}

console.log(minSat(obj));


obj1 = [
  {
    name: "abc",
    gender: "xcz",
    rPoint: 400,
    wPoint: 200,
    mPoint: 233,
  },
  {
    name: "abgsdgc",
    gender: "xcz",
    rPoint: 300,
    wPoint: 280,
    mPoint: 310,
  },
  {
    name: "absgdsc",
    gender: "xczsdg",
    rPoint: 360,
    wPoint: 190,
    mPoint: 250,
  },
  {
    name: "asdbc",
    gender: "xczsdg",
    rPoint: 250,
    wPoint: 350,
    mPoint: 400,
  },
];

function maxSat(arr, wantName) {
  if (wantName) {
    return arr.reduce((pre, cur) => {
      let satPointA = pre.rPoint + pre.wPoint + pre.mPoint;
      let satPointB = cur.rPoint + cur.wPoint + cur.mPoint;
      return satPointA > satPointB ? pre : cur;
    }).name
  } else {
    return arr.reduce((pre, cur) => {
      let satPointA = pre.rPoint + pre.wPoint + pre.mPoint;
      let satPointB = cur.rPoint + cur.wPoint + cur.mPoint;
      return satPointA > satPointB ? pre : cur;
    })
  }
}

console.log(maxSat(obj1, false))

//bai tap ben callback (object sua doi)
const classroom = [
  {
    name: 'Nguyen Van A',
    age: 16,
    gender: "M",
    favourite: ['reading', 'coding', 'workout'],
    abroad: true,
  },
  {
    name: 'Nguyen Van B',
    age: 16,
    gender: "M",
    favourite: ['gaming', 'coding'],
    abroad: false,
  },
  {
    name: 'Nguyen Thi A',
    age: 17,
    gender: "F",
    favourite: ['singing'],
    abroad: true,
  },
  {
    name: 'Nguyen Thi B',
    age: 18,
    gender: "F",
    favourite: ['writing', 'music', 'chatting'],
    abroad: true,
  },
]

const codeingStudents = classroom.map((el) => {
  if (el.favourite.includes('coding')) {
    return el
  } else {

  }
})
console.log(codeingStudents);



// bt: kiem tra so luong ky tu giong nhau trong 2 chuoi
let str1 = "gagagw"
let str2 = "aisdgfij"

/**
 * get same char?
 * @param {String} str1 string 1
 * @param {String} str2 string2
 * @returns forgot
 */
function getSameChar(str1, str2) {
  let output = {}
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    output[str1[i]] = str2.includes(str1[i])
  }
  for (let key in output) {
    if (output[key] == true) {
      for (let i = 0; i < str1.length; i++) {
        if (key == str1[i]) {
          count++
        }
      }
      for (let i = 0; i < str2.length; i++) {
        if (key == str2[i]) {
          count++
        }
      }
      output[key] = count
      count = 0
    }
  }

  return output
}
console.log(getSameChar(str1, str2));

//for loop 
for (i = 1; i < 1000; i = i * 9) {
  console.log(i)
}

//while loop 
let i = 0
do {
  console.log(i)
  i = i + 100
} while (i < 100)

let isDead = false
while (!isDead) {
  console.log("alive")
}
setTimeout(() => {
  isDead = true
})


let a = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque alias eligendi, itaque asperiores quam nam repellat fuga corporis hic omnis magnam tempore voluptatibus? Maiores recusandae sapiente hic provident eligendi tenetur"

let c = a.split(" ");
for (let i = 0; i < c.length; i++) {
  c[i] = c[i][0].toUpperCase() + c[i].slice(1).toLowerCase()
}


let b = c.join(" ")
console.log(b)

let max = Math.max(1, 2, 3, 10, 4, 5, 6, 7, 8, 9)
console.log(max)


function randomNum(a = b - 1, b = 1) {
  return 4, 6;
  return [Math.floor(Math.random() * (b - a + 1)) + a, Math.floor(Math.random() * (b - a + 1)) + a]
}

console.log(randomNum(10, 1))