const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let countries = ['Finland', 'Sweden', 'Norway']

// ex1
//create an empty set
const aSet = new Set()
//create a set containing 0 to 10 using loop
for (let i = 0; i < 10; i++) {
    aSet.add(i)
}
console.log(aSet)
//remove an element from a set
aSet.delete(2)
console.log(aSet)
//clear a set
aSet.clear()
console.log(aSet)
//create a set of 5 string elements from array
let arr1 = ['a', 'b', 'c', 'd', 'e']
const bSet = new Set(arr1)
console.log(bSet)
//create a map of countries and number of characters of a country
countries = countries.map((e) => {
    return [e, e.length]
})
const map = new Map(countries)
console.log(map)

//ex2
//find a union b
let c = [...a, ...b];
let cSet = new Set(c);
console.log(cSet);
//find a intersection b
let d = a.filter((e) => b.includes(e));
let dSet = new Set(d);
console.log(dSet);
//find a without b
let e = a.filter((e) => !b.includes(e));
let eSet = new Set(e);
console.log(eSet);

//ex3
//get the number of languages
const newCountries = require('./countryData.js')
// let languages = newCountries.map((e) => e.languages);
// languages = languages.flat();
// let lanSet = new Set(languages);
// console.log(lanSet.size);
//10 most spoken languages
function mostSpokenLanguage(arr, num) {
    let languages = arr.map(e => e.languages);
    languages = languages.flat()
    let lanSet = new Set(languages);
    const counts = []
    for (let lan of lanSet) {
        const filteredLan = languages.filter(l => l == lan)
        counts.push({ lang: lan, count: filteredLan.length })
    }
    return counts.sort((a, b) => {
       return b.count - a.count
    }).slice(0, num)
}

console.log(mostSpokenLanguage(newCountries, 10))