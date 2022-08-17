// call stack
// const multilply = ( x, y) => x * y;
// const square = x => multilply(x,x);
// const isTriangle = (a, b, c) => (
//     square(a) + square(b) === square(c)
// );

//callBack

// setTimeout( () => {
//     document.body.style.backgroundColor = 'brown';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'yellow';
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'orange';
//         }, 1000)
//     }, 1000)
// }, 1000)

// const colorChange = (newColor, delay, doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
// colorChange('blue', 1000, () => {
//     colorChange('red', 1000)
// })

//promise
// function successfulCallback (result){
//     console.log('the data is ready: ' + result);
// }
// function failureCallback (error) {
//     console.log('fail to get the data: ' + error);
// }
// const doSomething = (url ) =>  {
//     return new Promise((resolve, reject) => {
//         const delay =  Math.floor(Math.random() * 4000) + 500;
//         setTimeout(() => {
//             if ( delay > 3500) {
//                 reject('Connection timeout !!!');
//             } else {
//                 resolve(`Here is your data from ${url}`);
//             }
//         }, delay)
//     })
// }

// doSomething('google.com')
//     .then( (data) => {
//         console.log('It is working, google');
//         console.log(data);
//         return doSomething('facebook.com');     
//     })
//     .then ( (data) => {
//         console.log('it is working, facebook');
//         console.log(data);
//     })
//     .catch( (error) => {
//         console.log('fail to load');
//         console.log(error)
//     })



// onst colorChange = (color, delay) =>  {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// colorChange('red', 1233)
//     .then (() => colorChange ('orange', 1000))
//     .then (() => colorChange('yellow', 1000))
//     .then (() => colorChange('green', 1000))
//     .then (() => colorChange('blue', 1000))
//     .then (() => colorChange('indigo', 1000))
//     .then (() => colorChange('violet', 1000))
c

//async

