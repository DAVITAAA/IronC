import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const productLinks = [
  { label: 'ლითონის კარები', slug: 'karebi' },
  { label: 'ლითონის ჭიშკრები', slug: 'chishkrebi' },
  { label: 'ლითონის კიბეები', slug: 'kibeebi' },
  { label: 'ლითონის მოაჯირები', slug: 'moajirebi' },
  { label: 'ლითონის გისოსები', slug: 'gisosebi' },
  { label: 'ლითონის ღობე', slug: 'ghobe' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-box">IC</div>
              <div>
                <div className="footer__logo-name">IronC</div>
                <div className="footer__logo-sub">ლითონის ნაკეთობები</div>
              </div>
            </Link>
            <p className="footer__brand-text">
              4 წელია ვქმნით მაღალი ხარისხის ლითონის ნაკეთობებს. 
              კარებიდან ფანჩატურამდე — ჩვენი გუნდი ყოველთვის მზად არის.
            </p>
          </div>
          {/* Products */}
          <div className="footer__col">
            <h4 className="footer__col-title">პროდუქცია</h4>
            <ul className="footer__links">
              {productLinks.map(link => (
                <li key={link.slug}>
                  <Link to={`/products#${link.slug}`} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__col">
            <h4 className="footer__col-title">კომპანია</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">მთავარი</Link></li>
              <li><Link to="/about" className="footer__link">ჩვენ შესახებ</Link></li>
              <li><Link to="/products" className="footer__link">კატალოგი</Link></li>
              <li><Link to="/contact" className="footer__link">კონტაქტი</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">კონტაქტი</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+995574202661">+995 574 20 26 61</a>
              </div>
              <div className="footer__contact-item">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:iraklibakhutashvili@gmail.com">iraklibakhutashvili@gmail.com</a>
              </div>
              <div className="footer__contact-item">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>თბილისი წერეთლის 118 ა</span>
              </div>
              <div className="footer__contact-item">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                <span>ყოველთვის ღიაა</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} IronC — ყველა უფლება დაცულია
          </p>
          <p className="footer__made">
            ლითონის ნაკეთობები საქართველოში
          </p>
        </div>
      </div>
    </footer>
  );
}
