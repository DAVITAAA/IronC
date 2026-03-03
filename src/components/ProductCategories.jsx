import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import './ProductCategories.css';

function CategoryCard({ cat, visible, delay }) {
  return (
    <Link
      to={`/products#${cat.id}`}
      className={`cat-card ${visible ? 'cat-card--visible' : ''}`}
      style={{ '--delay': `${delay}s`, '--accent': cat.color }}
    >
      <h3 className="cat-card__title">{cat.name}</h3>
      <p className="cat-card__desc">{cat.description}</p>
      <div className="cat-card__footer">
        <span className="cat-card__count">{cat.count} ნამუშევარი</span>
        <span className="cat-card__btn">იხილე მეტი →</span>
      </div>
      <div className="cat-card__glow" />
    </Link>
  );
}

export default function ProductCategories() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-dark" ref={sectionRef} id="categories">
      <div className="container">
        <h2 className="section-title">
          ჩვენი <span>პროდუქცია</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          ლითონის ნაკეთობების სრული კოლექცია — კარებიდან ინდუსტრიულ კონსტრუქციებამდე
        </p>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              visible={visible}
              delay={i * 0.07}
            />
          ))}
        </div>
        <div className="categories-cta">
          <Link to="/products" className="btn-primary">
            მთელი კატალოგის ნახვა
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
