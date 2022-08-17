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

const characterOne = {
  name: 'Tony Stark',
  role: 'Iron man',
  abilities: ['genius', 'rich', 'engineer'],
  level: 10
}
let keyProps = 'special'
const student = {
  "name": "Nguyen Van A",
  age: 18,
  "main-role": ["Support", "Entry"],
  1: 'first',
  [keyProps]: 'special key' //phai dung [] neu muon key la bien
}
console.log(student[keyProps])  
console.log(student.special);
console.log(student['special'])

for (key in student) console.log(student[key]);

let y =10;
arr = [y, 1, 'asf', [24, 'y', y, [2]]];
console.log(arr);

arr1 = new Array(3, 1, -1, 1000);
// for (let i = 1; i< 100; i++) arr1.unshift(i);
// for (let i =0; i< 50; i++) arr1.shift();
// arr1.unshift('iuasbf');
// // let biLayRa = arr1.shift()
// console.log(arr1.shift());

arr2 =[1];
arr3 = [4];
arr5 = arr3.concat(arr2, arr1)
console.log(arr5.sort( function (a,b) {
  return a- b;
}));
let i = arr5.splice(1,0,'5','214')
// console.log(i);

arr7 = [ 'ba','ab', 'c', 'd',1]
console.log(arr7.sort());

function restParam(a, b, ...restArray) {
  console.log('abc');
}

datas = [2,4,3,6,8];
let isEven = true;
// for (let i = 0; i < datas.length ; i ++) {
//   if (datas[i] % 2 === 0) ;
//   else isEven = false;
// }
// console.log(isEven);

for (i of datas) {
  if (i % 2 === 0) ;
  else isEven = false;
}
console.log(isEven);

for (i in datas) {
  if (datas[i] % 2 === 0) ;
  else isEven = false;
}

let testArray2 = [-3,8,7,6,5,-4,3,2,1];
//output: [-4, -3, 1, 2, 3, 5, 6, 7, 8]

const cart = ['apple', 'orange'];
cart.push('pear'); 
let popped = cart.pop()
console.log(popped);
const num1 = [1,2,3];
const num2 = [4,5,6]
const num = num1.concat(num2, ["hiii", 123, true]) //[1,2,3,4,5,6]
console.log(num);

num1.sort(function(a,b) {
  return a -b;
})