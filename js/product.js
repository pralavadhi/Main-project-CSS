// Initialize ScrollReveal
ScrollReveal().reveal('.scroll-reveal', {
    delay: 300, // Delay in milliseconds before the animation starts
    distance: '20px', // How far the element moves in px
    origin: 'bottom', // Where the animation originates from
    duration: 800, // Duration of the animation in milliseconds
    easing: 'cubic-bezier(0.5, 0, 0, 1)', // Easing function
    reset: true // Reset the animation when the element is not in the viewport
});
