import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import {
  COMPANY,
  getWhatsAppUrl,
  getPhoneUrl,
  getEmailUrl,
  hasPhone,
  hasEmail
} from '../config/company';

export const TopBar = ({ onOpenQuote }) => {
  const phoneConfigured = hasPhone();
  const emailConfigured = hasEmail();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-announcement">
            <span className="top-bar-dot" aria-hidden="true"></span>
            <span>Flexible Packaging &amp; Printing Solutions</span>
          </div>

          <div className="top-bar-actions">
            {phoneConfigured ? (
              <a href={getPhoneUrl()} className="top-bar-link" aria-label={`Call ${COMPANY.name}`}>
                <Phone size={13} />
                <span>{COMPANY.phone}</span>
              </a>
            ) : (
              <button
                type="button"
                className="top-bar-link"
                onClick={onOpenQuote}
                aria-label="Request a call back via quote form"
              >
                <Phone size={13} />
                <span>Call Us</span>
              </button>
            )}

            <span className="top-bar-divider" aria-hidden="true"></span>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="top-bar-link"
              aria-label={`WhatsApp ${COMPANY.name}`}
            >
              <MessageCircle size={13} />
              <span>WhatsApp Us</span>
            </a>

            {emailConfigured ? (
              <>
                <span className="top-bar-divider" aria-hidden="true"></span>
                <a href={getEmailUrl()} className="top-bar-link" aria-label={`Email ${COMPANY.name}`}>
                  <Mail size={13} />
                  <span>{COMPANY.email}</span>
                </a>
              </>
            ) : (
              <>
                <span className="top-bar-divider" aria-hidden="true"></span>
                <button
                  type="button"
                  className="top-bar-link"
                  onClick={onOpenQuote}
                  aria-label="Request contact via quote form"
                >
                  <Mail size={13} />
                  <span>Email Us</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
