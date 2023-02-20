// function twoSum(nums, target_num) {
//   let map = [];
//   let indexnum = [];

//   for (let x = 0; x < nums.length; x++) {
//     if (map[nums[x]] != null) {
//       let index = map[nums[x]];
//       indexnum[0] = index;
//       indexnum[1] = x;
//       break;
//     } else {
//       map[target_num - nums[x]] = x;
//     }
//   }
//   return indexnum;
// }
// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));
// map={
//     40: 2,
//     30: 1,
// }
// indexnum = [2,3]

let keyProps = "special";
const student = {
  name: "Nguyen Van A",
  age: 18,
  "main-role": ["Support", "Entry"],
  1: "first",
  [keyProps]: "special key", //phai dung [] neu muon key la bien
};
console.log(student[keyProps]);
console.log(student.special);
console.log(student["special"]);

for (key in student) console.log(student[key]);

let y = 10;
let af = "safkb";
let bas = true;
arr = [y, 1, "asf", [24, "y", y, [2]]];
console.log(arr);

arr1 = new Array(3, 1, -1, 1000);
// for (let i = 1; i< 100; i++) arr1.unshift(i);
// for (let i =0; i< 50; i++) arr1.shift();
// arr1.unshift('iuasbf');
// // let biLayRa = arr1.shift()
// console.log(arr1.shift());

arr2 = [1];
arr3 = [4];
arr5 = arr3.concat(arr2, arr1);
console.log(
  arr5.sort(function (a, b) {
    return a - b;
  })
);

let i = arr5.splice(1, 0, "5", "214");
// console.log(i);

arr7 = ["ba", "ab", "c", "d", 1];
console.log(arr7.sort());

function restParam(a, b, ...restArray) {
  console.log("abc");
}

datas = [2, 4, 3, 6, 8];
let isEven = true;
// for (let i = 0; i < datas.length ; i ++) {
//   if (datas[i] % 2 === 0) ;
//   else isEven = false;
// }
// console.log(isEven);

for (i of datas) {
  if (i % 2 === 0);
  else isEven = false;
}
console.log(isEven);

for (i in datas) {
  if (datas[i] % 2 === 0);
  else isEven = false;
}

let testArray2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
//output: [-4, -3, 1, 2, 3, 5, 6, 7, 8]

const cart = ["apple", "orange"];
cart.push("pear");
let popped = cart.pop();
console.log(popped);
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num = num1.concat(num2, ["hiii", 123, true]); //[1,2,3,4,5,6]
console.log(num);

num1.sort(function (a, b) {
  return a - b;
});

//toan tu 3 ngoi

age = 69;
cost = age < 6 ? 0 : age < 15 ? 20 : age < 60 ? 30 : 0;
console.log(cost);

let age = console.log(`${age >= 18 ? "Du tuoi vao trang web" : "cut"}`);
let string = "current time is hour minute second";
let hour = 4;
let minute = 5;
let second = 45;
console.log(
  `current time is ${hour < 10 ? `0${hour}` : `${hour}`} ${
    minute < 10 ? `0${minute}` : `${minute}`
  } ${second < 10 ? `0${second}` : `${second}`}`
);

function splitName(str) {
  return str.split(" ");
}

function getFirstChar(str, num) {
  return str.slice(0, num + 1);
}

function vietTatTen(str) {
  let splitted = splitName(str);
  let hoVietTat = getFirstChar(splitted[0], 0);
  let tenDemVietTat = getFirstChar(splitted[1], 0);
  let ten = splitted[2];
  return hoVietTat + tenDemVietTat + " " + ten;
}

console.log(vietTatTen("Le Viet Ha"));

