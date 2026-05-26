document.addEventListener('DOMContentLoaded', () => {
  // Contact form submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submit-btn');
      const status = document.getElementById('form-status');

      btn.textContent = 'Sending…';
      btn.disabled = true;

      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        status.textContent = 'Message sent — I\'ll get back to you soon.';
        status.style.color = '#00a844';
        status.style.display = 'block';
        form.reset();
        btn.textContent = 'Sent ✓';
      } else {
        status.textContent = 'Something went wrong. Try emailing me directly.';
        status.style.color = '#FF2D55';
        status.style.display = 'block';
        btn.textContent = 'Send Message →';
        btn.disabled = false;
      }
    });
  }
});
