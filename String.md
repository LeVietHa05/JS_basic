Ví dụ 1: Sử dụng charAt() để tìm in ra màn hình ký tự tương ứng với vị trí.

```jsx
//charAt()
let newString = "This is a string";
```

Ví dụ 2: Cho 1 chuỗi “This is a string”. Tìm giá trị Unicode của 5 ký tự bất kỳ trong chuỗi

```jsx
//charCodeAt()
//trả về một số chỉ dẫn giá trị Unicode của ký tự tại chỉ mục đã cho
let newString = "This is a string";
```

Ví dụ 3: Cho 2 chuỗi: “Java”, “Script”. Hãy ghép lại thành 1 chuỗi duy nhất

```jsx
//concat()
//sự kết hợp của hai hoặc nhiều chuỗi
let a = "Java";
let b = 'Script';

```

Ví dụ 4: Hãy tìm vị trí của “is” trong chuỗi “This is a string”.

```jsx
//indexOf()
//Cung cấp vị trí của một giá trị char có trong chuỗi đã cho.
let str = "This is a string";

```

```jsx
//lastIndexOf()
//Cung cấp vị trí của một giá trị char có trong chuỗi đã cho bằng cách tìm kiếm một ký tự từ vị trí cuối cùng. 
let str = "JavaScript";


```

```jsx
//search()
//Tìm kiếm một biểu thức chính quy định trong một chuỗi đã cho và trả về vị trí của nó nếu xảy ra khớp.
let str = "This is a string";
let newStr = "is";
str.search(newStr); //2
```

Ví dụ 5: Hãy thay thế ký tự ‘a’ thành ‘e’ trong chuỗi: “rad” 

```jsx
//replace()
//thay thế một chuỗi nhất định với sự thay thế được chỉ định.
let str = 'rad';

```

Ví dụ 6: Hãy hiển thị ra màn hình các ký tự trong chuỗi từ vị trí 2 đến hết.

```jsx
//slice()
//được sử dụng để tìm nạp một phần của chuỗi đã cho. Nó cho phép chúng ta gán chỉ số tích cực cũng như tiêu cực.
//string.slice(beginslice, endslice);
let str = "Apples are round, and apples are juicy.";


```

Ví dụ 7: Hãy chuyển đổi chuỗi đã cho thành chữ thường và chữ in hoa

```jsx
//toLowerCase()
//Chuyển đổi chuỗi đã cho thành chữ thường.
let str = 'I hate you';

```

```jsx
//toUpperCase()
//Chuyển đổi chuỗi đã cho thành chữ in hoa.
let str = 'I hate you';

```

Ví dụ 8: Cho 1 chuỗi str. Viết chương tình kiểm tra chuỗi có chứa “string” hay không.

```jsx
//includes()
//xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không, trả về true hoặc false khi thích hợp.
let str = 'To be, or not to be, that is the question.';


```

```jsx
//split([seperator], [limit])
//biến 1 chuỗi thành 1 mảng các chuỗi, bằng cách tách chuỗi theo ký tự dc chỉ định
let str = 'Leave me alone plz';
```

# bài tập 1
viết hoa toàn bộ chữ cái đầu của từ trong một chuỗi (capitalize giống trong css)
``` js
let a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse vitae quidem. Ratione, debitis. Blanditiis officiis possimus tempore sequi saepe ex aliquam fugiat quidem. Libero ab impedit nemo alias nesciunt!'

// wanted output: Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Ea Esse Vitae Quidem. Ratione, Debitis. Blanditiis Officiis Possimus Tempore Sequi Saepe Ex Aliquam Fugiat Quidem. Libero Ab Impedit Nemo Alias Nesciunt!
//yêu cầu: string và array
//gợi ý: dùng split(' ') và dùng toUpperCase cho charAt(0). dùng thêm join của array.
```
# bài tập 2: 
vẫn dùng string a ở trên. viết hàm trả về mảng bao gồm toàn bộ các vị trí của dấu cách " ".

``` js 
/* wanted output: [
    5,  11,  17,  21,  26,  38,  50,  56,
   59,  64,  70,  78,  87,  96, 107, 116,
  125, 133, 139, 145, 148, 156, 163, 171,
  178, 181, 189, 194, 200
]
*/

```