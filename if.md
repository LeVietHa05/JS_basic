**CẤU TRÚC ĐIỀU KIỆN**

1. Định nghĩa và ứng dụng

```jsx
let n = 5;
if (n % 2 == 0) {
  console.log("Even"); //Output: (nothing happen)
}
if (4 % 2 == 0) {
  console.log("Even"); //Output: Even
}
```

2. Các câu lệnh so sánh

```jsx
5 > 3; //true
5 < 3; //false
5 >= 5; //true
5 <= 5; //true
0 == false; //true
9 == "9"; //true, do not care about their type
9 != "9"; //false
9 === "9"; //false, care about their type
"a" > "b"; //false
//so sánh string
"A" < "Z"; //true
"Small" < "Smart"; //true, because 'l' < 'r'
"Big" < "BigBang"; //true
```

3. Các cấu trúc điều kiện

   3.1 if

```jsx
let a = 3,
  b = 5;
if (a > b) {
  console.log("a > b"); //Output: false
}
```

    3.2 if else

```jsx
let age = 16;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a kid");
}
```

## Bai 1: Cho 1 số tự nhiên a. Viết chương trình kiểm tra a là số lẻ hay chẵn

## Bai 2: Cho 3 số a, b, c. Viết chương trình để in ra số lớn nhất

```jsx
let a = 10;
if (a % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}
//Output: Even number
```

    3.3 if trong if

```jsx
let a = 9;
if(a % 2 == 1) {
  if(a % 3 == 0) {
    console.log("a chia het cho 3");
}  //Output: a chia het cho 3
```

    3.4 if - else if

Ví dụ : Viết chương trình để xem một năm bất kỳ có là năm nhuận hay không.

```jsx
if(dayOfWeek == 1) {
    console.log("Mon");
}
else if(dayOfWeek == 2) {
    console.log("Tue");
}
else if(dayOfWeek == 3) {
    console.log("Wed");
}
else if(dayOfWeek == 4) {
    console.log("Thu");
}
else if(dayOfWeek == 5) {
    console.log("Fri");
}
else if(dayOfWeek == 6) {
    console.log("Sat");
}
else(dayOfWeek == 7) {
    console.log("Sun");
}
```

4. Truthy và falsy

```jsx
boolean(true); //true
boolean({}); //true
boolean([]); //true
boolean(25); //true
boolean("0"); //true
boolean("false"); //true
boolean(-42); //true
boolean(Infinity); //true
boolean(-Infinity); //true

boolean(false); //false
boolean(0); //false
boolean(-0); //false
boolean(""); //false
boolean(null); //false
boolean(undefined); //false
boolean(NaN); //false
```

5. AND, OR, & NOT

```jsx
// and: &&
1 <= 4 && "a" === "a"; //true
9 > 10 && 9 >= 9; //false
"abc".length === 3 && 1 + 1 === 4; //false
true && true; //true
true && false; //false
false && false; //false
// or: ||
1 !== 1 || 10 === 10; //true
10 / 2 === 5 || null; //true
0 || undefined; //false
true || true; //true
true || false; //true
false || false; //false
// not: !
!null; //true
!(0 === 0); //false
!(3 <= 4); //false
```

## bai 3: điền password sao cho màn hình in ra VALID PASSWORD

```jsx
const password = "điền pass vào đây, và chỉ sửa ở đây thôi";
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD");
}
```

## bai 4: Viết chương trình tính giá vé vào công viên cho các độ tuổi khác nhau

0-5: free
5-10: $10
10-65: $20
65+: free

```jsx
//0-5 free
//5-10 $10
//10-65 $20
//65+ free
const age = 5;
if(sửa điều kiện ở đây) {
    console.log("FREE");
} else if (sửa điều kiện ở đây) {
    console.log("$10");
} else if (sửa điều kiện ở đây) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}
//output: $10
```

6. Toán tử 3 ngôi

```jsx
let a = 5;
let b = 3;
let c = a < b ? a : b;
//the same as
if (a < b) {
  c = a;
} else {
  c = b;
}
console.log(c); //3
```

7. Toán tử 3 ngôi lồng nhau

```jsx
let a = 5;
let b = 3;
let c = a < b ? (a < 0 ? 0 : a) : b;
//the same as
if (a < b) {
  if (a < 0) {
    c = 0;
  } else {
    c = a;
  }
} else {
  c = b;
}
console.log(c); //3
```

## bai 5 : viết toán tử 3 ngôi

```jsx
//before:
let exp = 3;
let salary;
if (exp > 3) salary = 1000;
else salary = 500;
console.log(salary); //500
//khi su dung toan tu 3 ngoi
let exp = 3;
viết toán tử 3 ngôi ở đây
console.log(salary) //500
```

8. Switch case

```jsx
//cu phap switch case
switch (expression) {
  case value1:
    //do something
    break;
  case value2:
    //do something
    break;
  case value3:
    //do something
    break;
  default:
    //do something
    break;
}
```

Ví dụ : Cho 1 số từ 1 đến 7. Viết chương trình sử dụng switch case để in ra thứ trong tuần như sau:

1 ⇒ Monday

2 ⇒ Tuesday

3 ⇒ Wednesday

4 ⇒ Thursday

5 ⇒ Friday

6 ⇒ Saturday

7 ⇒ Sunday

```jsx
let dayOfWeek;
switch (dayOfWeek) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thu");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("invalid value.");
    break;
}
```