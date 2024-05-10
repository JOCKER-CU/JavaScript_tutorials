const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");
const themeToggler = document.querySelector(".theme-toggler");

// const menuIcon = document.querySelector('menu-icon').value;
// show menu 
// menuBtn.addEventListener('click', () => {
//     if (nav.className === 'nav-bar-menu') {
//         nav.classList.add('responsive');
//         // menuIcon.value = 'close';
//     } else {
//         nav.classList.add('nav-bar-menu');
//     }
// })

// navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Hello navbar")
}

//change theme 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})