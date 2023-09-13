# 1. Biến và dữ liệu
- Định nghĩa: Khái niệm biến trong lập trình cũng giống khái niệm biến trong toán học, biến được dùng để đại diện cho một giá trị nào đó.
- Bạn có thể tạo 1 biến với từ khóa `var`, toán tử gán (`=`) được sử dụng để gán giá trị cho biến, như: `var varName = value;`

```jsx
let name = "Tuan Phong"; 
let age = 10; 
let isBoy = true;
const pi = 3.14;

//camelCase ;
let tinhTong, isGirl, tinhChuViHinhTron;
let a = null;


```

- Các kiểu dữ liệu cơ bản (Primitives variable)
- **String (kiểu chuỗi)**
    
           Kiểu dữ liệu chuỗi được sử dụng để thể hiện dữ liệu văn bản (nghĩa là các chuỗi ký tự). Chuỗi được tạo bằng cách sử dụng dấu ngoặc đơn hoặc kép bao quanh một hoặc nhiều ký tự, như hiển thị bên dưới:
    
    ```jsx
    var a = 'Hi';  // using single quotes
    var b = "Hi";  // using double quotes
    ```
    
- **Number (Kiểu số)**
    
          Kiểu dữ liệu số được sử dụng để biểu thị các số dương hoặc âm có hoặc không có vị trí thập phân hoặc các số được viết bằng ký hiệu số mũ như 1.5e-4 (tương đương 1.5x10-4)
    
    ```jsx
    var a = 25;         // integer
    var b = 80.5;       // floating-point number
    var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
    var d = 4.25e-6;    // exponential notation, same as 0.00000425
    ```
    
         Kiểu dữ liệu Số cũng bao gồm một số giá trị đặc biệt đó là: Vô cực, âm vô cực và NaN. Vô cực đại diện cho  `∞`, lớn hơn bất kỳ số nào. Vô cực là kết quả của việc chia một số khác không cho 0.
    
    ```jsx
    console.log(16 / 0);  // Output: Infinity
    console.log(-16 / 0); // Output: -Infinity
    console.log(16 / -0); // Output: -Infinity
    ```
    
        Trong khi `NaN` đại diện cho giá trị đặc biệt *Not-a-Number* (Không phải là số). Đó là kết quả của một phép toán không hợp lệ hoặc không xác định, như căn bậc 2 của -1, hay chia 0 cho 0.
    
    ```jsx
    console.log("Some text" / 2);       // Output: NaN
    console.log("Some text" / 2 + 10);  // Output: NaN
    console.log(Math.sqrt(-1));         // Output: NaN
    ```
    
- **Boolean**
    
         Kiểu dữ liệu Boolean chỉ có thể chứa hai giá trị: true hoặc false. Nó thường được sử dụng để lưu trữ các giá trị như có (đúng) hoặc không (sai), on(đúng) hoặc off(sai)
    
    ```jsx
    var isReading = true;   // yes, I'm reading
    var isSleeping = false; // no, I'm not sleeping
    ```
    
    Các giá trị Boolean cũng là kết quả của sự so sánh trong một chương trình.
    
    ```jsx
    var a = 1, b = 4, c = 5;
     
    console.log(b > a) // Output: true
    console.log(b > c) // Output: false
    ```
    
- **Null**
    
         Đây là một loại dữ liệu đặc biệt khác chỉ có thể có một giá trị - giá trị null. Giá trị null có nghĩa là không có giá trị. Nó không tương đương với một chuỗi rỗng ("") hoặc 0, nó chỉ đơn giản là không có gì.
    
    *Chú ý: Một biến có thể được làm trống rỗng , xóa bỏ nội dung hiện tại của nó bằng cách gán cho nó giá trị null.*
    
    ```jsx
    var a = null;
    console.log(a); // Output: null
     
    var b = "Hello World!"
    console.log(b); // Output: Hello World!
     
    b = null;
    console.log(b) // Output: null
    ```
    
- **Undefined**

## 2. Các phép toán học, phép logic

- Toán hạng

