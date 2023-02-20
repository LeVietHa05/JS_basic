# 1. định nghĩa

lặp là việc thực hiện một việc gì đó lặp đi lặp lại miễn là vẫn thỏa mãn điều kiện. 

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffd7ac94-8acb-4707-b8f6-b129b25a6df2/Untitled.png)

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c4f4263-c13e-468f-a588-80182e2d373e/Untitled.png)

# 2. các cú pháp lặp

## 2.1 for

- initialization condition: khởi tạo biến đếm, thường là let i =0;
- testing condition: điều kiện. ví dụ là i < 10;
- increment/decrement: thay đổi biến đếm, lên hoặc xuống một lượng nào đó. ví dụ là i=i+1, i*=2, ...

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba2db0e9-4a45-422d-96b1-074841b5bcc6/Untitled.png)

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/988fce2e-b223-4ae1-993c-cb1fa7bf75ea/Untitled.png)

## 2.2 while

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/39af69a4-ea6d-449d-aa30-dbf2948750b8/Untitled.png)

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17c8efb7-b3e0-4fdf-9992-11ed46847d8b/Untitled.png)

hàm while sẽ kiểm tra điều kiện trước khi vào vòng lặp nếu điều kiện đúng. 

thường thì biến điều kiện sẽ được thay đổi trong chính vòng lặp để có thể dừng vòng lặp lại, tránh lặp vô tận.

## 2.3 for .. in

lặp trong object. đây là cách để có thể duyệt qua các **key** của object

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/25a9c64e-576b-4d54-92b2-c30a88c1fa33/Untitled.png)

ví dụ: 

```jsx
// creating an Object
var languages = { first : "C", second : "Java", third : "Python", fourth : "PHP", fifth : "JavaScript" };

for (it in languages)
{
console.log(it, languages[it]);
}
```

đầu ra

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e76ec299-8568-4319-832f-9135e2c0d020/Untitled.png)

## 2.4 for ... of

- để có thể duyệt từng phần tử của mảng thì có thể sử dụng thuộc tính length của mảng

```jsx
const animals = [dog, cat, lion, cat, tiger];
for (let i = 0 ; i < animal.length; i++) {
	console.log(i, animals[i]);
}
```

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae15dcaf-377d-40f4-93a8-e63de87bd6f4/Untitled.png)

- ngoài ra thì còn có cách sử dụng for of:

hai đoạn code có tác dụng gần giống nhau, trừ việc in ra số thứ tự.

‘animal’ có thể dùng thứ khác như i, nhưng dùng những thứ có liên quan sẽ dễ kiểm soát hơn

- ngoài mảng ra thì còn có thể duyệt trên string:

```jsx
for (let animal of animals) {
	console.log(animal);
}
```

```jsx
for (let char of 'hello world') {
    console.log(char);
}
```

- nâng cao: sử dụng for ... of để duyệt phần tử trong object:

```jsx
for (let it of Object.keys(languages)) {
	console.log(it, languages[it]);
}
```

![Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/725caf3e-10b0-48e7-aafc-2101fa03e792/Untitled.png)

## 2.5 do .... while

```jsx
do
{
    statements..
}
while (condition);
```

thực hiện phần code ở dưới do rồi mới kiểm tra điều kiện. (luôn thực hiện 1 lần rồi kiểm tra điều kiện, khác while ở chỗ là while kiểm tra trước rồi mới thực hiện

## 2.6 khi nào dùng for / while

for dành cho các vòng lặp biết trước số lần thực hiện, (số cụ thể hoặc theo biến length, ...)

còn while sẽ dùng trong các trường hợp không biết trước

vd: isGameOver: không thể biết trước khi nào kết thúc vòng lặp được ⇒ dùng while 

# 3. vòng lặp vô tận, break

trong những trường hợp kiểm tra không kỹ điều kiện lặp có thể gây ra hiện tượng lặp vô tận.

vd: for (let i = 10; i ==0; i ++ ) ⇒ lặp vô tận, treo máy luôn

vì vậy cần phải kiểm tra điều kiện lặp và nên có lệnh break ở đâu đó trong dòng code để có thể dừng khi có thể. Ở dưới, khi người dùng bấm q (giả sử thế) thì vòng lặp sẽ kết thúc.

```jsx
while (true)
{
....
if (userInput === 'q') break;
}
```

# 4. bài tập

làm một cái todo list:

- new: thêm việc
- list: liệt kê danh sách công việc
- delete: xóa một việc được chọn
- quit hoặc q: thoát app todo list ra.

code mẫu: 

```jsx
let userInput = prompt('what do u want to do');
const todoList = ['eat', 'drink'];
while (userInput.toLowerCase() !== 'quit'){
    if (userInput.toLowerCase() === 'list' ){
        console.log('*****************"');
        for (let i = 0; i < todoList.length; i++){
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('*****************"');
    } else if (userInput.toLowerCase() === 'new') {
        const newJop = prompt('oke, what is the new job?');
        todoList.push(newJop);
        console.log(`${newJop} added to the list`);
    } else if (userInput.toLowerCase() === 'delete'){
        const index = parseInt(prompt('enter the index to delete'));
        if (!Number.isNaN(index) && index < todoList.length){
            const deleted = todoList.splice(index, 1);
            console.log(`${deleted} is deleted from the list`);
        } else console.log('invalid index');
    }
    userInput = prompt('what do u want to do');
}
console.log('oke. now quitting')
```