import React from 'react';
import { Check, Shield } from 'lucide-react';
import { encodeImageSrc, homePlacement } from '../data/imageCatalog';

export const AboutPreview = () => {
  const points = [
    'Customizable Packaging Formats',
    'Product-Focused Solutions',
    'Business-Oriented Service'
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src={encodeImageSrc(homePlacement.about)}
                alt="Stand-up zipper pouch produced for an Ayurvedic powder pack"
                className="about-img"
                width="600"
                height="500"
                loading="lazy"
              />
            </div>

            <div className="about-floating-badge">
              <div className="about-floating-badge-icon">
                <Shield size={22} />
              </div>
              <div>
                <div className="about-floating-badge-title">Precision Converting</div>
                <div className="about-floating-badge-sub">High-precision seal &amp; pouch forming</div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">About SS BROS CO</span>

            <h2 className="about-heading">
              Flexible Packaging Solutions Built Around Your Product
            </h2>

            <p className="about-p-primary">
              SS BROS CO provides flexible packaging and printing solutions for
              businesses looking for practical, customized and visually effective packaging
              formats.
            </p>

            <p className="about-p-secondary">
              We cater to diverse brand needs with multiple specialized pouch styles — including
              center seal, 3-side seal, stand-up zipper pouches, and multi-dimensional quad
              structures designed to safeguard freshness and elevate shelf distinction.
            </p>

            <div className="about-features-list">
              {points.map((point) => (
                <div key={point} className="about-feature-item">
                  <div className="about-check-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
