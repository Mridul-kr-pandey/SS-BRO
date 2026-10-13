import React from 'react';
import { PackageCheck, Layers, CheckCircle2, Printer } from 'lucide-react';

export const TrustBar = () => {
  const capabilities = [
    {
      number: '01',
      title: 'Custom Packaging',
      caption: 'Form-factor, sizing and barrier structures tailored to your goods',
      icon: PackageCheck
    },
    {
      number: '02',
      title: 'Flexible Packaging',
      caption: 'Rollstock and pre-formed pouches built for consumer convenience',
      icon: Layers
    },
    {
      number: '03',
      title: 'Quality-Focused Production',
      caption: 'Disciplined inspection and seal integrity across every batch',
      icon: CheckCircle2
    },
    {
      number: '04',
      title: 'Packaging Printing',
      caption: 'High-definition graphic reproduction for shelf-ready impact',
      icon: Printer
    }
  ];

  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.number} className="trust-item">
                <span className="trust-number">{cap.number}</span>
                <div className="trust-icon-box">
                  <Icon size={22} />
                </div>
                <div className="trust-details">
                  <h3 className="trust-title">{cap.title}</h3>
                  <p className="trust-caption">{cap.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
