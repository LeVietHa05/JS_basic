//khoi tao string

//1: ''
//2: ""
//3: ``

let str1 = null;
let str2 = "hello world";

let str4 = 'he said: "hello world"'
let str3 = `hello world ${str1} aksjdgklasdhg`;
console.log(str3);

// string length
console.log(str3.length);
console.log("qwertyuioplkjhgff".length);
//charAt
console.log("qwertyuioplkjhgff".charAt(3));
//charCodeAt
console.log("qwertyuioplkjhgff".charCodeAt(0));
//concat
console.log("qwertyuioplkjhgff".concat("123", "1124", `sadkjbf`));
console.log("qwertyuioplkjhgff" + "123" + "1124" + `sadkjbf`);
//indexOf   
console.log("qwertyuiopyuilkjhgff".indexOf("yui",6));
//lastIndexOf
console.log("zdfbnsdfbn".lastIndexOf('fbn'));
//localeCompare
// console.log("qwertyuioplkjhgff".localeCompare("qwertyuioplkjhgff"));
//match
console.log("jklsvebgkjsegjklvb".match(/jkl/g));
//bt1
let a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse vitae quidem. Ratione, debitis. Blanditiis officiis possimus tempore sequi saepe ex aliquam fugiat quidem. Libero ab impedit nemo alias nesciunt!'
let b = a.split(' ');
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}
let c = b.join(' ');
console.log(c);

let d = a.split("");
let e = [];
for (let i = 0; i < d.length; i++) {
    if (d[i] == ' ') { 
        e.push(i)
    }
}

console.log(e)