Điểm khác nhau giữa toán hạng trong JavaScript và toán hạng trong toán học chính là toán hạng trong JavaScript thì không nhất thiết phải là một chữ số, nó có thể là một giá trị hoặc một biến.

```jsx
<script>
    var a = 50;
    var b = a + 20; //Biến b sẽ có giá trị là 70
</script>
```

- Toán tử

| Toán tử | Tên gọi | Ví dụ |
| --- | --- | --- |
| + | Phép cộng | 10+3=13 |
| - | Phép trừ | 10-3=7 |
| * | Phép nhân | 10*3=30 |
| / | Phép chia | 12/3=4 |
| % | Phép chia lấy phần số dư | 10%3=1 |
- Phép cộng trong JavaScript tương đối khác so với phép cộng trong toán học. Trong JavaScript:
- Số có thể cộng số => cho ra số.
- Số có thể cộng chuỗi (hoặc chuỗi có thể cộng số) => cho ra chuỗi.
- Chuỗi có thể cộng chuỗi => cho ra chuỗi.

```jsx
<script>
    var a = 5 + 7; //Biến a sẽ có giá trị là 12
    var b = 1993 + "Thành Nhân"; //Biến b sẽ có giá trị là 1993Thành Nhân
    var c = "Thành Nhân" + 1993; //Biến c sẽ có giá trị là Thành Nhân1993
    var d = "Nguyễn" + " Thành Nhân";  //Biến d sẽ có giá trị là Nguyễn Thành Nhân
</script>
```

# 3. Thư viện math

- JavaScript cung cấp thư viện Math với rất nhiều phương thức hỗ trợ xử lý các phép toán toán học.

| Math.max(x, y, z, ..., n) | Trả về số lớn nhất trong danh sách các số đầu vào |
| --- | --- |
| Math.min(x, y, z, ..., n) | Trả về số nhỏ nhất trong danh sách các số đầu vào |
| Math.random() | Trả về một số ngẫu nhiên nằm giữa 0 và 1 |
| Math.round(x) | Trả về số nguyên gần x nhất |

# 4. Comment code

- Chúng ta sử dụng `//` để Để comment một dòng trong javascript. Comment trong javascript sẽ được tính từ vị trí bắt đầu `//` cho tới hết dòng.

```jsx
// ahwiaidjahwi
```

- Chúng ta có thể bắt đầu comment bằng cách ghi `//` từ vị trí đầu dòng, hay ở giữa dòng đều được.

```jsx
// người tạo:User6
let num = 10;
num = num + 5;  // cộng thêm 5 đơn vị
console.log(num); // in ra màn hình console
```

- Chúng ta sử dụng cặp dấu `/*` và `*/` để comment trên nhiều dòng trong javascript như ví dụ sau đây:

```jsx
/*
Ngày viết : 3/17/2022
Tác giả : User
*/

let num = 10;
num = num + 5;  /* cộng thêm 5 đơn vị*/
console.log(num);
```

# 5. Sử dụng markdown

- Markdown là ngôn ngữ đánh dấu văn bản, sử dụng cú pháp khá đơn giản và dễ hiểu, dễ nhớ
- ****Tiêu đề****
    
         Bạn có thể viết các lớp tiêu đề h1, h2, h3 cho đến h6 bằng cách thêm số lượng ký tự # tương ứng vào đầu dòng. Một ký tự # tương đương với h1, 2 ký tự # tương đương với h2 ...
    
    ```jsx
    # h1
    ## h2
    ### h3
    #### h4
    ##### h5
    ###### h6
    ```
    
    thì kết quả sẽ là
    
    # **h1**
    
    ## **h2**
    
    ### **h3**
    
    ### **h4**
    
    ### **h5**
    
    ### **h6**
    
