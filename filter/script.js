
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);
console.log(numbers);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 18, 19, 15, 20, 30, 40];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);

console.log("Adults List: " + adults);
console.log("Childs List:" +childs);

function isChild(element) {
    return element < 18;
}
function isAdult(element) {
    return element >= 18;
}

const words = ["orange", "apple", "coconut", "pineapple", "kiwi"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getLongWords(element) {
    return element.length > 6;
}
function getShortWords(element) {
    return element.length <= 6;

}

