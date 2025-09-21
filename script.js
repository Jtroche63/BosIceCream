// JavaScript for the sticky navigation bar
const mainNav = document.getElementById('main-nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        // Show the navigation bar when scrolling down past the hero section
        mainNav.classList.add('visible');
    } else {
        // Hide the navigation bar at the top of the page
        mainNav.classList.remove('visible');
    }

    lastScrollY = window.scrollY;
});
