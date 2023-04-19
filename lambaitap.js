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


