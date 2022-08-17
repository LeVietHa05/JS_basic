
//factory function
/**
 * hàm này như một cái nhà máy, sản phẩm tạo ra là 1 object
 * các method tương đương với các máy sản xuất
 * các tham số tương đương với nguyên liệu.
 * @param {num} r 
 * @param {num} g 
 * @param {num} b 
 * @returns an object
 */
function makeColor ( r, g, b) {
    const color = {};
    color.r = r;
    color.b = b;
    color.g = g;
    color.rgb = function () {
        const {r,g,b} = this; //destructuring
        return `rgb (${r}, ${g}, ${b})`
    }
    color.hex = function () {
        const {r,g,b} = this;
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1); //lay tren stackoverflow
    }
    return color
}

const purple = makeColor(238,130,238)

//constructor function
/**
 * hàm này sẽ 'tự' tạo ra 1 object, this sẽ trỏ vào object này, và trả về object này
 * @param {num} r 
 * @param {num} g 
 * @param {num} b 
 */
function Color (r, g, b) {  //dat ten kieu khac, y chi la day khong phai ham binh thuong
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function () {    //nếu đặt ở đây như này thì sẽ không khác gì ở trên cả. 
        const {r,g,b} = this; //destructuring
        return `rgb (${r}, ${g}, ${b})`
    }
}
Color.prototype.rgb = function () { //làm như này mới đúng, và không nên sử dụng arrow function ở đây. do this trong af khác trong func thường.
    const {r,g,b} = this; //destructuring
    return `rgb (${r}, ${g}, ${b})`
}

const red = new Color(255, 0 ,0); //phải có new, nếu không thì chả ra gì hết.

//CLASSSSSSSSSSSSSSS
//những thứ cần nhớ cho class: this, methods, access methods, constructor (có thể chạy luôn method trong constructor, ví dụ như chạy thẳng method hex trong 
//constructor và lưu giá trị hex vào)., new 
class MakeNewColor {
    constructor(r,g,b) {    //must have when creating new class
        this.r = r;
        this.g = g;
        this.b = b;         
    }
    innerRGB () {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`
    }
    rgb () {    //creat a prototype method 
        return `rgb (${this.innerRGB()})`   //using method inside method
    }
}

//extend, super

class Pet {
    constructor(name, age) {
        this.name = name ;
        this.age = age;
    }
    eat () {
        return `${this.name} is eating`;
    }
}
class Cat extends Pet{ //mở rộng class từ class Pet
    constructor(name, age, liveLeft) {
        super(name,age) //gọi hàm constructor của Pet
        this.liveLeft =liveLeft;
    }
    // eat () {
    //     return `${this.name} is eating`;
    // }
    meow () {
        return 'MEOWAAA'
    }
}
class Dogs extends Pet{ //có thể tạo một method mới có tên trùng với method ở class Pet để nâng cấp hay thay đổi nó
    // constructor(name, age) {
    //     this.name = name ;
    //     this.age = age;
    // }
    // eat () {
    //     return `${this.name} is eating`;
    // }
    woof () {
        return "WOOOFFFF"
    }
}