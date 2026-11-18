import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E5E5E3] py-3.5'
          : 'bg-[#F7F7F5] py-5'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Personal Wordmark */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-[#171717] hover:opacity-80 transition-opacity"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#666666] hover:text-[#171717] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#171717] bg-[#FFFFFF] border border-[#E5E5E3] px-3 py-1.5 rounded hover:bg-[#EAEAEA] transition-all flex items-center gap-1"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#171717] bg-[#FFFFFF] border border-[#E5E5E3] px-3 py-1.5 rounded hover:bg-[#EAEAEA] transition-all flex items-center gap-1"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={PERSONAL_INFO.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Srujan_RB_Resume.pdf"
            className="text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#171717] px-3 py-1.5 rounded hover:bg-[#333333] transition-all flex items-center gap-1 shadow-sm"
          >
            Resume
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#171717] hover:bg-[#EBEBEA] rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F7F5] border-b border-[#E5E5E3] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#171717] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E5E5E3] flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#666666] hover:text-[#171717]"
              >
                GitHub &rarr;
              </a>
              <span className="text-[#D1D1CE]">&bull;</span>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#666666] hover:text-[#171717]"
              >
                LinkedIn &rarr;
              </a>
            </div>
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Srujan_RB_Resume.pdf"
              className="btn-primary text-xs w-full justify-center flex items-center gap-1.5"
            >
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

