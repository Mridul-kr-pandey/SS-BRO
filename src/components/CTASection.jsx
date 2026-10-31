import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, COMPANY } from '../config/company';

export const CTASection = ({ onOpenQuote }) => {
  return (
    <section className="final-cta-section" id="contact">
      <div className="final-cta-decor-circle" aria-hidden="true" style={{ width: '400px', height: '400px' }}></div>
      <div className="final-cta-decor-circle" aria-hidden="true" style={{ width: '700px', height: '700px', opacity: 0.4 }}></div>
      <div className="film-pattern-bg" aria-hidden="true"></div>

      <div className="container">
        <div className="final-cta-content">
          <span className="eyebrow eyebrow-light" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            Get in Touch
          </span>
          <h2 className="final-cta-heading">
            Looking for the Right Packaging Solution?
          </h2>
          <p className="final-cta-text">
            Tell us about your packaging requirement and our team can help you explore the
            right format, structure and specifications suited to your product.
          </p>

          <div className="final-cta-buttons">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuote}
              className="btn btn-secondary"
              aria-label={`Request a packaging quote from ${COMPANY.name}`}
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
