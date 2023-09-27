document.write("Hello from the Browser");
console.log("Hello from the Console");

let myName = "Hi my name is Svenja";
console.log(myName);

let age = 32;
console.log("and I am " + age + " years old.");

console.log(`I am ${age} years old.`);

let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];

console.log(players)

console.log(`The most valuable player of the match is ${players[2]}.`)


// intermediate 1

const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

console.log(cars.sort());

// intermediate 2

const fruits = ["apple", "banana", "kiwi"]
console.log(fruits);
console.log(fruits.sort());
fruits.push("orange");
console.log(fruits);

const removed = fruits.pop();
console.log(removed);


const pets = ["monkey", "horse", "dog"]
console.log(pets);
pets.unshift("cat");
console.log(pets);

// intermediate 3

let fruit_Line = ["mango/cherries/kiwi/grapes/pear/peach/orange/lemon"]

let fruit_sorted = new Array();
fruit_sorted = fruit_Line.split("/");
console.log(fruit_sorted);
