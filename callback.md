## Bài 1: Viết lại hàm có chức năng tương tự

### a. map()
```jsx
for (el of arr) {
    output = el;
    return output;
}
```
### b. filter()
```jsx
for (el of arr) {
    if (true || false) return output;
}
```
### c. find()
```jsx
for (el of arr) {
    if ( el === something) return output;
}
```
### d. reduce()
```jsx
for (index in arr){
    return arr[index - 1] + arr[index]
}
```
## Bài 2: Cho đối tượng có cấu trúc sau:

```jsx
interface student{
	name:string;
	gender: string;
	rPoint: number;
	wPoint: number;
	mPoint: number;
}
```

### a. Tạo một mảng chứa tập các phần tử là đối tượng học sinh có cấu trúc như trên

### b. Viết hàm trả ra một mảng bao gồm các phần tử là tên của các học sinh nữ
arr.filter.map
### c. Viết hàm trả ra một mảng bao gồm các phần tử là thông tin của các học sinh nam
arr.filter
### d. Viết hàm trả ra một mảng bao gồm các phần tử là diểm tổng SAT và tên của các học sinh
arr.map((student)=> ({name : student.name, satPoint: student.rP + student.wP + student.mP}))
### e. Viết hàm trả ra thông tin bao gồm tên và điểm số SAT cao nhất của học sinh
arr.map((preStu, curStu) => {preStu.total > curStu.total ? preStu: curStu})
### f. Viết hàm trả ra thông tin bao gồm tên và điểm số SAT thấp nhất của học sinh nam
arr.filter.map((preStu, curStu) => {preStu.total > curStu.total ? preStu: curStu})
## Bài 3: Viết hàm chuyển đổi input → output như sau

### a.

```jsx
// Input
[
  {id: ‘a’, name: ‘Amy’},
  {id: ‘b’, name: ‘Blanche’}, 
  {id: ‘c’, name: ‘Claude’},
];
// Output
{ 
  a: {id: ‘a’, name: ‘Amy’},
  b: {id: ‘b’, name: ‘Blanche’}, 
  c: {id: ‘c’, name: ‘Claude’},
};

```

### b.
{} là truthy
```jsx
//INPUT
[true, false, 0, 1, {}, [], 'hi', ''];
//OUTPUT 
[true, 1, 'hi'] //sai
```

### c.

```jsx
// INPUT
const user = [
  { id: 1, first: 'Jon' },
  { id: 2, first: 'Joe' }, 
  { id: 3, first: 'Moe' }
];
const managers = [{ manager: 1, employees: [2, 3] }];
// OUTPUT
[ 
  { 
    manager:1,
    employees: [ 
      { id: 2, first: "Joe" }, 
      { id: 3, first: "Moe" } 
    ] 
  } 
]
```

### d.

```jsx
// Input
[
  [5, 10, 15, 20], 
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20]
]
// OUTPUT: find number display in all element. 
[5,15]
```