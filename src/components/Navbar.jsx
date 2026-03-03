import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/products';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__info">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            თბილისი, საქართველო
          </span>
          <a href="tel:+995574202661" className="topbar__phone">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            +995 574 20 26 61
          </a>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#8a9bb0"/>
                <text x="5" y="24" fontSize="20" fontWeight="900" fill="#0d1117" fontFamily="Oswald, sans-serif">I</text>
                <text x="12" y="24" fontSize="20" fontWeight="900" fill="#0d1117" fontFamily="Oswald, sans-serif">C</text>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">IronC</span>
              <span className="logo-sub">ლითონის ნაკეთობები</span>
            </div>
          </Link>

          <ul className="navbar__links">
            <li>
              <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>მთავარი</Link>
            </li>

            {/* Dropdown */}
            <li
              className="navbar__dropdown-wrap"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <Link to="/products" className={`navbar__link navbar__link--drop ${location.pathname === '/products' ? 'navbar__link--active' : ''}`}>
                პროდუქცია
                <svg className={`drop-arrow ${dropOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
              </Link>
              {dropOpen && (
                <div className="navbar__dropdown">
                  <div className="navbar__dropdown-inner">
                  <div className="dropdown-grid">
                    {categories.map(cat => (
                      <Link
                        key={cat.id}
                        to={`/products#${cat.id}`}
                        className="dropdown-item"
                        onClick={() => setDropOpen(false)}
                      >
                        <span className="di-name">{cat.name}</span>
                        <span className="di-count">{cat.count}</span>
                      </Link>
                    ))}
                  </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`}>ჩვენ შესახებ</Link>
            </li>
            <li>
              <Link to="/contact" className={`navbar__link ${location.pathname === '/contact' ? 'navbar__link--active' : ''}`}>კონტაქტი</Link>
            </li>
          </ul>

          <a href="tel:+995574202661" className="navbar__cta btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            დარეკეთ
          </a>

          <button className={`navbar__hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="მენიუ">
            <span/><span/><span/>
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
          <ul className="mobile-menu__links">
            <li><Link to="/" className="mobile-menu__link">მთავარი</Link></li>
            <li><Link to="/products" className="mobile-menu__link">პროდუქცია</Link></li>
            <li className="mob-cats">
              {categories.map(cat => (
                <Link key={cat.id} to={`/products#${cat.id}`} className="mob-cat-link">
                  {cat.name}
                </Link>
              ))}
            </li>
            <li><Link to="/about" className="mobile-menu__link">ჩვენ შესახებ</Link></li>
            <li><Link to="/contact" className="mobile-menu__link">კონტაქტი</Link></li>
          </ul>
          <a href="tel:+995322000000" className="btn-primary mobile-menu__phone">📞 +995 32 200 00 00</a>
        </div>
      </nav>
    </>
  );
}
