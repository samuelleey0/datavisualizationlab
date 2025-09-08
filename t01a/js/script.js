// SPA-like navigation and UI feedback
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = {
        home: document.getElementById('nav-home'),
        televisions: document.getElementById('nav-televisions'),
        about: document.getElementById('nav-about')
    };
    const sections = {
        home: document.getElementById('home-section'),
        televisions: document.getElementById('televisions-section'),
        about: document.getElementById('about-section')
    };
    const logo = document.getElementById('logo-home');

    function showSection(section) {
        for (const key in sections) {
            if (sections[key]) sections[key].style.display = (key === section) ? '' : 'none';
        }
        for (const key in navLinks) {
            if (navLinks[key]) navLinks[key].classList.toggle('active', key === section);
        }
    }

    // Navigation click events
    if (navLinks.home) navLinks.home.addEventListener('click', e => { e.preventDefault(); showSection('home'); });
    if (navLinks.televisions) navLinks.televisions.addEventListener('click', e => { e.preventDefault(); showSection('televisions'); });
    if (navLinks.about) navLinks.about.addEventListener('click', e => { e.preventDefault(); showSection('about'); });
    if (logo) logo.addEventListener('click', () => showSection('home'));

    // Mouseover feedback
    Object.values(navLinks).forEach(link => {
        if (link) {
            link.addEventListener('mouseenter', () => link.classList.add('hovered'));
            link.addEventListener('mouseleave', () => link.classList.remove('hovered'));
        }
    });

    // On page load, show correct section based on .active
    for (const key in navLinks) {
        if (navLinks[key] && navLinks[key].classList.contains('active')) {
            showSection(key);
            break;
        }
    }
});