- ****Nhấn mạnh, highlight****
    
         Bạn có thể kẹp một từ ở đầu và cuối bằng 1 ký tự * để *in nghiêng*, 2 ký tự ** để **bôi đậm**, và 3 ký tự *** để ***vừa in nghiêng vừa bôi đậm***.
    
    ```jsx
    *in nghiêng*
    **bôi đậm**
    ***vừa in nghiêng vừa bôi đậm***
    ```
    
    Để viết `inline code`, bạn dùng cú pháp
    
    ```jsx
    `inlide code`
    ```
    
    Để highlight block code, bạn viết
    
    ```jsx
    
    echo ("highlight code");
    ```
    
- ****Link, image****
    1. Link
    
           Để chèn link vào bài viết, bạn dùng cú pháp sau:    
    
    ```jsx
    [title](http://~)
    ```
    
           Ví dụ:
    
    ```jsx
    [Markdown](http://https://vi.wikipedia.org/wiki/Markdown)
    ```
    
    1. Image
    
          Cú pháp chèn hình ảnh như sau
    
    ```jsx
    ![alt](http://~)
    ```
    
          Ví dụ:
    
    ```jsx
    ![markdown](https://images.viblo.asia/518eea86-f0bd-45c9-bf38-d5cb119e947d.png)
    ```
    

# 6. Các phím tắt trong VScode

### #1. ****Ctrl + P: Chuyển đến file nào đó****

       Tổ hợp phím `Ctrl`+ `P` này giúp tìm kiếm và mở một file trong thư mục làm việc của bạn.

- Ubuntu: `Ctrl` + `P`
- Windows: `Ctrl` + `P`
- Mac: `⌃` + `⇧` + `Tab`

### #2. ****Ctrl + Shift + Tab****

         Tổ hợp phím `Ctrl`+ `Shift` + `Tab`này giúp bạn điều hướng giữa các tệp mà bạn hiện đang mở (hoặc làm việc). Nhờ thế, chúng ta có thể dễ dàng di chuyển đến các tập tin trước đó.

- Ubuntu: `Ctrl` + `Shift` + `Tab`
- Windows: `Ctrl` + `Shift` + `Tab`
- Mac: `⌃` + `⇧` + `Tab`

### #3. ****Ctrl + Shift + I: Phím tắt formart code trong Visual Studio Code****

      Tổ hợp phím tắt `Ctrl`+ `Shift`+ `I`trong Visual Studio Code sẽ giúp bạn định dạng code HTML và TypeScript để trông gọn gàng, đúng chuẩn hơn.

 *Chú ý: Nhưng, định dạng code bạn cần chú ý thêm nếu bạn đang hợp nhất code của mình với các nhánh (Branch) từ xa.*

- Ubuntu: `Ctrl` + `Shift` + `I`
- Windows: `Shift` + `Alt` + `F`
- Mac: `⇧` + `⌥` + `F`

### #4. ****Ctrl + Shift + A: Phím tắt chú thích trong Visual Studio Code****

      Tổ hợp phím tắt `Ctrl`+ `Shift`+ `A`này sẽ giúp bạn comment code của bạn theo kiểu block phù hợp với từng loại code (HTML, CSS, Java, PHP...).

- Ubuntu: `Ctrl` + `Shift` + `A`
- Windows: `Shift` + `Alt` + `A`
- Mac: `⇧` + `⌥` + `A`

*Chú ý: Tiếp tục nhấn tổ hợp phím này sẽ giúp loại bỏ comment.*

### #5. ****Ctrl + L****

      Tổ hợp phím tắt `Ctrl`+ `L`sẽ giúp bạn chọn dòng hiện tại của bạn một cách dễ dàng.

- Ubuntu: `Ctrl` + `L`
- Windows: `Shift` + `L`
- Mac: `⌘` + `L`

### **#6: Ctrl + Shift + K**

Tổ hợp phím tắt`Ctrl` + `Shift` + `K` giúp bạn xóa một dòng nơi mà con trỏ đang đứng.

- Ubuntu: `Ctrl` + `Shift` + `K`
- Windows: `Ctrl` + `Shift` + `K`
- Mac: `⇧` + `⌘` + `K`

### **#7: Ctrl + Space**

Tổ hợp phím `Ctrl` + `Space` này giúp bạn có một gợi ý cho code của bạn.

