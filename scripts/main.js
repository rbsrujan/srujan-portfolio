/**
 * Main Application Orchestrator
 * Coordinates all UI engines, observers, scroll kinetics, and interactive forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Subsystems
  window.ambientCanvas = new AmbientCanvas();
  window.customCursor = new CustomCursor();
  window.themeManager = new ThemeManager();
  window.developerTerminal = new DeveloperTerminal();
  window.projectShowcase = new ProjectShowcase();

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      if (window.soundFX) window.soundFX.playClick();
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 4. Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 5. Interactive Metrics Counter Animation
  const metricCards = document.querySelectorAll('.metric-card');
  const metricObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  metricCards.forEach(card => metricObserver.observe(card));

  function animateMetric(card) {
    const numEl = card.querySelector('.metric-num');
    if (!numEl) return;
    const target = parseFloat(numEl.getAttribute('data-target'));
    const suffix = numEl.getAttribute('data-suffix') || '';
    const prefix = numEl.getAttribute('data-prefix') || '';
    const decimals = parseInt(numEl.getAttribute('data-decimals') || '0', 10);
    
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      numEl.innerHTML = `${prefix}${current.toFixed(decimals)}<span>${suffix}</span>`;
    }, stepTime);
  }

  // 6. Live Engineering Local Clock
  function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const now = new Date();
    const utcTime = now.toTimeString().split(' ')[0] + ' UTC';
    clockEl.textContent = utcTime;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 7. Interactive Contact Form with Validation & Toast
  const contactForm = document.getElementById('contact-form');
  const toastContainer = document.getElementById('toast-container');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Validate fields
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all telemetry channels.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Packet...</span>`;
      if (window.soundFX) window.soundFX.playClick();

      // Simulate network dispatch
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();

        showToast('Packet successfully delivered. Encrypted dispatch received!', 'success');
        if (window.soundFX) window.soundFX.playSuccess();
      }, 900);
    });
  }

  function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span style="color:${type === 'success' ? '#10b981' : '#ef4444'}">&bull;</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 20);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  window.showToast = showToast;
});

