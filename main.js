const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


// Makes the hamburger turn into a cross and the menu slides out
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


// Makes the menu disappear when you click on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))