import React from 'react';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';

export const ProductSection = ({ onSelectProduct }) => {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow">Packaging Solutions</span>
          <h2>Packaging Solutions for Every Product</h2>
          <p className="section-subtitle">
            Explore flexible pouch formats designed for different product, storage and
            presentation requirements.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
