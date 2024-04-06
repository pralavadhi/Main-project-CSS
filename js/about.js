document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.about section');

    function checkScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
});
