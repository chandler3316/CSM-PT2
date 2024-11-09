document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.slide-up');
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in class when section enters the viewport
                entry.target.classList.add('scroll-visible');
            } else {
                // Remove fade-in class to trigger fade-out when section exits
                entry.target.classList.remove('scroll-visible');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});
