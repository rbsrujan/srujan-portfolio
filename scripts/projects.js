/**
 * Project Showcase & Case Study Drawer Engine
 * Powers 3D card tilt, category filtering, and modal drawer deep dives.
 */

const PROJECTS_DATA = [
  {
    id: 'aetheria',
    category: 'graphics',
    title: 'Aetheria Neural 3D Engine',
    tagline: 'Real-time 120 FPS WebGPU Raymarching Engine',
    desc: 'Bespoke high-performance graphics pipeline utilizing WebGPU compute shaders, procedural raymarching, and SIMD mathematical acceleration for rendering complex volumetric neural scenes directly in the browser.',
    image: 'assets/projects/aetheria.svg',
    tags: ['WebGPU', 'GLSL Shaders', 'TypeScript', 'SIMD', 'Web Workers'],
    stats: [
      { label: 'Framerate', val: '120 FPS' },
      { label: 'Latency', val: '0.84ms' },
      { label: 'Memory Footprint', val: '< 38MB' }
    ],
    architecture: 'Custom multi-threaded worker pipeline distributing geometry compute, temporal anti-aliasing (TAA), and volumetric shadow buffers across GPU compute passes.',
    challenges: 'Overcoming CPU-GPU serialization bottlenecks and maintaining deterministic 120 FPS on diverse mobile GPU architectures.',
    demoUrl: '#',
    githubUrl: 'https://github.com/alexvance-architect/aetheria-engine'
  },
  {
    id: 'omniflow',
    category: 'ai',
    title: 'OmniFlow AI Agent Swarm',
    tagline: 'Distributed Multi-Agent Consensus & Execution Matrix',
    desc: 'Autonomous multi-agent orchestration architecture supporting 64 simultaneous workers utilizing Raft consensus, dynamic sharding, and real-time gRPC telemetry streams for complex autonomous code generation and verification.',
    image: 'assets/projects/omniflow.svg',
    tags: ['Go', 'Rust', 'gRPC', 'Distributed Raft', 'LLM Agents'],
    stats: [
      { label: 'Swarm Nodes', val: '64 Workers' },
      { label: 'Consensus', val: '99.998%' },
      { label: 'Throughput', val: '8.4k req/s' }
    ],
    architecture: 'Directed Acyclic Graph (DAG) task engine featuring distributed memory locks, vector similarity verification, and isolated execution sandboxes.',
    challenges: 'Preventing LLM hallucination cascade through automated counter-agent adversarial cross-examination.',
    demoUrl: '#',
    githubUrl: 'https://github.com/alexvance-architect/omniflow-swarm'
  },
  {
    id: 'hyperion',
    category: 'fintech',
    title: 'Hyperion High-Frequency Terminal',
    tagline: 'Sub-Microsecond Orderbook & Volatility Matrix',
    desc: 'Mission-critical institutional financial trading console processing tens of millions of market updates per second with zero garbage-collection pauses, custom circular ring buffers, and FPGA hardware telemetry hooks.',
    image: 'assets/projects/hyperion.svg',
    tags: ['C++', 'WebAssembly', 'WebSocket Kernel', 'Canvas 2D', 'FPGA'],
    stats: [
      { label: 'Tick-to-Trade', val: '410 ns' },
      { label: 'Throughput', val: '14.8M ops/s' },
      { label: 'L3 Cache Miss', val: '0.00%' }
    ],
    architecture: 'Zero-allocation data structures compiled to WebAssembly with direct SharedArrayBuffer memory access for zero-copy UI chart rendering.',
    challenges: 'Eliminating GC pauses entirely in browser runtimes during intense market volatility spikes.',
    demoUrl: '#',
    githubUrl: 'https://github.com/alexvance-architect/hyperion-terminal'
  },
  {
    id: 'chronos',
    category: 'systems',
    title: 'Chronos Decentralized Compute',
    tagline: 'Zero-Knowledge Verified Edge Infrastructure',
    desc: 'Decentralized serverless compute fabric enabling tamper-proof edge workloads verified through succinct cryptographic proofs (ZK-STARKs) with sub-second global state propagation.',
    image: 'assets/projects/chronos.svg',
    tags: ['Rust', 'ZK-STARKs', 'libp2p', 'WasmEdge', 'Docker'],
    stats: [
      { label: 'Verification', val: '< 18ms' },
      { label: 'Global TPS', val: '500k+' },
      { label: 'Edge Latency', val: '12ms' }
    ],
    architecture: 'Lattice-based cryptographic consensus married to lightweight WebAssembly sandboxes at 180+ global edge points of presence.',
    challenges: 'Minimizing STARK proof generation overhead while maintaining cryptographic soundness.',
    demoUrl: '#',
    githubUrl: 'https://github.com/alexvance-architect/chronos-compute'
  }
];

