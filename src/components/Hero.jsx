import React from 'react';
import { ArrowRight, MessageCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';
import { encodeImageSrc, homePlacement } from '../data/imageCatalog';

export const Hero = ({ onOpenQuote }) => {
  const primary = encodeImageSrc(homePlacement.hero.primary);
  const secondary = encodeImageSrc(homePlacement.hero.secondary);

  return (
    <section className="hero-section" id="home">
      <div className="film-pattern-bg" aria-hidden="true"></div>
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow eyebrow-light">Flexible Packaging Solutions</span>

            <h1 className="hero-headline">
              Packaging That Protects.<br />
              <span className="highlight-accent">Printing That Performs.</span>
            </h1>

            <p className="hero-description">
              High-quality flexible packaging solutions designed to protect your products,
              strengthen your brand presence, and meet diverse packaging requirements.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn btn-primary"
              >
                <span>Get a Quote</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div>
              <a href="#products" className="hero-explore-link">
                <span>Explore Products</span>
                <ChevronDown size={16} />
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-collage">
              <div className="hero-collage-primary">
                <img
                  src={primary}
                  alt="Stand-up zipper pouch printed for retail products"
                  className="hero-visual-img"
                  width="520"
                  height="640"
                  loading="eager"
                />
              </div>
              <div className="hero-collage-secondary">
                <img
                  src={secondary}
                  alt="Printed flexible snack packaging"
                  className="hero-visual-img"
                  width="360"
                  height="420"
                  loading="eager"
                />
              </div>
            </div>

            <div className="hero-floating-stat" aria-hidden="true">
              <div className="floating-stat-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="floating-stat-text">
                <span className="floating-stat-label">Material Integrity</span>
                <span className="floating-stat-val">Multi-Barrier Protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
