//khoi tao string

//1: ''
//2: ""
//3: ``

let str1 = 'hello - world world';
let str2 = "hello world";

let str4 = 'he said: "hello world"'
let str3 = `hello world ${str1}`;

console.log(str3.length);

console.log(str1.lastIndexOf('world'));

console.log(str1.match(/^w+/g));

let a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse vitae quidem. Ratione, debitis. Blanditiis officiis possimus tempore sequi saepe ex aliquam fugiat quidem. Libero ab impedit nemo alias nesciunt!'

let b = a.split(' ');

for (let i = 0; i < b.length; i++) {

}
let c = b.join(' ');
console.log(c);

let d = [];
for (let i = 0; i < a.length; i++) {

}

console.log(d)