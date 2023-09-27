// EXERCISE 1
const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars);

console.log(cars.sort());


// EXERCISE 2
const fruit = ["apple", "banana", "kiwi"];

fruit.push("orange");
console.log(fruit);

fruit.pop();
console.log(fruit);


const animals = ["monkey", "horse", "dog"];
animals.sort();
console.log(animals);

animals.unshift("cat");
console.log(animals);


// EXERCISE 3
let fruitsalad = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(fruitsalad);

let fruits = fruitsalad.split("/");
console.log(fruits);

let fruitList = fruits.join("<br><br>");
document.write(fruitList);


