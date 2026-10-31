import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import {
  getWhatsAppUrl,
  getPhoneUrl,
  getEmailUrl,
  COMPANY,
  hasPhone,
  hasEmail
} from '../config/company';

export const FloatingContact = ({ onOpenQuote }) => {
  const phoneConfigured = hasPhone();
  const emailConfigured = hasEmail();

  return (
    <>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-desktop"
        aria-label={`Chat with ${COMPANY.name} on WhatsApp`}
      >
        <MessageCircle size={20} />
        <span>WhatsApp Us</span>
      </a>

      <div className="mobile-bottom-bar" role="navigation" aria-label="Mobile quick contact">
        <div className="mobile-bottom-bar-inner">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn mobile-bar-btn-wa"
            aria-label={`WhatsApp ${COMPANY.name}`}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          {phoneConfigured ? (
            <a
              href={getPhoneUrl()}
              className="mobile-bar-btn mobile-bar-btn-call"
              aria-label={`Call ${COMPANY.phone}`}
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
          ) : (
            <button
              type="button"
              className="mobile-bar-btn mobile-bar-btn-call"
              onClick={onOpenQuote}
              aria-label="Request a call back via quote form"
            >
              <Phone size={16} />
              <span>Call</span>
            </button>
          )}

          {emailConfigured ? (
            <a
              href={getEmailUrl()}
              className="mobile-bar-btn mobile-bar-btn-email"
              aria-label={`Email ${COMPANY.email}`}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          ) : (
            <button
              type="button"
              className="mobile-bar-btn mobile-bar-btn-email"
              onClick={onOpenQuote}
              aria-label="Request contact via quote form"
            >
              <Mail size={16} />
              <span>Email</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
