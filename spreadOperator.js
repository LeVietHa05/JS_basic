let ar1 = [1, 'amor', 123];
let ar2 = [2, 'sword', 5];
let ar3 = [...ar1, ...ar2];
console.log(ar3);

const cart = ['apple', 'orange'];
cart.push('pear', 'âsf', 'àiiuav', 1);
console.log(cart);
const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']
console.log(poppedIngredient);
const num1 = [1,2,3];
const num2 = [4,5,6]
const num = num1.concat(num2) //[1,2,3,4,5,6]
const num5 = num.slice(0, -1)
const num3 = num.slice(3)
console.log(num5);