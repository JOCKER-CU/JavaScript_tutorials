const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squares = numbers.map(square);
const cubes = numbers.map(cube);
console.log(squares);
console.log(cubes);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

const students = ["Mg Mg", "Han Lay", "La Yaung", "Myo Maung", "Thiha Aung"];

console.log(students.map(upperCase));
function upperCase(element) {
    return element.toUpperCase();
}

console.log(students.map(lowerCase));
function lowerCase(element) {
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}