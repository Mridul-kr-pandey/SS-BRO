import React from 'react';
import { encodeImageSrc, homePlacement } from '../data/imageCatalog';
import { COMPANY } from '../config/company';

export const GallerySection = () => {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Gallery</span>
          <h2>Packaging in Focus</h2>
          <p className="section-subtitle">
            A closer look at printed flexible packaging produced for snack, spice,
            personal-care and pouch formats.
          </p>
        </div>

        <div className="gallery-grid">
          {homePlacement.gallery.map((item, index) => (
            <div key={item.image} className={`gallery-item gallery-item-${index + 1}`}>
              <img
                src={encodeImageSrc(item.image)}
                alt={`${COMPANY.name} ${item.title}`}
                className="gallery-img"
                width="600"
                height="450"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.tag}</span>
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
