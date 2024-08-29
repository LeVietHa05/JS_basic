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
console.log("qwertyuioplkjhgffa".charAt("qwertyuioplkjhgffa".length - 1));
//charCodeAt
console.log("qwertyuioplkjhgff".charCodeAt(0));
//concat
console.log("qwertyuioplkjhgff".concat("123", " 1124", `sadkjbf`));
console.log("qwertyuioplkjhgff" + "123" + " 1124" + `sadkjbf`);
//indexOf   
console.log("qwertyuiopyuilkjhgff".indexOf("yui", 6));
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
    // console.log(b[i]);
}
let c = b.join(' ');
// console.log(c);

//cach khac
a = a.trim();
let g = a[0].toUpperCase() + a.slice(0, );
// let g = "";
let lastSpace = 0;
for (let i = 0; i < a.length; i++) {
    let tmp = a.indexOf(" ", lastSpace)

}
console.log(g);

let d = a.split("");
let e = [];
for (let i = 0; i < d.length; i++) {
    if (d[i] == ' ') {
        e.push(i)
    }
}

console.log(e)

let f = "";
for (let i = 0; i < a.length; i++) {
    if (a.indexOf(" ", i) == i) {
        f += i + " "
    }
}
console.log(f);


"abc".slice(1)

console.log("klasbfklashfkl".lastIndexOf("a", 2))
