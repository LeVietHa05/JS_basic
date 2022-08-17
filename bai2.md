**BÀI 2: HÀM VÀ MÔ HÌNH HÓA BÀI TOÁN**

Ví dụ 0: Viết chương trình sử dụng hàm để in ra màn hình “Hello”

Input: none

Output: “Hello”

Ví dụ 1: viết chương trình tính chu vi và diện tích hình chữ nhật sử dụng hàm.

```jsx
//chu vi va dien tich cua hinh chu nhat
function circumference(a, b) {
    return 2 * (a + b);
}
function area(a, b) {
   return a * b;
let a = 3, b = 4;
console.log(area(a, b));   //12
console.log(circumference(a, b));  //14

```

ví dụ 2: Cho 2 số a và b. Sử dụng hàm sum để tính tổng của a và b và in kết quả.

Ví dụ:

- Input: a=5, b=4. Output: 9
- Input: a=1, b=2. Output: 3

```jsx
//Defining function
function sum(a, b) {
    let total = a + b;
    return total;
}
//Calling function
console.log(sum(6, 4));   //Output: 10
console.log(sum(25, 75)); //Output: 100
```

Ví dụ 3: Sử dụng function getAbs để lấy giá trị tuyệt đối của biến x và in ra màn hình

- tham số mặc định của hàm

```jsx
//Defining function
function sum(x = 3, y = 7) {
    return x + y; //return sum
}
//Calling function
console.log(sum(5, 5));   //10, x takes 5 and y takes 5
console.log(sum(7);       //14, x takes 7 and y takes defalut value 7
console.log(sum());       //10, x takes default value 3 and y takes default value 7
```

- sử dụng biểu thức làm giá trị mặc định

```jsx
//Defining function
function sum(x = 3, y = x, z = x + y) {
     console.log(x + y + z);
}
//Calling function
sum(); //12
//The default value of x is 1
//The default value of y is set to x parameter
//The default value of z is the sum of x and y

```

- Truyền giá trị hàm làm giá trị mặc định

```jsx
const sum = 15;
const calculate = function(x, y = x*sum) {
      return x + y;
}
const result = calculate(10);
console.log(result);   //160

//10 is passed to the calculate() function
//x becomes 10, and y becomes 150 
//The result will be 160

```

- phạm vi của biến

```jsx
function sum(x, y) //function parameters x and y are local variables
{
    let z = x + y; // z created and is a local variable too
} //z, y, and x destroyed here
```

- return trong hàm

```jsx
//Defining function
function fullName(firstName, lastName) {
     return (firstName + " " + lastName);
}
//Calling function
console.log(fullName("Robert", "Pattinson"));   //Output: Robert Pattinson
console.log(fullName("Tobey");    //Output: Tobey undefined
```

các bước mô hình hóa bài toán