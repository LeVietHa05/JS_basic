# Hàm và mô hình hóa bài toán

# 1. Định nghĩa

**Hàm** (hay còn gọi là **Function**) là một nhóm các câu lệnh thực hiện các nhiệm vụ cụ thể và có thể được giữ và duy trì riêng biệt trong chương trình chính.

Các hàm cung cấp một cách để tạo code đóng gói có thể tái sử dụng, dễ mang theo hơn và dễ gỡ lỗi hơn.

Dưới đây là một số ưu điểm của việc sử dụng hàm trong Javascript:

****1: Các hàm làm giảm sự lặp lại code trong một chương trình****

****2: Các hàm làm cho code dễ bảo trì hơn****

****3: Các hàm làm cho dễ sửa lỗi hơn****

# 2. Tham số trong hàm

Bạn có thể chỉ định **tham số** (parameter) khi bạn định nghĩa hàm của mình để chấp nhận giá trị đầu vào trong thời gian chạy (runtime).

Các tham số hoạt động như các biến giữ chỗ trong một hàm.

Các tham số được thay thế vào thời điểm chạy bằng các giá trị truyền vào (lúc truyền như thế nó được gọi là **đối số**) cho hàm tại thời điểm gọi.

```jsx
function tenHam(thamSo1, thamSo2, thamSo3) {
    // Code thực thi
}
```

Ví dụ:

```jsx
// Định nghĩa hàm
function hienThiTong(so1, so2) {
    var tong = so1 + so2;
    alert(tong);
}
 
// Gọi hàm
hienThiThong(5, 5); // Kết quả: 10
hienThiThong(-5, 9); // Kết quả: 4
```

*Chú ý: Tuy nhiên, đối với mỗi **tham số bạn chỉ định**, một **đối số tương ứng cần được truyền cho hàm khi nó được gọi**, nếu không giá trị của nó sẽ trở thành undefined*.

Ví dụ:

```
// Định nghĩa hàm
function hienThiHoTen(hoKhachHang, tenKhachHang) {
    alert(hoKhachHang + " " + tenKhachHang);
}

// Gọi hàm
hienThiHoTen("Vi", "Doanh"); // Kết quả: Vi Doanh
hienThiHoTen("Hoàng"); // Kết quả: Hoàng undefined
```

# 3. Tham số mặc định của hàm

- **Tham số mặc**  **định** của **JavaScript** ất hữu ích trong khi viết một **hàm**. Khi gọi **hàm**, nếu thiếu tham số, tính năng **tham** **số** **mặc** **định** cho phép bạn gán giá trị mặc định cho tham **số** **hàm**, thay vì để nó không xác định.
    
    ```jsx
    function phep_chia(a = 6, b = 3) {
        return a / b;
    }
    console.log(phep_chia(4, 2));/ket qua=2
    console.log(phep_chia(9));/ket qua=3
    console.log(phep_chia());/ket qua=2
    ```
    
- ****Sử dụng biểu thức làm giá trị mặc định****
    
    ```jsx
    function sum(x = 3, y = x + 5) {
    
        // return sum
        return x + y;
    }
    
    console.log(sum(5, 15));  // 20 
    console.log(sum(7));        // 19
    console.log(sum());          // 11
    ```
    
- **Nếu bạn tham chiếu tham số chưa được khởi tạo, bạn sẽ gặp lỗi.**
    
    ```jsx
    function sum( x = y, y = 1 ) {
        console.log( x + y);
    }
    
    sum();
    ```
    

# 4. Phạm vi của biến

Có hai loại phạm vi trong JavaScript. `biến cục bộ (local scope)` và `biến toàn cục (global scope)`

. Biến toàn cục được khai báo ngoài hàm , trong khi đó biến cục bộ được lưu khai báo bên trong một hàm.(Nên với cùng một tên biến, ta có thể khai báo ở những hàm khác nhau).

```jsx
var foo = 50;  //<= biến toàn cục 

function test() {
        var bar = 100; //<= biến cục bộ 
}
```

Ví dụ nâng cao:

```jsx
function sum(a, b) { 
     var sum = (a + b) ; // sum là biến cục bố
     return sum;
 }
  
 var result  = sum(10, 20); //result là biến toàn cục
  
  //và chúng ta có thể sử dụng biến result ở khắp nơi
 function showResult(result) {
     alert('sum is: ' + result);
 }
  
 showResult();
```

# 5. Return trong hàm

**Return** trong **JavaScript** là câu lệnh dùng để trả về giá trị từ hàm. **Return** có tác dụng kết thúc hàm và trả lại điều khiển cũng như kết quả xử lý hàm cho người gọi. Chúng ta có thể sử dụng hoặc lược bỏ **return** khi khai báo hàm trong **JavaScript**, và một hàm có chứa **return** trong **JavaScript** được gọi là hàm trả về giá trị trong **JavaScript.**

```jsx
function add(x, y){
  let sum = x + y;
  return sum;
}
let z = add(1, 2);
console.log(z);
//> 3
```

Hoặc:

```jsx
function add(x, y){
  return x + y;
}
```

- ****Return nhiều giá trị trong JavaScript dưới dạng mảng và gán kết quả vào một mảng khác****
    
    Ngoài cách gán kết quả return nhiều giá trị trong JavaScrit vào một biến như ở trên, chúng ta cũng có thể gán kết quả trực tiếp vào một mảng khác, với các phần tử trong mảng đó sẽ nhận tương ứng các giá trị trả về trong mảng kết quả.
    
    Ví dụ, chúng ta có hàm tìm max min trong JavaScript:
    
    ```jsx
    function find_max_min(a, b, c ){
      const maxNum = Math.max(a, b, c);
      const minNum = Math.min(a, b, c);
    
      return [maxNum, minNum]; 
    }
    ```
    
- ****Return true false trong Javascript****
    
    ```jsx
    funtion sayhi(){
      console.log("Hello");
      return false
    };
    
    let a = sayhi();//Hello
    console.log(a);
    //> false
    ```
    
    **return false** có tác dụng dừng hoàn toàn một event sau khi đã gọi xong event đó. Và **return true** thì lại ngược lại, cho phép event đó có thể tiếp tục thực thi sau khi nó được gọi.
    
- ****Dừng chương trình bằng return****
``` jsx 
function check_old(old){
  if (old < 18){
    console.log('Em chưa 18');
    return;
  }
  if (old > 30){
    console.log('Em 30 rồi');
  }else{
    console.log('Em còn 20');
  }
}

check_old(17); //> Em chưa 18
check_old(20); //> Em còn 20
```

# 6. bài tập
## Ví dụ 0: Viết chương trình sử dụng hàm để in ra màn hình “Hello”
Input: none
Output: “Hello”
## Ví dụ 1: viết chương trình tính chu vi và diện tích hình chữ nhật sử dụng hàm.
## ví dụ 2: Cho 2 số a và b. Sử dụng hàm sum để tính tổng của a và b và in kết quả. 
có kiểm tra dữ liệu đầu vào.
## Ví dụ 3: Sử dụng function getAbs để lấy giá trị tuyệt đối của biến x và in ra màn hình
