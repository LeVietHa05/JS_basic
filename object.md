# 1. Định nghĩa

- Đối tượng trong javascript là một tập hợp các thuộc tính
- Thuộc tính là một cặp **khóa - giá trị** chứa tên và giá trị
- Tên thuộc tính là một giá trị duy nhất
- Giá trị của thuộc tính có thể là bất

# 2. Tính ứng dụng

- Đối tượng là kiểu dữ liệu được sử dụng nhiều nhất trong việc xử lý dữ liệu. Vì việc truy cập dữ liệu chỉ cần thông qua **khóa ⇒ tốc độ xử lý nhanh**

# 3. Cách sử dụng

- Khởi tạo đối tượng
    - Bằng ký hiệu { }
    
    ```jsx
    let keyProps = 'special'
    const student = {
      "name": "Nguyen Van A",
      age: 18,
      "main-role": ["Support", "Entry"],
      1: 'first',
      [keyProps]: 'special key'
    }
    ```
    
- Cách truy cập dữ liệu
    - Sử dụng kí hiệu “.” hoặc [ ] tùy thuộc vào trường hợp
        
        ```jsx
        student.name // 'Nguyen Van A'
        student.age // 18
        student['age'] // 18
        student['main-role'] // ["Support","Entry"]
        student[1] // 'first'
        student.gpa // undefined
        ```
        
    - Truy cập thông qua biến
    
    ```jsx
    let myProperty = 'age'
    student[myProperty] // 18
    student.myProperty // undefined because it will find key myProperty
    ```
    
- Cách tạo thuộc tính mới trong đối tượng
    
    ```jsx
    student.major = "IT"
    student['age'] = 19 // override value to 19
    ```
    

# 4. Cách lặp với Object

```jsx
for (let key in student) {
  console.log(student[key])
}
// name
// age
//main-role
// 1
// special
```

# 5. Các hàm của object

- Object.keys(obj): Trả ra mảng các giá trị là **khóa** của **đối tượng**
- Object.values(obj): trả ra mảng các giá trị là **giá trị** của **đối tượng**

```jsx
const student = {
	name: "Tony",
	age: 17
}
const myStudentKey = Object.keys(student) // [name,age]
const myStudentValue = Object.values(student) // ["Tony",17]
```

# 6. Tìm hiểu về dữ liệu JSON

- **JSON** viết tắt bởi Javascript Object Notation
- **JSON** là **định dạng trao đổi dữ liệu** cực kỳ nhẹ để trao đổi dữ liệu giữa client và server
- **JSON** biểu diễn giá trị dựa trên 2 cấu trúc
    - Đối tượng
    
    ```jsx
    {
      "book1":
        {
          "name":"101 con đường tỷ đô",
          "author": "Nguyễn Văn Giàu",
          "year": 2020,
          "bestseller":false
        },
        "book2": {
          "name":"101 con đường tỷ đô",
          "author": "Nguyễn Văn Giàu",
          "year": 2020,
          "bestseller":false
        }
    }
    ```
    
    - Mảng
    
    ```jsx
    {
      "colors": [
          "Xanh",
          "Đỏ",
          "Tím",
          "Vàng"
      ],
      "materials": [
        "meat", "eggs", "milk"
      ]
    }
    ```
    
- Trong JSON
    - Tên thuộc tính hoặc key luôn là chuỗi, trong khi giá trị có thể là `string`, `number`, `true` hoặc `false`, `null` hoặc thậm chí là một **đối tượng** hoặc một **mảng**.
    - Các chuỗi phải được đặt trong dấu ngoặc kép `" "` và có thể chứa các ký tự đặc biệt (được thông dịch) như `\n`, `\t` và `\`.

⇒ Sự khác biệt giữa JSON và Javascript Object

# 7. Luyện tập

## Bài 1: Cho một đối tượng sau:

```jsx
const characterOne = {
  name: 'Tony Stark',
  role: 'Iron man',
  abilities: ['genius', 'rich', 'engineer'],
  level: 10
}
```

### a. Viết hàm in ra tất cả các khóa của đối tượng

### b. Viết hàm tính tổng thuộc tính của đối tượng

## Bài 2: Cho một đối tượng sau:

```jsx
const classroom = {
  1: {
    name: 'Nguyen Van A',
    age: 16,
    gender: "M",
    favourite: ['reading', 'coding', 'workout'],
    abroad: true,
  },
  2: {
    name: 'Nguyen Van B',
    age: 16,
    gender: "M",
    favourite: ['gaming', 'coding'],
    abroad: false,
  },
  3: {
    name: 'Nguyen Thi A',
    age: 17,
    gender: "F",
    favourite: ['singing'],
    abroad: true,
  },
  4: {
    name: 'Nguyen Thi B',
    age: 18,
    gender: "F",
    favourite: ['writing', 'music', 'chatting'],
    abroad: true,
  },
}
```

### a. Viết hàm in ra tên của tất cả học sinh

### b. Viết hàm in ra tên của học sinh dưới 18 tuổi

### c. Viết hàm in ra tên của học sinh có từ 2 sở thích trở lên

### d. Viết hàm in ra tên của học sinh nữ

### e. Viết hàm in ra tên của học sinh đi du học