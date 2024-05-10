//forEach()

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



console.log("Double");
numbers.forEach(double);
// console.log(numbers)
// console.log("Triple");
// numbers.forEach(triple);
// console.log("Square");
// numbers.forEach(square);
// console.log("Cube");
// numbers.forEach(cube);
console.log("simple")
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function triple(element, index, array) {
    array[index] = element * 3;
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array) {
    array[index] = Math.pow(element, 3);
}
function display(element) {
    console.log(element);
}

console.log(numbers);


let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(lowerCase);
// fruits.forEach(upperCase);
fruits.forEach(capatalize);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capatalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
    console.log(element);
}

