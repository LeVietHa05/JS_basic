function sing(songName) {
  if (typeof songName !== "string") {
    console.log("hey u mother fucker, that is not a song");
    return false;
  }
  console.log(`searching for ${songName}`);
  console.log("found");
  console.log(`now playing ${songName}`);
}
let x = 10;
let a = 10;
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  a = a + x;
  return x + y;
  console.log(x + y);
  console.log("askjb");
}

function sumArray(array) {
  let total = 0;
  for (let i of array) {
    total += i;
  }
  return total;
}

function returnDay(DayToCheck) {
  const DayOfWeek = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  if (typeof DayToCheck !== "number") return false;
  if (DayToCheck < 1 || DayToCheck > 7) return null;
  return DayOfWeek[DayToCheck];
}

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};