Một hộp thoại sẽ xuất hiện để liệt kê tất cả các phương thức và biến có sẵn trong TS.

Điều này sẽ giúp bạn tránh được các lỗi không cần thiết.

- Ubuntu: `Ctrl` + `Space`
- Windows: `Ctrl` + `Space`
- Mac: `⌃` + `Space`

# **#8: Phím tắt F12 trong VS Code**

Phím tắt F12 này giúp bạn chuyển sang định nghĩa phương thức.

Khi bạn cần điều hướng phương thức hiện tại, phím tắt này giúp làm cho nó dễ dàng hơn.

Ctrl + nhấp chuột cũng sẽ thực hiện thao tác tương tự.

- Ubuntu: `F12`
- Windows: `F12`
- Mac: `F12`

# **#9: Phím tắt di chuyển dòng lên / xuống**

Khi bạn muốn di chuyển dòng hiện tại lên trên hoặc xuống dưới thì bạn có thể sử dụng tổ hợp phím tắt:

- Ubuntu: `Alt` + `↑` / `Alt` + `↓`
- Windows: `Alt` + `↑` / `Alt` + **`↓`**
- Mac: `⌥` + `↑` / `⌥` + `↓`

# **#10: Phím tắt khắc phục lỗi nhanh**

Tổ hợp phím`Ctrl` + `.` giúp bạn biết giải pháp khắc phục nhanh lỗi đang gặp phải.

Khi bạn gặp bất kỳ lỗi nào trong mã của mình, sử dụng tổ hợp phím này sẽ mở một hộp thoại chứa danh sách các giải pháp khả dụng mà IDE cung cấp.

- Ubuntu: `Ctrl` + `.`
- Windows: `Ctrl` + `.`
- Mac: `⌘` + `.`

# **#11: Phím tắt chuyển nhanh đến dòng nào đó**

Tổ hợp phím `Ctrl` + `G` giúp bạn điều hướng đến dòng mong muốn trong tập tin.

Một hộp thoại sẽ xuất hiện và bạn cần nhập số dòng mong muốn chuyển đến trong tệp hiện tại. Sau đó, con trỏ sẽ di chuyển đến dòng đó.

- Ubuntu: `Ctrl` + `G`
- Windows: `Ctrl` + `G`
- Mac: `⌃` + `G`

# **#12: Phím tắt tìm kiếm trong Visual Studio Code**

Tổ hợp phím `Ctrl`+ F này giúp bạn tìm bất kỳ từ nào trong tệp hiện tại.

Nó sẽ hữu ích nhất trong việc tìm kiếm bất kỳ từ khóa và thay thế nó bằng một từ khóa khác.

Nhấn`Ctrl`+ F thì một cửa sổ bật lên sẽ xuất hiện trong tệp hiện tại để hỗ trợ bạn trong thao tác tìm kiếm.

Ngoài ra bạn cũng sử dụng `Ctrl`+ `H` để thực hiện thao tác Tìm & Thay thế trực tiếp.

- Ubuntu: `Ctrl` + `F`
- Windows: `Ctrl` + `F`
- Mac: `⌘` + `F`

# **#13: F3 hoặc Shif + F3**

Phím tắt F3 / Shift + F3 này giúp di chuyển tiếp / trước của từ được tìm kiếm.

Ví dụ, khi bạn đang tìm kiếm từ khóa "Find" (nhấn`Ctrl`+ `F`và nhập "Find"), bạn sẽ cần di chuyển tiến hoặc lùi trong số các kết quả tìm kiếm.

Bạn có thể dễ dàng điều hướng qua toàn bộ tệp bằng các phím này:

- Ubuntu: `F3` / `Shift` + `F3`
- Windows: `F3` / `Shift` + `F3`
- Mac: `⌘` + `G` / `⇧` + `⌘` + `G`

# **#14: Ctrl + Shift + F**

Tổ hợp phím tắt`Ctrl`+ `Shift`+ `F`trong VS Code giúp bạn mở bảng tìm kiếm trong sidebar.

