// Animate skill bars when they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.sk-fill, .ids-fill');

  fills.forEach(el => {
    el.style.animationPlayState = 'paused';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fills.forEach(el => observer.observe(el));
});
