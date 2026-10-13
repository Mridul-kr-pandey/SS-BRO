import React from 'react';
import {
  Settings2,
  Package,
  ScanLine,
  Headphones
} from 'lucide-react';
import { encodeImageSrc, homePlacement } from '../data/imageCatalog';

export const WhyChooseUs = () => {
  const features = [
    {
      number: '01',
      icon: Settings2,
      title: 'Custom Packaging',
      desc: 'Each packaging requirement is treated individually — dimensions, barrier structures, material grades and seal types are configured around your product\'s specific needs.'
    },
    {
      number: '02',
      icon: Package,
      title: 'Multiple Pouch Formats',
      desc: 'A comprehensive range of pouch structures including center seal, 3-side seal, stand-up zipper, 3D, quad seal and gusset variants to accommodate every category.'
    },
    {
      number: '03',
      icon: ScanLine,
      title: 'Quality-Focused Approach',
      desc: 'Consistent attention to seal integrity, lamination quality and printing accuracy to ensure every batch meets the standard your product deserves.'
    },
    {
      number: '04',
      icon: Headphones,
      title: 'Responsive Business Support',
      desc: 'Direct communication and clear coordination from initial specification through to dispatch — making the packaging process straightforward for your business.'
    }
  ];

  return (
    <section className="section why-section" id="why">
      <div className="film-pattern-bg" aria-hidden="true"></div>

      <div className="container">
        <div className="why-grid">
          {/* Visual Side */}
          <div className="why-visual-wrapper">
            <div className="why-visual-card">
              <img
                src={encodeImageSrc(homePlacement.whyChooseUs)}
                alt="Stand-up zipper pouch photographed during production"
                className="why-img"
                width="600"
                height="520"
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature List Side */}
          <div className="why-content">
            <span className="eyebrow eyebrow-light">Why Choose Us</span>
            <div className="section-header" style={{ marginBottom: '28px' }}>
              <h2 style={{ color: '#ffffff' }}>
                Built Around Your Packaging Requirements
              </h2>
            </div>

            <div className="why-features-list">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.number} className="why-feature-block">
                    <span className="why-number">{feat.number}</span>
                    <div className="why-feature-details">
                      <h4>
                        <Icon
                          size={16}
                          style={{
                            display: 'inline',
                            marginRight: '8px',
                            verticalAlign: 'text-bottom',
                            color: 'var(--accent)'
                          }}
                        />
                        {feat.title}
                      </h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
