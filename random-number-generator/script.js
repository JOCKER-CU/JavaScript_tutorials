const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 1;
const max = 9;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.addEventListener('click', () => {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
})

let username = window.prompt("Enter Your Name: ");

username = username.trim().charAt(0).toUpperCase() +
    username.trim().slice(1).toLowerCase();
console.log(username);