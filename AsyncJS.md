# 1. call stack
``` jsx
const multilply = ( x, y) => x * y;
const square = x => multilply(x,x);
const isTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
);
```
# 2. callBack Hell
``` jsx
setTimeout( () => {
    document.body.style.backgroundColor = 'brown';
    setTimeout(()=>{
        document.body.style.backgroundColor = 'yellow';
        setTimeout(()=>{
            document.body.style.backgroundColor = 'orange';
        }, 1000)
    }, 1000)
}, 1000)

const colorChange = (newColor, delay, doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
colorChange('blue', 1000, () => {
    colorChange('red', 1000)
})

```
# 3. promise 
``` jsx
function successfulCallback (result){
    console.log('the data is ready: ' + result);
}
function failureCallback (error) {
    console.log('fail to get the data: ' + error);
}
const doSomething = (url ) =>  {
    return new Promise((resolve, reject) => {
        const delay =  Math.floor(Math.random() * 4000) + 500;
        setTimeout(() => {
            if ( delay > 3500) {
                reject('Connection timeout !!!');
            } else {
                resolve(`Here is your data from ${url}`);
            }
        }, delay)
    })
}

doSomething('google.com')
    .then( (data) => {
        console.log('It is working, google');
        console.log(data);
        return doSomething('facebook.com');     
    })
    .then ( (data) => {
        console.log('it is working, facebook');
        console.log(data);
    })
    .catch( (error) => {
        console.log('fail to load');
        console.log(error)
    })
```
``` jsx
const colorChange = (color, delay) =>  {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

colorChange('red', 1233)
    .then (() => colorChange ('orange', 1000))
    .then (() => colorChange('yellow', 1000))
    .then (() => colorChange('green', 1000))
    .then (() => colorChange('blue', 1000))
    .then (() => colorChange('indigo', 1000))
    .then (() => colorChange('violet', 1000))
```
# 4. async
cú pháp
``` jsx
async function funcName() { }
```
hoặc
``` jxs
const name = async () => {};
```
ví dụ
``` jsx
const sing = async () => {
    //để reject thì tạo ra lỗi: (hoặc chỉ cần mỗi throw)
    //throw new Error('lỗi rồi');
    return 'let her go' //promise resolve với giá trị trả về là 'let her go'
}
```
# 5. await
``` jsx
const rainbow =  () => {
    await   colorChange('red', 1000);
    colorChange('orange', 1000);
}
```
# 6. xử lý lỗi trong async function
sử dụng try catch
``` jsx
async function doTwoThings() {
    try {
        let data1 = doSomething('google.com')
        console.log(data1)
        let data2 = doSomething('facebook.com')
        console.log(data2)
    }
    catch (e) {
        console.log('There is an error')
        console.log(e);
    }
}