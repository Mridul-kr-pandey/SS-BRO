import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, AlertCircle, Info } from 'lucide-react';
import { products } from '../data/products';
import { COMPANY, getWhatsAppUrl } from '../config/company';

export const QuoteModal = ({ onClose, selectedProduct }) => {
  const [formData, setFormData] = useState({
    productType: selectedProduct ? selectedProduct.name : '',
    quantity: '',
    productName: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const firstFieldRef = useRef(null);

  // Close modal on Escape key press and manage focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const validate = (data = formData) => {
    const errs = {};
    if (!data.productType || !data.productType.trim()) {
      errs.productType = 'Please select a packaging format.';
    }
    if (!data.productName || !data.productName.trim()) {
      errs.productName = 'Please enter your product name or category.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (touched[name]) {
        const validation = validate(next);
        setErrors((prevErr) => ({ ...prevErr, [name]: validation[name] }));
      }
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validation = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: validation[name] }));
  };

  const buildMessage = () => {
    let msg = `Hello S.S. Brothers, I am interested in your flexible packaging solutions.\n\n`;
    msg += `Packaging Type: ${formData.productType}\n`;
    msg += `Product to be Packed: ${formData.productName.trim()}\n`;
    if (formData.quantity.trim()) msg += `Estimated Quantity: ${formData.quantity.trim()}\n`;
    if (formData.details.trim()) msg += `Additional Details: ${formData.details.trim()}\n`;
    msg += `\nPlease share more information and quotation.`;
    return msg;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const validation = validate(formData);
    setErrors(validation);
    setTouched({ productType: true, productName: true, quantity: true, details: true });
    if (Object.keys(validation).length > 0) {
      return;
    }
    const url = getWhatsAppUrl(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const validation = validate(formData);
    setErrors(validation);
    setTouched({ productType: true, productName: true, quantity: true, details: true });
    if (Object.keys(validation).length > 0) {
      return;
    }
    const body = encodeURIComponent(buildMessage());
    const subject = encodeURIComponent(`Flexible Packaging Inquiry: ${formData.productType} – ${formData.productName.trim()}`);
    const emailUrl = COMPANY.email
      ? `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
      : `mailto:?subject=${subject}&body=${body}`;
    window.open(emailUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="quote"
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-window">
        {/* Header */}
        <div className="modal-header">
          <h2 id="quote-modal-title" className="modal-header-title">
            Request a Packaging Quote
          </h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close quote form"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form noValidate>
          <div className="modal-body">
            {/* Delivery Explanation Notice */}
            <div className="quote-modal-notice" role="note">
              <Info size={16} className="quote-modal-notice-icon" aria-hidden="true" />
              <span>
                Submitting this form prepares your specification inquiry and opens <strong>WhatsApp</strong> or your <strong>Email client</strong>. No data is stored on a server until sent directly to our team.
              </span>
            </div>

            <div className={`form-group ${errors.productType ? 'has-error' : ''}`}>
              <label htmlFor="productType" className="form-label">
                Packaging Type <span className="required-mark" aria-hidden="true">*</span>
              </label>
              <select
                id="productType"
                name="productType"
                ref={firstFieldRef}
                className="form-select"
                value={formData.productType}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={Boolean(errors.productType)}
                aria-describedby={errors.productType ? 'err-productType' : undefined}
              >
                <option value="">Select a pouch format</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option value="Not decided / Need recommendation">
                  Not decided – Need recommendation
                </option>
              </select>
              {errors.productType && (
                <div id="err-productType" className="form-error-msg" role="alert">
                  <AlertCircle size={13} aria-hidden="true" />
                  <span>{errors.productType}</span>
                </div>
              )}
            </div>

            <div className={`form-group ${errors.productName ? 'has-error' : ''}`}>
              <label htmlFor="productName" className="form-label">
                Your Product (to be packed) <span className="required-mark" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="form-input"
                placeholder="e.g. Protein Powder, Herbal Tea, Face Serum"
                value={formData.productName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={Boolean(errors.productName)}
                aria-describedby={errors.productName ? 'err-productName' : undefined}
              />
              {errors.productName && (
                <div id="err-productName" className="form-error-msg" role="alert">
                  <AlertCircle size={13} aria-hidden="true" />
                  <span>{errors.productName}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="quantity" className="form-label">
                Estimated Quantity
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="form-input"
                placeholder="e.g. 10,000 pouches / month"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="details" className="form-label">
                Additional Requirements
              </label>
              <textarea
                id="details"
                name="details"
                className="form-textarea"
                rows={4}
                placeholder="Size, material preferences, printing details, certifications required, timeline..."
                value={formData.details}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline-dark btn-sm"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleEmail}
              className="btn btn-outline-dark btn-sm"
              aria-label="Prepare and send inquiry via Email"
            >
              Send via Email
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="btn btn-whatsapp btn-sm"
              aria-label="Prepare and send inquiry via WhatsApp"
            >
              <MessageCircle size={15} />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
