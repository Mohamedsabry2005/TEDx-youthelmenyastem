window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';   

});
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

