import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ProductCard = ({ product, onSelect }) => {
  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={`S.S. Brothers ${product.name} Flexible Packaging`}
          className="product-card-img"
          width="400"
          height="320"
          loading="lazy"
        />
        {product.badge && (
          <span className="product-card-badge">{product.badge}</span>
        )}
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        {product.keyFeatures && (
          <ul className="product-card-features">
            {product.keyFeatures.map((feat, idx) => (
              <li key={idx} className="product-card-feature-item">
                <Check size={14} strokeWidth={2.5} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="product-card-footer">
          <button
            type="button"
            className="product-explore-btn"
            onClick={() => onSelect(product)}
            aria-label={`Inquire about ${product.name}`}
          >
            <span>Explore</span>
            <ArrowRight size={15} />
          </button>

          <button
            type="button"
            className="product-card-quote-btn"
            onClick={() => onSelect(product)}
          >
            Request Specs
          </button>
        </div>
      </div>
    </article>
  );
};
