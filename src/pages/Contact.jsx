import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const contactInfo = [
  { icon: '📞', label: 'ტელეფონი', value: '+995 574 20 26 61', href: 'tel:+995574202661' },
  { icon: '📧', label: 'ელ-ფოსტა', value: 'iraklibakhutashvili@gmail.com', href: 'mailto:iraklibakhutashvili@gmail.com' },
  { icon: '📍', label: 'მისამართი', value: 'თბილისი წერეთლის 118 ა', href: null },
  { icon: '🕐', label: 'სამუშაო საათები', value: 'ყოველთვის ღიაა', href: null },
];

export default function Contact() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__content">
          <div className="page-hero__breadcrumb">
            <Link to="/">მთავარი</Link> / <span>კონტაქტი</span>
          </div>
          <h1 className="page-hero__title"><span>კონტაქტი</span></h1>
          <p className="page-hero__sub">ჩვენი გუნდი 24 საათის განმავლობაში გიპასუხებთ</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px', maxWidth: '680px' }}>
        <h2 className="contact-info__title">გვიკავშირდით</h2>
        <p className="contact-info__text">
          4+ წლის გამოცდილება. ჩვენი გუნდი გიპასუხებთ 24 საათის განმავლობაში და გთავაზობთ უფასო კონსულტაციასა და ადგილზე გაზომვას.
        </p>
        <div className="contact-service-area">
          <span className="csa-icon"></span>
          <span>ვმუშაობთ <strong>მთელ საქართველოში</strong> — თბილისი</span>
        </div>

        <div className="contact-info__items" style={{ marginTop: '24px' }}>
          {contactInfo.map((item, i) => (
            <div key={i} className="contact-info__item">
              <div className="contact-info__item-icon">{item.icon}</div>
              <div>
                <div className="contact-info__item-label">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="contact-info__item-value">{item.value}</a>
                ) : (
                  <div className="contact-info__item-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-map" style={{ marginTop: '28px' }}>
      <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47646.154157392215!2d44.74201403731756!3d41.72300820221945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473cfaeab7501%3A0x7d0c0cc8bdab9762!2sAkaki%20Tsereteli%20Avenue%20118!5e0!3m2!1ska!2sge!4v1771963111393!5m2!1ska!2sge"
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: '12px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="IronC მისამართი"
    />
      </div>
      </div>
    </main>
  );
}
