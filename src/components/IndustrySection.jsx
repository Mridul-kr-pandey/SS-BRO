import React from 'react';
import { industries } from '../data/industries';
import { IndustryCard } from './IndustryCard';

export const IndustrySection = () => {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Applications</span>
          <h2>Packaging Solutions Across Industries</h2>
          <p className="section-subtitle">
            Serving diverse market segments with packaging solutions engineered for each
            sector's unique barrier, compliance, and presentation requirements.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};