//viet hoa chu cai dau cua cac tu trong chuoi
function vietHoaChuCaiDau(str, truongHop) {
  let splitted = str.split(" ");
  switch (truongHop) {
    case 1: {
      return (
        splitted[0].charAt(0).toUpperCase() +
        splitted[0].slice(1) +
        " " +
        splitted[1].charAt(0).toUpperCase() +
        splitted[1].slice(1) +
        " " +
        splitted[2].charAt(0).toUpperCase() +
        splitted[2].slice(1)
      );
    }
    case 2: {
      let merged = "";
      for (let i = 0; i < splitted.length; i++) {
        merged +=
          splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1) + " ";
      }
      return merged;
    }
  }
}

console.log(
  vietHoaChuCaiDau(
    "le viet ha klahsf sfhao kasdhg oghiqwheklasd fhaw9eg hoiwahef oiahefk ",
    2
  )
);

const characterOne = {
  name: "Tony Stark",
  role: "Iron man",
  abilities: ["genius", "rich", "engineer"],
  level: 10,
};

function bai1A(arr) {
  for (const key in arr) {
    console.log(key);
  }
}
function bai1B(arr) {
  let m = 0;
  for (const key in arr) {
    m++;
  }
  return m;
}
bai1A(characterOne);
console.log(bai1B(characterOne));

const classroom = {
  1: {
    name: "Nguyen Van A",
    age: 16,
    gender: "M",
    favourite: ["reading", "coding", "workout"],
    abroad: true,
  },
  2: {
    name: "Nguyen Van B",
    age: 16,
    gender: "M",
    favourite: ["gaming", "coding"],
    abroad: false,
  },
  3: {
    name: "Nguyen Thi A",
    age: 17,
    gender: "F",
    favourite: ["singing"],
    abroad: true,
  },
  4: {
    name: "Nguyen Thi B",
    age: 18,
    gender: "F",
    favourite: ["writing", "music", "chatting"],
    abroad: true,
  },
};

function bai2A(obj) {
  for (let key in obj) {
    console.log(obj[key].name);
  }
}
bai2A(classroom);

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function bai10(arr, key) {
  //sort by libraryID
  if (key === "libraryID") {
    arr.sort((a, b) => {
      return a.libraryID - b.libraryID;
    });
  } else if (key === "title") {
    arr.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (key === "author") {
    arr.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });
  }
  return arr;
}

console.log(bai10(library, "author"));

url = "https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python";
function bai12(str) {
  //get protocol
  let protocol = str.slice(0, str.indexOf(":"));
  //get domain
  let domain = str.slice(str.indexOf("//") + 2, str.indexOf("/", 8));
  //get query
  let query = str.slice(str.indexOf("?") + 1);
  //get  params in object
  let params = {};
  let splitted = query.split("&");
  for (let i = 0; i < splitted.length; i++) {
    let key = splitted[i].slice(0, splitted[i].indexOf("="));
    let value = splitted[i].slice(splitted[i].indexOf("=") + 1);
    params[key] = value;
  }
  //get file name
  let fileName = str.slice(str.lastIndexOf("/") + 1, str.indexOf("?"));
  //get hash
  let hash = str.slice(str.indexOf("#") + 1);
  //get path
  let path = str.slice(str.indexOf("/", 8), str.indexOf("?"));
  //get port
  let port = str.slice(str.indexOf(":") + 3, str.indexOf("/", 8));
  return {
    protocol: protocol,
    domain: domain,
    query: query,
    params: params,
    fileName: fileName,
    hash: hash,
    path: path,
    port: port,
  };
}
console.log(bai12(url));

let msg = "0369677432";
console.log(msg.slice(-9));


//test fetch api to get qr code
fetch(
  "https://api.qr-code-generator.com/v1/create?access-token=7Ne9kloCEcMgD21G5Y4a6gtNx6gpGUAMASzu34AlmzigWrOPOVSl9_8k1i63puT0",
  {
    method: "POST",
    body: {
      frame_name: "no-frame",
      qr_code_text: "https://0f89-2a09-bac1-7aa0-50-00-247-58.ap.ngrok.io",
      img_format: "svg",
    },
  }
)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
