let unix_time = 1656490757;

let date = new Date(unix_time * 1000);

let hours = date.getHours();
let minutes = '0' + date.getMinutes();
let seconds= '0' + date.getSeconds();

let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);