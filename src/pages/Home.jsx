import React from 'react';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyUs from '../components/WhyUs';
import VideoSection from '../components/VideoSection';
import ContactCTA from '../components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyUs />
      <VideoSection />
      <ContactCTA />
    </main>
  );
}
