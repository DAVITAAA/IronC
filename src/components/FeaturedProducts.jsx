import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProducts, categories } from '../data/products';
import './FeaturedProducts.css';

// Pick 2-3 best photos per category for the mosaic
const mosaicItems = [
  ...allProducts.filter(p => p.categorySlug === 'karebi').slice(0, 3),
  ...allProducts.filter(p => p.categorySlug === 'chishkari').slice(0, 3),
  ...allProducts.filter(p => p.categorySlug === 'kibe').slice(0, 2),
  ...allProducts.filter(p => p.categorySlug === 'moajiri').slice(0, 2),
  ...allProducts.filter(p => p.categorySlug === 'ghobe').slice(0, 2),
  ...allProducts.filter(p => p.categorySlug === 'aivani').slice(0, 2),
].slice(0, 12);

export default function FeaturedProducts() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="featured-section" id="featured">
      <div className="container">
        <h2 className="section-title">პოპულარული <span>ნამუშევრები</span></h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          ჩვენი კლიენტების მიერ ყველაზე მეტად შეყვარებული ნამუშევრები
        </p>

        <div className="mosaic-grid">
          {mosaicItems.map((item, i) => {
            const cat = categories.find(c => c.id === item.categorySlug);
            // alternate sizes: every 5th item is big
            const isBig = i === 0 || i === 5 || i === 10;
            return (
              <div
                key={item.id}
                className={`mosaic-item ${isBig ? 'mosaic-item--big' : ''}`}
                onClick={() => setLightbox({ item, cat })}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={e => { e.target.src = '/workshop.png'; }}
                />
                <div className="mosaic-overlay">
                  <div className="mosaic-cat" style={{ color: cat?.color }}>
                    {cat?.name}
                  </div>
                  <div className="mosaic-name">{item.name}</div>
                  <div className="mosaic-loc"> თბილისი</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/products" className="btn-primary">
            მთელი კატალოგის ნახვა — 400+ ნამუშევარი
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="mosaic-lb" onClick={() => setLightbox(null)}>
          <div className="mosaic-lb-box" onClick={e => e.stopPropagation()}>
            <button className="mosaic-lb-close" onClick={() => setLightbox(null)}></button>
            <img
              src={lightbox.item.image}
              alt={lightbox.item.name}
              onError={e => { e.target.src = '/workshop.png'; }}
            />
            <div className="mosaic-lb-info">
              <div className="mosaic-lb-cat" style={{ color: lightbox.cat?.color }}>
                {lightbox.cat?.name}
              </div>
              <div className="mosaic-lb-name">{lightbox.item.name}</div>
              <div className="mosaic-lb-meta">
                 თბილისი ·  {lightbox.item.year}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
