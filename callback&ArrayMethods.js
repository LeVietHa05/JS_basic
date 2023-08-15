/**
 * forEach: vòng lặp for cho mảng nhưng không có return
 * map : vòng lặp for cho mảng nhưng có return một mảng mới.
 * filter: vòng lặp cho mảng, có return mảng mới với các phần tử thỏa mãn điều kiện
 * arrowFunction : code cho ngắn và đẹp hơn.
 * setTimeOut & setInterval
 * bai tap chon loc ki tu
 * some: true if any of the array elements that pass the test function
 * every: true if all of the array elements that pass the test function
 * reduce: rút gọn 1 array và trả về 1 giá trị, bằng cách nào thì tự mình quy định
 * arrowFunction và 'this'4
 * setTimeout: chay 1 ham callback sau khoang thoi gian dinh truoc
 * setInterval: chay 1 ham callback sau khoang thoi gian dinh truoc va co lap lai
 */

let numbers = [247, 3211, 158, 654, 11, 894, 915, 321, 123];

const movie = [
  {
    title: "Alien",
    score: 80,
  },
  {
    title: "IronMan",
    score: 95,
  },
  {
    title: "Spidey",
    score: 95,
  },
];

const kvArray = [
  { num: 1, score: 10 },
  { num: 2, score: 20 },
  { num: 3, score: 30 },
];


//forEach & arrow function
numbers.forEach((el, index, arr) => {
  if (el % 2 === 0) {
    console.log(el); //158 654 894
    console.log(index); //2 3 5
    console.log(arr[index]); //158 654 894
  }
});
//forEach & function
numbers.forEach(function (num) {
  if (num % 2 === 1) {
    console.log(num);
  }
});
//forEach & an array of object
movie.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

//map & function
const squaredNumber1 = numbers.map(function (x) {
  return x * x;
});
//map & arrow function
const squaredNumber2 = numbers.map((x) => x * x);
//map & array of object
const mapObject = movie.map((x) => x.title.toUpperCase());
//cái này rất khó hiểu này:
const reformattedArray = kvArray.map(({ num, score }) => ({ [num]: score }));
const reArray = kvArray.map((el) => ({ [el.num]: el.score }));
//nâng cao cho map: dùng map cho string
//luyện tập với string luôn
const map = Array.prototype.map;
const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));
console.log(charCodes);
//luyện tập với Number
console.log(["1.1", "2.2e20", "as213"].map(Number));

//arrow function
const add = (x, y) => x + y;
const add1 = (x, y) => {
  return x + y;
};
const add2 = function (x, y) {
  return x + y;
};

const square = (x) => {
  x * x;
};
const square1 = x => x * x;

const rollDice = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDice());
//6 phiên bản khác nhau của cùng 1 hàm, với số ký tự giảm dần
function isEven5(x) {
  return;
}
const isEven = function (x) {
  //bản full không che
  return x % 2 === 0;
};
const isEven1 = (x) => {
  //bản rút gọn dùng arrow
  return x % 2 === 0;
};
const isEven2 = x => {
  //bản rút gọn bỏ ()
  return x % 2 === 0;
};
const isEven3 = x => {
  x % 2 === 0;
}; //ngầm hiểu là có return, chỉ được có một dòng code duy nhất
const isEven4 = x => x % 2 === 0; //ngầm hiểu là có return, chỉ được có một dòng code duy nhất.

//setTimeOut && setInterval
setTimeout(() => {
  console.log("Hello!!"); //hello sau 3 giay, chay 1 lan, ham nay la ham callback
  //phan code phia sau van chay ngay lap tuc
}, 3000);
console.log("gooodbye"); //dong code nay se chay ngay, khong co delay gi.

/**luu id lai de co the dung lai */
let i = 0;
const id = setInterval(() => {
  console.log("again! 2s đã trôi qua và thực hiện lại hàm này"); //chay di chay lai voi khoang thoi gian 2s
  i++;
  if (i == 5) clearInterval(id);
}, 2000);

//filter: loc mang
const goodMovie = movie.filter((m) => m.score > 90);
//filter && map
const goodTitle = movie.filter((m) => m.score > 90).map((m) => m.title);

//bai tap viet ham loc ra nhung chuoi ngan hon 10 ki tu
const testString = [
  "awfjbnsjaojogjaow",
  "jsavf",
  "asjf2123asc",
  "asfsa",
  "q1raacasvasasf",
];
/**
 * @param {array} x
 * @returns array of element that have less than 10 letters
 */
