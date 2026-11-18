/**
 * Bespoke Magnetic Cursor with Fluid Lerp Interpolation
 * Provides tactile feedback on interactive buttons, cards, and links.
 * Automatically disables on mobile touch interfaces to maintain native performance.
 */

class CustomCursor {
  constructor() {
    this.dot = document.querySelector('.custom-cursor-dot');
    this.ring = document.querySelector('.custom-cursor-ring');
    if (!this.dot || !this.ring) return;

    // Check if device supports hover/fine pointer
    if (!window.matchMedia('(pointer: fine)').matches) {
      this.dot.style.display = 'none';
      this.ring.style.display = 'none';
      return;
    }

    document.body.classList.add('has-custom-cursor');

    this.mouse = { x: -100, y: -100 };
    this.pos = { x: -100, y: -100 };
    this.speed = 0.18; // Lerp damping factor
    this.isHovering = false;

    this.init();
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      // Dot moves instantly with mouse
      this.dot.style.transform = `translate(${this.mouse.x}px, ${this.mouse.y}px)`;
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      this.ring.classList.add('cursor-click');
    });

    window.addEventListener('mouseup', () => {
      this.ring.classList.remove('cursor-click');
    });

    // Magnetic and hover detection
    this.bindHoverElements();

    this.render();
  }

  bindHoverElements() {
    const targets = document.querySelectorAll('a, button, input, textarea, select, .project-card, .bento-cell, .filter-tab');
    
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        this.ring.classList.add('cursor-hover');
      });

      el.addEventListener('mouseleave', () => {
        this.ring.classList.remove('cursor-hover');
      });
    });
  }

  render() {
    // Smooth lerp trailing position for the ring
    this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
    this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

    this.ring.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px)`;

    requestAnimationFrame(() => this.render());
  }
}

window.CustomCursor = CustomCursor;

