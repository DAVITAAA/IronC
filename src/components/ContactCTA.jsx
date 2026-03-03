import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta__bg">
        <div className="contact-cta__grid" />
        <div className="contact-cta__orb" />
      </div>
      <div className="container contact-cta__inner">
        <div className="contact-cta__left">
          <h2 className="contact-cta__title">
            მზად ხართ <span>შეკვეთის</span> გასაკეთებლად?
          </h2>
          <p className="contact-cta__text">
            დაგვიკავშირდით დღეს — უფასო კონსულტაცია, ზომების გაზომვა და 
            ინდივიდუალური ფასის გაანგარიშება. ჩვენი გუნდი 24 საათის 
            განმავლობაში გიპასუხებთ.
          </p>
          <div className="contact-cta__actions">
            
            <a href="tel:+995574202661" className="btn-outline contact-cta__tel">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +995 574 20 26 61
            </a>
          </div>
        </div>
        <div className="contact-cta__right">
          <div className="contact-cta__card">
            <div className="contact-cta__card-icon">⏱️</div>
            <div>
              <div className="contact-cta__card-title">სწრაფი პასუხი</div>
              <div className="contact-cta__card-sub">24 საათში გიპასუხებთ</div>
            </div>
          </div>
          <div className="contact-cta__card">
            <div className="contact-cta__card-icon">🆓</div>
            <div>
              <div className="contact-cta__card-title">უფასო კონსულტაცია</div>
              <div className="contact-cta__card-sub">ზომების გაზომვა ადგილზე</div>
            </div>
          </div>
          <div className="contact-cta__card">
            <div className="contact-cta__card-icon">📋</div>
            <div>
              <div className="contact-cta__card-title">ინდივიდუალური ფასი</div>
              <div className="contact-cta__card-sub">თქვენი ბიუჯეტის მიხედვით</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
