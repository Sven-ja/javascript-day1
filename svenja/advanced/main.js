// EXERCISE 1
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

c = Number(c);
d = Number(d);

let sum = a + b + c + d + e;
console.log(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

f = Number(f);
i = Number(i);

let multiply = f * g * h * i;
console.log(multiply);

let divide = sum / multiply;
document.write(divide);


// EXERCISE 2
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.unshift("Matt");
people.pop();
people.push("Svenja");
console.log(people);

console.log(people.slice(2, 4));
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);


// EXERCISE 3
let multiDimArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]]

console.log(multiDimArr);
console.log(multiDimArr[1][1], multiDimArr[4][2], multiDimArr[5][3], multiDimArr[2][1]);