const validUserNames = (x) =>
  x.filter((strings) => strings.length < 10).forEach((x) => console.log(x));

validUserNames(testString);
// some && every
numbers.some((e) => e > 5); //true
console.log(numbers.some((e) => e > 5)); //true
console.log(numbers.every((e) => e < 500)); //fasle
console.log(movie.some((e) => e.score > 90)); //true

/**
 * bài tập kiểm tra mảng toàn số chẵn
 * @param {array} x
 * @returns true if all num in array is even, else false
 */
const isAllEven = (x) => x.every((num) => num % 2 === 0);
const isAllEven2 = (x) => !x.some((num) => num % 2 === 1);

//reduce
const sum = numbers.reduce((total, currentvalue) => total + currentvalue);

//đoạn code trên tương đương với đoạn dưới đây
let sum1 = 0;
for (num of numbers) {
  sum1 += num;
}
//Luyện tập: tìm số bé nhất trong mảng.
const minNum = numbers.reduce((min, currentvalue) =>
  min > currentvalue ? currentvalue : min
);
console.log(minNum);
//trải phẳng mảng 2 chiều, hoặc nhiều hơn
let testArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];
//chú ý đến việc ở đây sử dụng giá trị ban đầu cho pre ([] là  giá trị ban đầu)
let flattered = testArray.reduce((pre, cur) => pre.concat(cur), []);
/**
 * vòng lặp 1: pre = [] cur = [0,1] => [].concat[0,1] = [0,1]
 * vòng lặp 2: pre = [0,1] cur = [2,3] => [0,1,2,3]
 * vòng lăp 3: pre = [0,1,2,3] cur = [4 ,5] => return [0 1 2 3 4 5]
 * flattered = [0 1 2 3 4 5]
 */
console.log(flattered);

//This in arrowfunction vs this in function
const person = {
  firstName: "LeViet",
  lastName: "Ha",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`; //this ở đây sẽ trỏ vào obj person (LeViet Ha)
  },
  fullName1: () => `${this.firstName} ${this.lastName}`, //this ở đây sẽ trỏ vào obj window (undefind undefind)
  shoutName: function () {
    setTimeout(function () {
      console.log(this); //this ở đây sẽ trỏ vào obj window
      console.log(this.fullName); //lỗi luôn, do window không có hàm fullName()
    }, 3000);
  },
  shoutName1: function () {
    setTimeout(() => console.log(this.fullName()), 3000);
  },
};
console.log(person.shoutName1());

console.log("hello 1");
const id3 = setInterval(() => {
  console.log("hello after 3s repeat");
  setTimeout(() => {
    clearInterval(id3);
  }, 15000);
}, 3000);
console.log("hello 2");

// let obj = {
//   name: "bbbb",
//   age: 12,
// }
//   (({ name, age } = { name: "bbb", age: 14, gender: "male" }));

// console.log(name);
// // expected output: 10

// console.log(a);
// // expected output: 20

const arr = [
  [5, 10, 15, 20, 5],
  [15, 88, 1, 5, 7, 1],
  [1, 10, 15, 5, 20, 10],
  [21,124,512,1,2,12,5, 15]
];

//kiem tra trung lap trong 1 mang
const findDuplicateInArray = (arr) => {
  let result = [];
  arr.forEach((e) => {
    if (!result.includes(e)) {
      result.push(e);
    }
  });
  return result;
};


//tim ki tu trung lap trong toan bo phan tu cua mang cua mang
const findDuplicate = (arr) => {
  let test = arr.map((e) => {
    return findDuplicateInArray(e);
  });
  
  let newArr = test.reduce((pre, cur) => pre.concat(cur), []);
  //newArr: [5, 10, 15, 20, 15, 88, 1, 5, 7, 1, 10, 15, 5, 20, 21, 124, 512, 1, 2, 12, 5]
  
  let result = [];
  
  newArr.forEach((e) => {
    //count the number of times a value occurs in an array
    if (newArr.filter((x) => x === e).length === test.length ) {
      if (!result.includes(e)) {
        result.push(e);
      }
    }
  });

  return result;
};

console.log(findDuplicate(arr));

// callback 
const user = [
  { id: 1, first: 'Jon' },
  { id: 2, first: 'Joe' },
  { id: 3, first: 'Moe' }
];
const managers = [{ manager: 1, employees: [2, 3] }];

const cauC = managers.map((manager) => {
  const employees = manager.employees.map((id) => {
    return user.find((user) => user.id === id);
  });
  return { ...manager, employees };
}
);
console.log(cauC[0].manager);