class ProjectShowcase {
  constructor() {
    window.projectShowcase = this;
    this.grid = document.getElementById('projects-grid');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.drawer = document.getElementById('case-study-drawer');
    this.drawerClose = document.getElementById('drawer-close-btn');

    this.init();
  }

  init() {
    this.renderProjects(PROJECTS_DATA);
    this.bindFilters();
    this.bind3DTilt();
    this.bindDrawer();
  }

  renderProjects(projects) {
    if (!this.grid) return;
    this.grid.innerHTML = '';

    projects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = `project-card reveal-fade-up delay-${(idx + 1) * 100}`;
      card.setAttribute('data-id', proj.id);
      card.setAttribute('data-category', proj.category);

      card.innerHTML = `
        <div class="project-img-wrapper">
          <span class="project-overlay-badge">${proj.tagline}</span>
          <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
        </div>
        <div class="project-body">
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-description">${proj.desc}</p>
          <div class="project-footer">
            <button class="view-case-study-btn" data-project="${proj.id}">
              Inspect Architecture &rarr;
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="hud-btn" style="padding:0.4rem 0.75rem;">
              GitHub
            </a>
          </div>
        </div>
      `;

      this.grid.appendChild(card);
    });

    // Re-bind hover and tilt after rendering
    this.bind3DTilt();
    if (window.customCursor) {
      window.customCursor.bindHoverElements();
    }
  }

  bindFilters() {
    this.filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        if (window.soundFX) window.soundFX.playClick();

        const cat = tab.getAttribute('data-filter');
        if (cat === 'all') {
          this.renderProjects(PROJECTS_DATA);
        } else {
          const filtered = PROJECTS_DATA.filter(p => p.category === cat);
          this.renderProjects(filtered);
        }
      });
    });
  }

  bind3DTilt() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  bindDrawer() {
    // Event delegation on grid for case study clicks
    if (this.grid) {
      this.grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.view-case-study-btn');
        if (btn) {
          const projId = btn.getAttribute('data-project');
          const proj = PROJECTS_DATA.find(p => p.id === projId);
          if (proj) this.openDrawer(proj);
        }
      });
    }

    if (this.drawerClose) {
      this.drawerClose.addEventListener('click', () => this.closeDrawer());
    }

    if (this.drawer) {
      this.drawer.addEventListener('click', (e) => {
        if (e.target === this.drawer) this.closeDrawer();
      });
    }
  }

  openDrawer(proj) {
    if (!this.drawer) return;
    if (window.soundFX) window.soundFX.playWhoosh();

    const titleEl = document.getElementById('drawer-project-title');
    const contentEl = document.getElementById('drawer-body-content');

    if (titleEl) titleEl.textContent = proj.title;
    if (contentEl) {
      contentEl.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" class="drawer-img" />
        
        <div class="drawer-metric-grid">
          ${proj.stats.map(s => `
            <div class="drawer-metric-box">
              <div class="drawer-metric-val">${s.val}</div>
              <div class="drawer-metric-lbl">${s.label}</div>
            </div>
          `).join('')}
        </div>

        <h4 style="font-family:var(--font-display); font-size:1.25rem; margin-bottom:0.75rem;">Architectural Blueprint</h4>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.6;">${proj.architecture}</p>

        <h4 style="font-family:var(--font-display); font-size:1.25rem; margin-bottom:0.75rem;">Engineering Hurdle & Resolution</h4>
        <p style="color:var(--text-secondary); margin-bottom:2rem; line-height:1.6;">${proj.challenges}</p>

        <div style="display:flex; gap:1rem;">
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex:1;">
            View Source Code
          </a>
          <button class="btn btn-secondary" onclick="window.projectShowcase.closeDrawer()" style="flex:1;">
            Close Inspector
          </button>
        </div>
      `;
    }

    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    if (!this.drawer) return;
    if (window.soundFX) window.soundFX.playClick();
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

window.ProjectShowcase = ProjectShowcase;

