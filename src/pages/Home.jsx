import React, { useState } from 'react';
import { TopBar } from '../components/TopBar';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { AboutPreview } from '../components/AboutPreview';
import { ProductSection } from '../components/ProductSection';
import { IndustrySection } from '../components/IndustrySection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { PartnerSection } from '../components/PartnerSection';
import { GallerySection } from '../components/GallerySection';
import { CTASection } from '../components/CTASection';
import { FloatingContact } from '../components/FloatingContact';
import { QuoteModal } from '../components/QuoteModal';
import { Footer } from '../components/Footer';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openQuote = (product = null) => {
    setSelectedProduct(product);
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <TopBar onOpenQuote={() => openQuote()} />

      <Navbar onOpenQuote={() => openQuote()} />

      <main>
        <Hero onOpenQuote={() => openQuote()} />
        <TrustBar />
        <AboutPreview />
        <ProductSection onSelectProduct={(product) => openQuote(product)} />
        <IndustrySection />
        <WhyChooseUs />
        <ProcessSection />
        <PartnerSection />
        <GallerySection />
        <CTASection onOpenQuote={() => openQuote()} />
      </main>

      <Footer onOpenQuote={() => openQuote()} />

      <FloatingContact onOpenQuote={() => openQuote()} />

      {isQuoteOpen && (
        <QuoteModal
          onClose={closeQuote}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
};

export default Home;
