/**
 * Interactive Embedded Developer CLI Terminal
 * Enables tech leads and engineering hiring managers to explore capabilities
 * via keyboard commands or direct clicks.
 */

class DeveloperTerminal {
  constructor() {
    window.developerTerminal = this;
    this.modal = document.getElementById('terminal-modal');
    this.openBtn = document.getElementById('terminal-toggle-btn');
    this.closeBtn = document.getElementById('terminal-close-btn');
    this.screen = document.getElementById('terminal-screen');
    this.input = document.getElementById('terminal-cli-input');
    this.historyEl = document.getElementById('terminal-history');

    if (!this.modal || !this.input) return;

    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => `
Available system commands:
  <span style="color:#38bdf8">about</span>     - Architectural overview & biography
  <span style="color:#38bdf8">skills</span>    - Distributed systems & AI stack breakdown
  <span style="color:#38bdf8">projects</span>  - Production case studies
  <span style="color:#38bdf8">stats</span>     - Telemetry & benchmark metrics
  <span style="color:#38bdf8">contact</span>   - Direct engineering channels & encrypted PGP
  <span style="color:#38bdf8">theme</span>     - Switch theme: 'theme cyber', 'theme dark', 'theme light'
  <span style="color:#38bdf8">clear</span>     - Clear terminal buffer
  <span style="color:#38bdf8">exit</span>      - Close terminal session`,

      about: () => `
[AUTHOR IDENTITY]
Alex Vance &bull; Staff Creative Technologist & Distributed Systems Architect
Location: San Francisco, CA / Hybrid Remote
Specialization: High-throughput WebGL/WebGPU graphics pipelines, Multi-agent autonomous swarms, Low-latency financial trading consoles.
Core Philosophy: Zero-compromise UI aesthetics married to sub-millisecond systems engineering.`,

      skills: () => `
[CORE TECHNICAL RADAR]
&bull; Graphics & UI: WebGL2, WebGPU, Three.js, Canvas 2D, GLSL Shaders, TailwindCSS, CSS Houdini
&bull; Languages: TypeScript, Rust, Go, Python, C++, Modern ESNext
&bull; Backend & Infra: gRPC, WebSockets, Kafka, Docker, Kubernetes, Zero-Knowledge STARKs
&bull; AI Systems: Autonomous Agent Orchestration, Vector DBs, LangChain/LlamaIndex, TensorRT-LLM`,

      projects: () => `
[FEATURED DEPLOYMENTS]
1. <span style="color:#38bdf8">Aetheria Engine</span>  - 120 FPS WebGPU Neural Rendering Engine
2. <span style="color:#38bdf8">OmniFlow AI</span>      - 64-Node Distributed Autonomous Agent Swarm
3. <span style="color:#38bdf8">Hyperion Finance</span> - 410ns Sub-microsecond DeFi Orderbook Terminal
4. <span style="color:#38bdf8">Chronos Cloud</span>    - 500k+ TPS ZK-STARK Cryptographic Compute Mesh`,

      stats: () => `
[SYSTEM TELEMETRY]
&bull; Average Tick Latency: 410ns
&bull; Max Concurrent Shards: 64 Workers
&bull; Production Uptime: 99.998%
&bull; Lighthouse Core Web Vitals: 100/100/100/100`,

      contact: () => `
[TRANSMISSION CHANNELS]
&bull; Email: alex.vance.dev@gmail.com
&bull; GitHub: github.com/alexvance-architect
&bull; LinkedIn: linkedin.com/in/alex-vance-tech
&bull; Encrypted Signal: @alexvance.01`,

      clear: () => {
        this.historyEl.innerHTML = '';
        return '';
      },

      exit: () => {
        this.close();
        return 'Session terminated.';
      }
    };

    this.init();
  }

  init() {
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Keyboard shortcut: Ctrl + ` or Cmd + `
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        this.modal.classList.contains('is-open') ? this.close() : this.open();
      }
      if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
        this.close();
      }
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        this.executeCommand(cmd);
        this.input.value = '';
      }
    });
  }

  open() {
    this.modal.classList.add('is-open');
    if (window.soundFX) window.soundFX.playWhoosh();
    setTimeout(() => this.input.focus(), 100);
  }

  close() {
    this.modal.classList.remove('is-open');
    if (window.soundFX) window.soundFX.playClick();
  }

  executeCommand(rawCmd) {
    if (!rawCmd) return;
    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1];

    if (window.soundFX) window.soundFX.playClick();

    // Create command log row
    const userRow = document.createElement('div');
    userRow.innerHTML = `<span style="color:#10b981">guest@vance-os:~$</span> <span>${rawCmd}</span>`;
    this.historyEl.appendChild(userRow);

    const responseRow = document.createElement('div');
    responseRow.style.marginBottom = '0.75rem';

    if (cmd === 'theme') {
      if (['dark', 'light', 'cyber'].includes(arg)) {
        if (window.themeManager) window.themeManager.setTheme(arg);
        responseRow.innerHTML = `<span style="color:#10b981">System theme switched to '${arg}'.</span>`;
      } else {
        responseRow.innerHTML = `<span style="color:#ef4444">Unknown theme. Valid: dark, light, cyber</span>`;
      }
    } else if (this.commands[cmd]) {
      const output = this.commands[cmd]();
      if (output) {
        responseRow.innerHTML = output;
      }
    } else {
      responseRow.innerHTML = `<span style="color:#ef4444">Command not recognized: '${cmd}'. Type <span style="color:#38bdf8">help</span> for a list of valid commands.</span>`;
    }

    if (cmd !== 'clear') {
      this.historyEl.appendChild(responseRow);
    }

    this.screen.scrollTop = this.screen.scrollHeight;
  }
}

window.DeveloperTerminal = DeveloperTerminal;

