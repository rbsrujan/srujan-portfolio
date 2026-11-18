/**
 * Adaptive Multi-Theme Orchestrator
 * Supports 'dark' (Cyber Dark Default), 'light' (Editorial Clean), and 'cyber' (Matrix Emerald).
 * Automatically coordinates canvas particle colors and persists selection in localStorage.
 */

class ThemeManager {
  constructor() {
    window.themeManager = this;
    this.currentTheme = localStorage.getItem('site_theme') || 'dark';
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');

    this.init();
  }

  init() {
    this.setTheme(this.currentTheme, false);

    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const nextTheme = this.getNextTheme();
        this.setTheme(nextTheme, true);
      });
    }
  }

  getNextTheme() {
    if (this.currentTheme === 'dark') return 'cyber';
    if (this.currentTheme === 'cyber') return 'light';
    return 'dark';
  }

  setTheme(themeName, playAudio = false) {
    this.currentTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('site_theme', themeName);

    if (playAudio && window.soundFX) {
      window.soundFX.playClick();
    }

    // Update button text
    if (this.themeToggleBtn) {
      const label = this.themeToggleBtn.querySelector('.theme-label');
      if (label) {
        label.textContent = themeName.toUpperCase();
      }
    }

    // Adapt background canvas particle color
    if (window.ambientCanvas) {
      if (themeName === 'cyber') {
        window.ambientCanvas.setThemeColors(34, 197, 94); // Emerald
      } else if (themeName === 'light') {
        window.ambientCanvas.setThemeColors(99, 102, 241); // Indigo
      } else {
        window.ambientCanvas.setThemeColors(139, 92, 246); // Purple/Blue
      }
    }
  }
}

window.ThemeManager = ThemeManager;

