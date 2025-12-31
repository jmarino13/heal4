// HEAL Wellness starter JS: mobile nav + smooth anchor + demo form behavior
(() => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const header = document.querySelector('[data-header]');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close on link click
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Smooth scrolling with header offset
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const offset = (header?.offsetHeight ?? 0) + 10;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.pushState(null, '', id);
  });

  // Demo intake form
  const form = document.getElementById('intakeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Replace this with Formspree / API call when ready.
      console.log('Intake submission (demo):', data);
      alert('Submitted! (Demo)\n\nNext step: connect this form to Formspree or your secure intake tool.');
      form.reset();
    });
  }
})();
