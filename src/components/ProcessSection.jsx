import React from 'react';
import {
  ClipboardList,
  Box,
  Printer,
  ShieldCheck,
  Truck
} from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Requirement',
      desc: 'Share your product type, volume, dimensions and end-use requirements with our team.'
    },
    {
      number: '02',
      icon: Box,
      title: 'Packaging Format',
      desc: 'We recommend and finalize the right pouch format, material structure and sealing configuration.'
    },
    {
      number: '03',
      icon: Printer,
      title: 'Printing & Production',
      desc: 'High-definition graphic printing followed by lamination, pouch forming and sealing.'
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Quality Check',
      desc: 'Seal strength, barrier integrity, dimensional accuracy and print quality are evaluated.'
    },
    {
      number: '05',
      icon: Truck,
      title: 'Dispatch',
      desc: 'Finished packaging is counted, packed and dispatched ready for filling operations.'
    }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Our Process</span>
          <h2>From Requirement to Finished Packaging</h2>
          <p className="section-subtitle">
            A straightforward end-to-end workflow ensuring your packaging reaches you on
            specification and on schedule.
          </p>
        </div>

        <div className="process-timeline">
          <div className="process-timeline-line" aria-hidden="true"></div>

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="process-step">
                <div className="process-step-node" aria-hidden="true">
                  <Icon size={24} />
                  <span className="process-step-number">{step.number}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
