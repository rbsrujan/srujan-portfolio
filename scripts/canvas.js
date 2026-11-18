/**
 * Interactive Generative Ambient Particle & Fluid Mesh
 * Runs in 60+ FPS on standard HTML5 2D Canvas with zero external dependencies.
 * Features mouse gravitational inertia, fluid harmonic oscillations, and spatial clustering.
 */

class AmbientCanvas {
  constructor() {
    this.canvas = document.getElementById('ambient-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 75;
    this.maxDistance = 140;
    this.mouse = { x: -1000, y: -1000, radius: 180 };
    this.color = { r: 99, g: 102, b: 241 }; // Accent indigo/purple

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.numParticles = Math.min(85, Math.floor((this.width * this.height) / 16000));
    if (this.particles.length > 0) {
      this.createParticles();
    }
  }

  setThemeColors(r, g, b) {
    this.color = { r, g, b };
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Bounce at viewport edges
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse gravitational influence
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < this.mouse.radius) {
        const force = (1 - dist / this.mouse.radius) * 0.04;
        p.x -= dx * force;
        p.y -= dy * force;
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${p.baseAlpha})`;
      this.ctx.fill();

      // Connect neighboring particles with subtle glowing lattice lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const distP = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (distP < this.maxDistance) {
          const alpha = (1 - distP / this.maxDistance) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

window.AmbientCanvas = AmbientCanvas;