Bạn có thể tìm kiếm bất kỳ từ khóa nào trong toàn bộ thư mục công việc và cũng có thể thực hiện thay thế nếu cần.

- Ubuntu: `Ctrl` + `Shift` + `F`
- Windows: `Ctrl` + `Shift` + `F`
- Mac: `⇧` + `⌘` + `F`

# **#15: Phím tắt Ẩn / Hiện Terminal trong Visual Studio Code**

Như chúng ta biết rằng Visual Studio Code tích hợp Terminal ngay trong trình soạn thảo để chúng ta có thể dễ dàng thao tác trên một cửa sổ.

Để ẩn / hiện Terminal nhanh chóng trong Visual Studio Code chúng ta sử dụng phím tắt:

- Ubuntu: `Ctrl` + ```
- Windows: `Ctrl` + ```
- Mac: `⌃` + ```

# **#16: Hiện bảng các vấn đề trong VS Code**

Tổ hợp phím tắt`Ctrl` + `Shift` + `M` này giúp bạn hiển thị / ẩn bảng Problems trong Visual Studio Code.

Bảng này sẽ hiển thị các lỗi và vấn đề gặp phải trong dự án của bạn. Bạn có thể sử dụng nó một cách hiệu quả bằng cách sử dụng tổ hợp phím trên từng hệ điều hành:

- Ubuntu: `Ctrl` + `Shift` + `M`
- Windows: `Ctrl` + `Shift` + `M`
- Mac: `⇧` + `⌘` + `M`

# **#17: Phím tắt Ẩn / Hiện Sidebar trong VS Code**

Phím tắt này `Ctrl` + `B` giúp bạn chuyển đổi mức độ hiển thị của thanh bên.

Hầu hết các lập trình viên muốn đóng sidebars khi họ đang viết các phương thức hoặc đoạn code phức tạp để có được cái nhìn tập trung và toàn màn hình.

Trong những thời điểm như vậy, tổ hợp phím này là tổ hợp hữu ích nhất:

- Ubuntu: `Ctrl` + `B`
- Windows: `Ctrl` + `B`
- Mac: `⌘` + `B`

# **#18: Lưu tất cả các file trong VS Code**

Chắc chắn bạn đã từng quên lưu file đang làm việc. Thậm chí bạn đã dặn mình nhấn "Ctrl + S nhiều lần" mà vẫn bị sót.

Đó là chuyện bình thường, vì khi làm việc với nhiều file cùng một lúc bạn không thể chắc chắn rằng mình đã lưu hết được.

Vì vậy, phím tắt này trở nên hữu ích để lưu tất cả các tệp trong một bước duy nhất.

Người dùng Ubuntu sẽ không có phím tắt này, nhưng bạn có thể tự cấu hình nó trong cài đặt bàn phím.

- Ubuntu: cần cấu hình thủ công ( Ctrl + K+S – preferable)
- Windows: `Ctrl` + `K` + `S` (Nhấn `Ctrl` + `K` rồi nhả hết ra. Sau đó nhấn `S`)
- Mac: `⌥` + `⌘` + `S`

# **#19: Đóng file làm việc hiện tại trong VS Code**

Phím tắt này`Ctrl` + `W` giúp bạn đóng file làm việc hiện tại của bạn.

Khi bạn đã đóng tất cả các tệp và thử nhấn lại tổ hợp phím này, nó sẽ đóng cả Visual Studio Code.

- Ubuntu: `Ctrl` + `W`
- Windows: `Ctrl` + `W`
- Mac: `⌘` + `K` / `⌘` + `W`

# **#20: Mở lại file vừa đóng nhanh trong VS Code**

Tổ hợp phím `Ctrl` + `Shift` + `T` sẽ giúp bạn mở lại file đã đóng cuối cùng của mình.

Khi bạn bất ngờ đóng file nào đó, nó sẽ giúp bạn mở lại trong chưa đầy 1s.

- Ubuntu: `Ctrl` + `Shift` + `T`
- Windows: `Ctrl` + `Shift` + `T`
- Mac: `⇧` + `⌘` + `T`