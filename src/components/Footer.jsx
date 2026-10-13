import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import {
  COMPANY,
  getWhatsAppUrl,
  getPhoneUrl,
  getEmailUrl,
  hasPhone,
  hasWhatsApp,
  hasEmail,
  hasAddress
} from '../config/company';

export const Footer = ({ onOpenQuote }) => {
  const phoneConfigured = hasPhone();
  const whatsappConfigured = hasWhatsApp();
  const emailConfigured = hasEmail();
  const addressConfigured = hasAddress();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Partners', href: '#partners' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const productLinks = [
    'Center Seal Pouch',
    '3-Side Seal Pouch',
    'Stand-Up Pouch with Zipper',
    '3D Pouch',
    'Quad Seal Pouch',
    '2-Side Gusset Pouch'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="S.S. Brothers">
              <div className="brand-logo-img-wrap brand-logo-img-wrap--footer">
                <img
                  src="/images/logo/company-logo.png"
                  alt="S.S. Brothers"
                  className="brand-logo-img"
                />
              </div>
            </a>
            <p className="footer-bio">
              Flexible packaging and printing solutions for businesses seeking
              customized, visually effective and structurally sound packaging formats
              across multiple product categories.
            </p>
            <div className="footer-capability-tags">
              <span className="footer-tag">Flexible Packaging</span>
              <span className="footer-tag">Pouch Printing</span>
              <span className="footer-tag">Multi-layer Lamination</span>
              <span className="footer-tag">Custom Formats</span>
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Products</h3>
            <ul className="footer-links">
              {productLinks.map((name) => (
                <li key={name}>
                  <a href="#products">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={15} />
                <div>
                  <span className="label">Phone</span>
                  {phoneConfigured ? (
                    <a href={getPhoneUrl()}>{COMPANY.phone}</a>
                  ) : (
                    <span className="footer-placeholder-note val">
                      Available on request
                    </span>
                  )}
                </div>
              </li>

              <li className="footer-contact-item">
                <MessageCircle size={15} />
                <div>
                  <span className="label">WhatsApp</span>
                  {whatsappConfigured ? (
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {COMPANY.whatsapp}
                    </a>
                  ) : (
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-placeholder-note val"
                    >
                      Message us on WhatsApp
                    </a>
                  )}
                </div>
              </li>

              <li className="footer-contact-item">
                <Mail size={15} />
                <div>
                  <span className="label">Email</span>
                  {emailConfigured ? (
                    <a href={getEmailUrl()}>{COMPANY.email}</a>
                  ) : (
                    <span className="footer-placeholder-note val">
                      Available on request
                    </span>
                  )}
                </div>
              </li>

              <li className="footer-contact-item">
                <MapPin size={15} />
                <div>
                  <span className="label">Address</span>
                  {addressConfigured ? (
                    <span className="val">{COMPANY.address}</span>
                  ) : (
                    <span className="footer-placeholder-note val">
                      Available on request
                    </span>
                  )}
                </div>
              </li>
            </ul>

            {(!phoneConfigured || !emailConfigured) && (
              <button
                type="button"
                className="btn btn-primary btn-sm footer-quote-btn"
                onClick={onOpenQuote}
              >
                Request a Quote
              </button>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} S.S. Brothers. All rights reserved.
          </p>
          <nav className="footer-meta-links" aria-label="Footer meta navigation">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
