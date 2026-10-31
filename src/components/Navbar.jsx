import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY } from '../config/company';

export const Navbar = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Partners', href: '#partners' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="#home" className="brand-logo" aria-label={`${COMPANY.name} Home`}>
              <div className="brand-logo-img-wrap">
                <img
                  src="/images/logo/company-logo.png"
                  alt={`${COMPANY.name} – Flexible Packaging Solutions`}
                  className="brand-logo-img"
                />
              </div>
            </a>

            {/* Desktop Menu */}
            <nav aria-label="Primary Navigation">
              <ul className="nav-menu">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`nav-link ${item.active ? 'active' : ''}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="nav-actions">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn btn-primary btn-nav-quote"
              >
                <span>Get a Quote</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-logo">
              <div className="brand-logo-img-wrap">
                <img
                  src="/images/logo/company-logo.png"
                  alt={COMPANY.name}
                  className="brand-logo-img"
                />
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-menu-links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={item.active ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileOpen(false);
                onOpenQuote();
              }}
            >
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
