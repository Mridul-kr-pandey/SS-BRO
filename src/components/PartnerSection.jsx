import React from 'react';
import { Globe } from 'lucide-react';
import { partners } from '../data/partners';
import { COMPANY } from '../config/company';

export const PartnerSection = () => {
  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Business Network</span>
          <h2>Partners &amp; Business Network</h2>
          <p className="section-subtitle">
            Building business relationships across markets.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              {partner.logo && (
                <div className="partner-logo-wrap">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} packaging`}
                    className="partner-logo-img"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="partner-card-header">
                <Globe size={18} className="partner-network-icon" aria-hidden="true" />
                {partner.country && (
                  <span className="partner-country-badge">{partner.country}</span>
                )}
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-category">{partner.category}</p>
            </div>
          ))}
        </div>

        <p className="partner-trust-note">
          The above are companies that {COMPANY.name} has conducted business with.
          These are listed for informational context only and do not imply formal strategic partnerships.
        </p>
      </div>
    </section>
  );
};
