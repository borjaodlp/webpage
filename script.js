// Toggle navigation menu on mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('header nav');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
});
