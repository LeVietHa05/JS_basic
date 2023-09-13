# 1. ví dụ cho định nghĩa
``` jsx
array = [1, 'something', true, [1, 2, 3, 'string'], {key : value}];
```
# 2. Cú pháp 
## 2.1. Khởi tạo
``` jsx 
arrayName1 = [1, 2, 3]; //mảng có 3 phần tử : 1, 2, 3 
arrayName2 = new Array(3) //mảng có 3 phần tử undefined
arrayName2[0] = 'js'; //phần tử 0 là 'js'
arrayName2[1] = 'c++'; //phần tử 1 là 'c++'
arrayName2[2] = 'C#'; //phần tử 2 là 'c#'
arrayName3 = new Array('js', 'c++', 'python')
```
## 2.2. truy xuất dữ liệu trong mảng
``` jsx
array[index];
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
primes[0]; // 2
primes[3]; // 7
primes[primes.length - 1]; // 37
primes[150]; // undefined
```
## 2.3. Methods
### a, push, pop
``` jsx 
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 
// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);


const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']
```
### b, unshift, shift 
``` jsx 
// Adding a single element:
const cart = ['apple', 'orange'];
cart.unshift('pear'); 
// Adding multiple elements:
const numbers = [1, 2];
numbers.unshift(3, 4, 5);

const ingredients = ['eggs', 'flour', 'chocolate'];
const poppedIngredient = ingredients.shift(); //'eggs'
console.log(ingredients); // ['flour','chocolate']
```
### c, concat
``` jsx
const num1 = [1,2,3];
const num2 = [4,5,6]
const num = num1.concat(num2) //[1,2,3,4,5,6]
```
### d, Slice
``` jsx
const num3 = num.slice(3) // [4,5,6]
const num4 = num.slice(2, 4) //[3,4]
const num5 = num.slice(0, -1) //[1,2,3,4,5]
```
### e, splice
``` jsx
const months = ['Jan', 'March', 'April', 'June'];
// inserts at index 1
months.splice(1, 0, 'Feb'); //["Jan", "Feb", "March", "April", "June"]
// replaces 1 element at index 4
months.splice(4, 1, 'May'); //["Jan", "Feb", "March", "April", "May"]
```
### f, reverse
``` jsx 
const array1 = ['one', 'two', 'three'];
const reversed = array1.reverse(); //["three", "two", "one"]
console.log('array1:', array1); //["three", "two", "one"]
```
### g, includes
``` jsx 
const array1 = [1, 2, 3];
console.log(array1.includes(2)); //true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); //false
```
### h, indexOf
``` jsx
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));//1
// start from index 2
console.log(beasts.indexOf('bison', 2)); //4
console.log(beasts.indexOf('giraffe')); //-1
```
### i, sort
``` jsx 
const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log(months.sort()); //["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
console.log(array1.sort()); //[1, 100000, 21, 30, 4]
```
## 2.4. Rest param
``` jsx 
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //10

function myFun(a, b, ...manyMoreArgs) {
  console.log("a,", a)
  console.log("b,", b)
  console.log("manyMoreArgs,", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"]
```
## 2.5. Spread syntax
``` jsx
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = [...arr1] // [0, 1, 2]
let arr4 = [12, ...arr3] //[12, 0, 1, 2]

arr1 = [...arr1, ...arr2]; //[0, 1, 2, 3, 4, 5]
arr1 = [...arr2, ...arr1]; //[3,4,5,0,1,2]
```

## 2.6. Destructuring syntax
``` jsx
const foo = ['one', 'two'];
const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined

let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

# 3. Bài tập
## bài 1: Cho mảng sau. Thực hiện các yêu cầu sau và in ra màn hình.
``` jsx 
fruits = [’guava’, ‘dragon fruit’, ‘strawberry’, ‘orange’]
```
1) Thêm phần tử ‘mango’ vào cuối mảng
2) Xóa phần tử cuối cùng của mảng
3) Xóa phần tử đầu tiên của mảng
4) Thêm vào đầu mảng phần tử ‘apple’
5) Kiểm tra xem mảng có chứa phần tử ‘strawberry’ hay không. Nếu có thì in ra “YES”, ngược lại in ra “NO”.
6) Tìm vị trí của phần tử ‘strawberry’
7) Đảo ngược các phần tử của mảng
8) In ra màn hình 2 phần tử cuối cùng
9) Sắp xếp lại mảng theo thứ tự alphabet
## bài 2: Cho 1 mảng các số tự nhiên datas. In ra “All elements are even number” nếu tất cả các phần tử của mảng là số chẵn.
datas = [2, 3, 4, 5, 6]
or datas = [2, 4, 6, 8]

## bài 3: cho mảng: 
``` jsx
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
```
hãy thực hiện các yêu cầu sau bằng cách viết hàm có khả năng làm được hết các việc này. :)))
1) hãy sắp xếp lại mảng trên theo thứ tự tăng dần của libraryID
2) hãy sắp xếp lại mảng trên theo thứ tự giảm dần của libraryID
3) hãy sắp xếp lại mảng trên theo thứ tự tăng dần của tên tác giả
4) hãy sắp xếp lại mảng trên theo thứ tự giảm dần của tên tác giả
5) hãy sắp xếp lại mảng trên theo thứ tự tăng dần của title
6) hãy sắp xếp lại mảng trên theo thứ tự giảm dần của title