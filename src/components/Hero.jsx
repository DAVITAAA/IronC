import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const floatingBadges = [
  { icon: '🏆', text: '4+ წელი', sub: 'გამოცდილება' },
  { icon: '✅', text: '400+', sub: 'პროექტი' },
  { icon: '⭐', text: '98%', sub: 'კმაყოფილი' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      const orbs = heroRef.current.querySelectorAll('.hero__orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background effects */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__texture" />
      </div>

      <div className="container hero__content">
        <div className="hero__left">
          <div className="hero__badge animate-fadeInUp">
            <span className="hero__badge-dot" />
            2022 წლიდან · 400+ შესრულებული პროექტი
          </div>

          <h1 className="hero__title animate-fadeInUp animate-delay-1">
            <span className="hero__title-line">ლითონის კარები,</span>
            <span className="hero__title-line">ჭიშკრები</span>
            <span className="hero__title-line">და კონსტრუქციები შეკვეთით</span>
          </h1>

          <p className="hero__desc animate-fadeInUp animate-delay-2">
            დამზადება&nbsp;•&nbsp;მონტაჟი&nbsp;•&nbsp;ადგილზე გაზომვა
          </p>

          <div className="hero__actions animate-fadeInUp animate-delay-3">
            <Link to="/products" className="btn-primary hero__btn-main">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
              კატალოგის ნახვა
            </Link>
            <Link to="/contact" className="btn-outline">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              დაგვიკავშირდი
            </Link>
          </div>

          {/* Trust badges */}
          <div className="hero__trust animate-fadeInUp animate-delay-4">
            {floatingBadges.map((b, i) => (
              <div key={i} className="trust-badge">
                <span className="trust-badge__icon">{b.icon}</span>
                <div>
                  <div className="trust-badge__value">{b.text}</div>
                  <div className="trust-badge__label">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__right animate-fadeIn animate-delay-2">
          <div className="hero__image-wrap">
            <div className="hero__image-bg" />
            <img
              src="/workshop.png"
              alt="IronC — ლითონის კონსტრუქციები"
              className="hero__image"
              loading="eager"
            />
            <div className="hero__image-badge">
              <div className="hero__image-badge-icon">🔥</div>
              <div>
                <div className="hero__image-badge-title">ახალი კოლექცია</div>
                <div className="hero__image-badge-sub">2026 დიზაინები</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-text">ქვემოთ გადაახვიეთ</div>
        <div className="hero__scroll-arrow">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
