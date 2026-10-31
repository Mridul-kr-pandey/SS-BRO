import React from 'react';
import { COMPANY } from '../config/company';

export const IndustryCard = ({ industry }) => {
  const applications = industry.applications || [];

  return (
    <article className="industry-card">
      <img
        src={industry.image}
        alt={`${COMPANY.name} Packaging for ${industry.name} Industry`}
        className="industry-card-bg"
        width="600"
        height="420"
        loading="lazy"
      />
      <div className="industry-card-overlay" aria-hidden="true"></div>

      <div className="industry-card-content">
        <span className="industry-card-tag">{industry.subtitle}</span>
        <h3 className="industry-card-title">{industry.name}</h3>
        <p className="industry-card-desc">{industry.description}</p>

        {applications.length > 0 && (
          <ul className="industry-applications">
            {applications.map((app) => (
              <li key={app} className="industry-application-chip">
                {app}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};
