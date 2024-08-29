/**
 * bai 1: tinh tong
 */
let sum = 0;
for (let x = 0; x < 1000; x++) {
  if (x % 3 === 0|| x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);

/**
 * bai 2: tim uoc chung lon nhat
 */
let a = 30; //First number
let b = 15; //Second number
let gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
console.log(gcd);

function uocChung(a, b) {
  for (let i = 1; i < (a > b) ? a : b; i++) {
    if (a % i == 0 && b % i == 0) return i;
  }
}

console.log(uocChung(30, 15))

/**
 * HALL OF FAME
 * bai 2: tim uoc chung lon nhat duoc code boi Minh Khoi 2k6 SG
 * @param {number} c number 1
 * @param {number} d number 2
 * @returns {number} uoc chung lon nhat
 */
function MinhKhoi_GCC(c, d) {
  if ((typeof c !== 'number') || (typeof d !== 'number'))
    return false;
  c = Math.abs(c);
  d = Math.abs(d);
  while (d) {
    var t = d;
    d = c % d;
    c = t;
  }
  return c;
}
console.log(MinhKhoi_GCC(15, 45))
/**
 * bai 3: tim so tu man
 */
function three_digit_armstrong_number() {
  for (let i = 1; i < 10; ++i) {
    for (let j = 0; j < 10; ++j) {
      for (let k = 0; k < 10; ++k) {
        let pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
        let plus = i * 100 + j * 10 + k;
        if (pow == plus) {
          console.log(pow);
        }
      }
    }
  }
}
three_digit_armstrong_number();

/**
 * bai 4: in ra man hinh
 */
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}

/**
 * bai 5: tính giá trị mũ
 */
function exp(b, n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}
console.log(exp(-2, 10));

/**
 * bai 6: lọc ký tự
 */
function unique_char(str1) {
  let str = str1;
  let uniql = "";
  let objOutput = {};
  for (let x = 0; x < str.length; x++) {
    objOutput[str.charAt(x)] = 1;
    // if (uniql.indexOf(str.charAt(x)) == -1) {
    //   uniql = uniql+ str.charAt(x);
    // }
  }
  return Object.keys(objOutput).join('');
}
console.log(unique_char("thequickbrownfoxjumpsovrethelazydog"));


//bai 6
let str1 = "thequickbrownfoxjumpsoverthelazydog";
let str2 = "";
for (let i = 0; i < str1.length; i++) {
  if (str2.indexOf(str1[i]) == -1) {
    str2 += str1[i];
  }
}

let a = str2.split("")
console.log(a.reverse());
console.log(a);
