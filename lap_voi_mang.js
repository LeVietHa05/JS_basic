// sap xep mang tu be den lon
let arr1 =  [-3, 8, 7, 6, 5, -4, 3, 2, 1]; //mang can sap xep
let arr2 = []; //mang ket qua
let min = arr1[0]; //khoi tao gia tri nho nhat
let pos;
let max = arr1[0]; //khoi tao gia tri lon nhat
for (num of arr1) {
  if (max < num) max = num; //tim so lon nhat
}
console.log(max); // bt: tim so nho nhat

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      //bo qua cac phan tu da duoc sasp xep
      if (min > arr1[j]) {
        min = arr1[j]; //thay doi gia tri min
        pos = j; //thay doi vi tri min
      }
    }
  }
  arr2[i] = min; //them gia tri nho nhat vao mang ket qua
  arr1[pos] = "x"; //danh dau cac phan tu da duoc sap xep
  min = max; //gan lai gia tri cho min cho vong lap ke tiep
}
console.log(arr2);

//tim phan tu xuat hien nhieu nhat
let array1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < array1.length; i++) {
  for (let j = i; j < array1.length; j++) {
    if (array1[i] == array1[j]) m++;
    if (mf < m) {
      mf = m;
      item = array1[i];
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");

// in ra mang 2 chieu
const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let i in a) {
  console.log(`row ${i}`);
  for (let j in a[i]) {
    console.log(` ${a[i][j]}`);
  }
}

//loại bỏ ký tự trùng, sắp xếp theo thứ tự, liệu có dùng được cho sắp xếp không
// thử sắp xếp luôn, không được nếu có số âm, do trong obj thì sắp xếp key theo kiểu so sánh utf 16
/**
 *
 * @param {array} num
 * @returns mảng đã loại bỏ phần tử bị trùng
 */
function removeDuplicates(num) {
  let x,
    len = num.length,
    out = [],
    obj = {};
  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
let Mynum = [1, 2, 2, -2, 4, 5, 4, 7, 8, 7, 3, 6, -2, "a", "a", "b"];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

// loại bỏ các phần tử giống nhau trong mảng 
const arr = [1, 1, 2, 6, 3, 4, 5, 6, 6, 6, 7];
// const newArray = arr.reduce((previous, actual) => {
//   if (!previous.includes(actual)) {
//     previous.push(actual);
//   }
//   return previous;
// }, []);
// console.log(newArray);

//viết code in ra màn hình phần tử xuất hiện nhiều nhất trong mảng 
//và số lần xuất hiện nó
//output: a (5 times)
let testArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let phanTuXuatHienNhieuNhat  ;
let soLanXuatHien = 0;
let soLanXuatHienNhieuNhat = 1;
for (e of testArray) {
  for (let i = testArray.indexOf(e) ; i < testArray.length; i ++){
    if ( e == testArray[i]) {
      soLanXuatHien ++;
    }
    if ( soLanXuatHien > soLanXuatHienNhieuNhat) {
      phanTuXuatHienNhieuNhat = e;
      soLanXuatHienNhieuNhat = soLanXuatHien;
    }
  }
  soLanXuatHien = 0;
}
console.log(phanTuXuatHienNhieuNhat);
console.log(soLanXuatHienNhieuNhat);

//tính tổng và tích
let testArray2 = [-3,8,7,6,5,-4,3,2,1];
//output: [-4, -3, 1, 2, 3, 5, 6, 7, 8]
let s=0; p = 1;
for (i in testArray2){
  s += testArray2[i];
  p *= testArray2[i];
}
console.log(s);
console.log(p);
for (let i =0; i< testArray2.length; i ++){

}

obj = {
  1: 0,
  2: 0,
  3:0,
  4:0,
  5:0,
}

const arr6 = [12,15,46,758,123,415,1]
for (let item of arr6) {
  setTimeout(()=> console.log(item), item/10)
}

//vòng lặp cho mảng sử dụng length
const animals = ["dog", "cat", "lion", "cat", "tiger"];
for (let i = 0 ; i < animals.length; i++) {
	console.log(i, animals[i]);
}
for (let animal of animals) {
  console.log(animal);
}

for (let i in animals) {
  console.log(i, animals[i]);
}

//xóa ký tự trùng nhau
function deletekytu (arr) {
  let output = [];
  for (let i = 0; i < arr.length; i ++){
    if (output.indexOf(arr[i]) == -1) {
      output.push(arr[i])
    }
  }

  return output;
}

// console.log(deletekytu([1, 2, 2, -2, 4, 5, 4, 7, 8, 7, 3, 6, -2, "a", "a", "b"]));


//bubble sort
/**
 * 
 * @param {Array} arr mang dau vao
 * @returns mang da sap xep
 */
function bubbleSort(arr) {
  let sovonglap = 0;
  for (let i =0; i < arr.length  ; i ++){
    let swapped = Boolean(true);
    for (let j = 0; j < arr.length - i - 1; j ++ ) {
      sovonglap ++;
      if ( arr[j] > arr[j+1]){
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];  //trao doi vi tri
        swapped = false;
      }
    }
    if (swapped) break;
  }
  console.log(sovonglap);
  return bubbleSort()
}
let arr11 =  [-3,8,7,6,5,-4,3,2,1]
// bubbleSort(arr11);
// console.log(arr11);

//selection sort

function selectionSort (arr) {
  for(let i = 0; i < arr.length ; i ++) {
    let minimun_index = i;
    for ( let j = i +1; j < arr.length; j++) {
      if (arr[j] < arr[minimun_index]) {
        minimun_index = j;
      }
    }
    [arr[i], arr[minimun_index]] = [arr[minimun_index], arr[i]]
  }
}
selectionSort(arr11);
console.log(arr11);