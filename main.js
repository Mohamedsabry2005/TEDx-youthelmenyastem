// global variables

// loader
const loader = document.getElementById('preloader');
// cursor
const cursor = document.querySelector(".cursor");
// animation navbar
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");
const btns = document.querySelectorAll(".button-primary");
const a = document.querySelectorAll('a')

// Event 
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.clientX +3 ;
    let topPosition = e.clientY +2;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})


// animation when hover
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

btns.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

btns.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})
a.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

a.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})


// pre load

window.addEventListener("load",() =>{
    loader.style.display = "none";
})

// omar gabaly popup

const showMore = document.getElementById('popup-btn');
const closeBtn = document.getElementById('popup-close');
const popup = document.getElementById('popup');

showMore.addEventListener('click',()=>{
    popup.classList.add('active')
})

closeBtn.addEventListener('click',()=> {
    popup.classList.remove('active')
})

// moustafa yasser

const showMore1 = document.getElementById('popup-btn1');
const closeBtn1 = document.getElementById('popup-close1');
const popup1 = document.getElementById('popup1');
showMore1.addEventListener('click',()=>{
    popup1.classList.add('active')
})

closeBtn1.addEventListener('click',()=> {
    popup1.classList.remove('active')
})


// Essam goda
const showMore2 = document.getElementById('popup-btn2');
const closeBtn2 = document.getElementById('popup-close2');
const popup2 = document.getElementById('popup2');
showMore2.addEventListener('click',()=>{
    popup2.classList.add('active')
})

closeBtn2.addEventListener('click',()=> {
    popup2.classList.remove('active')
})

// Essam goda
const showMore3 = document.getElementById('popup-btn3');
const closeBtn3 = document.getElementById('popup-close3');
const popup3 = document.getElementById('popup3');
showMore3.addEventListener('click',()=>{
    popup3.classList.add('active')
})

closeBtn3.addEventListener('click',()=> {
    popup3.classList.remove('active')
})