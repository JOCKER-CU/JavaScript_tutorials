//  function Declaration

function hello() {
    console.log("Hello, Function Declaration!");
}

hello();
// function expression

const funEx = function () {
    console.log("hello, Function Expression!");
}

funEx();

setTimeout(hello, 3000);
setTimeout(funEx, 4000);


setTimeout(function () {
    console.log("Hello, set Time Out Function!")
}, 6000);


const numbers = [1, 2, 34, 5, 6, 7, 8, 9];
const squares = numbers.map(square);
function square(element) {
    return Math.pow(element, 2);
}
console.log(squares);

const squaresExp = numbers.map(function (element) {
    return Math.pow(element, 2);
});
console.log(squaresExp);

const cubes = numbers.map(function cube(element) {
    return Math.pow(element, 3);
});

const evenNums = numbers.filter(function (element) {
    return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})


console.log(total);
console.log(evenNums);
console.log(oddNums);
// function cube(element) {
//     return Math.pow(element, 3);
// }
console.log("Cube values is here: " +cubes);