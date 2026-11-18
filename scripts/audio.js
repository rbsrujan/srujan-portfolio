/**
 * Web Audio API Micro-Interaction Synthesizer
 * Zero external audio assets required. All sound frequencies are synthesized in real-time.
 * Features an explicit Mute/Unmute state with persistence in localStorage.
 */

class SoundFX {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem('sound_enabled') === 'true';
    this.soundToggleBtn = document.getElementById('sound-toggle-btn');

    this.updateToggleUI();
    if (this.soundToggleBtn) {
      this.soundToggleBtn.addEventListener('click', () => this.toggle());
    }
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.initAudioContext();
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled ? 'true' : 'false');
    this.updateToggleUI();
    if (this.enabled) {
      this.playSuccess();
    }
  }

  updateToggleUI() {
    if (!this.soundToggleBtn) return;
    const label = this.soundToggleBtn.querySelector('.sound-label');
    if (this.enabled) {
      this.soundToggleBtn.classList.add('active');
      if (label) label.textContent = 'Audio: ON';
    } else {
      this.soundToggleBtn.classList.remove('active');
      if (label) label.textContent = 'Audio: OFF';
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.045);
  }

  playWhoosh() {
    if (!this.enabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.audioCtx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.13);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.05, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.2);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.22);
    });
  }
}

window.soundFX = new SoundFX();

