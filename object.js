const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

let keyProps = 'special'
const student = {
  "name": "Nguyen Van A",
  age: 18,
  "main-role": ["Support", "Entry"],
  1: 'first',
  [keyProps]: 'special key',
}
for (let key of Object.keys(student)) {
  console.log(key);
}
student.age = 22; //cap nhat gia tri
student.major = 'ee'
for (const value of Object.values(student)) {
  console.log(value)
}
for (const key in student) {
  console.log(student[key]);
}

JSON.abilities[0].ability.name

const classroom = {
  1: {
    name: 'Nguyen Van A',
    age: 16,
    gender: "M",
    favourite: ['reading', 'coding', 'workout'],
    abroad: true,
  },
  2: {
    name: 'Nguyen Van B',
    age: 16,
    gender: "M",
    favourite: ['gaming', 'coding'],
    abroad: false,
  },
  3: {
    name: 'Nguyen Thi A',
    age: 17,
    gender: "F",
    favourite: ['singing'],
    abroad: true,
  },
  4: {
    name: 'Nguyen Thi B',
    age: 18,
    gender: "F",
    favourite: ['writing', 'music', 'chatting'],
    abroad: true,
  },
}

for (student in classroom) {
  console.log(classroom[student].name);
}

function key_value_pairs(obj) {
  const length = Object.keys(obj).length;
  const pairs = new Array(length);
  for (let i = 0; i < length; i++) {
    pairs[i] = [Object.keys(obj)[i], Object.values(obj)[i]]
  }
  return pairs;
}

console.log(key_value_pairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
[["red", "#FF0000"], ["green", "#00FF00"], ["white", "#FFFFFF"]]

function colorPrinting(color) {
  const colorArray = [];
  for (i in color) {
    // let tempArr = [];
    // tempArr.push(i, color[i])
    colorArray.push([i, color[i]])
  }
  return colorArray
}

console.log(colorPrinting({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))

function colorPrinting2(color) {
  let colorArray = [];
  for (i of Object.keys(color)) {
    colorArray.push([i]);
  };
  console.log(colorArray);
  for (let i = 0; i < Object.keys(color).length; i++) {
    colorArray[i].push(Object.values(color)[i]);
  };
  return colorArray;
};
console.log(colorPrinting2({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))