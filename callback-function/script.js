
hello(goodbye);
// goodbye();

// function hello() {
//     setTimeout(() => {
//         console.log("hello!");
//     }, 3000);

// }

function goodbye() {
    console.log("Goodbye!");
}

// call back function
function hello(callback) {
    console.log("Hello!");
    callback();
}

// Call back function

sum(displayPage, 1, 5);

function sum(callback, x, y) {
    let result = x + y;

    callback(result);
}

function displaySum(reuslt) {
    console.log(reuslt);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}