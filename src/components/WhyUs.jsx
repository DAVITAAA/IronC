import React, { useEffect, useRef, useState } from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: '✅',
    title: 'ხარისხიანი მასალები',
    text: 'ვიყენებთ მხოლოდ სერტიფიცირებულ ლითონს. ყოველი ნაკეთობა მზადდება S235–S355 კლასის ფოლადისგან.',
  },
  {
    icon: '👷',
    title: 'პროფესიონალური გუნდი',
    text: '4+ წლის გამოცდილების მქონე ოსტატები. ყოველი პროექტი ხორციელდება სიზუსტით და ყურადღებით.',
  },
  {
    icon: '⚡',
    title: 'სწრაფი დამზადება',
    text: 'სტანდარტული შეკვეთა — 5–10 სამუშაო დღე. გადაუდებელი შეკვეთებისთვის ინდივიდუალური ვადები.',
  },
  {
    icon: '🔧',
    title: 'ადგილზე მონტაჟი',
    text: 'პროფესიონალური მონტაჟი მთელ საქართველოში. ვმუშაობთ სახლებში, ბიზნეს ობიექტებსა და სამრეწველო ნაგებობებში.',
  },
  {
    icon: '💰',
    title: 'გამჭვირვალე ფასები',
    text: 'ინდივიდუალური კვოტირება ბიუჯეტის მიხედვით. ფარული დამატებები — არასდროს. ხელშეკრულება ყოველთვის.',
  },
];

const stats = [
  { value: '4+', label: 'წლის გამოცდილება', icon: '' },
  { value: '2 500+', label: 'შესრულებული პროექტი', icon: '' },
  { value: '98%', label: 'კმაყოფილი კლიენტი', icon: '' },
  { value: '50+', label: 'სახეობა პროდუქტი', icon: '' },
];

export default function WhyUs() {
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
    <>
      {/* Why us */}
      <section className="section section-dark" id="about-preview" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title">
            რატომ <span>ჩვენ?</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            ჩვენ ვაქცევთ ყოველ ლითონის ნაკეთობას ხელოვნების ნიმუშად
          </p>

          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`reason-card ${visible ? 'reason-card--visible' : ''}`}
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <div className="reason-card__icon">{r.icon}</div>
                <h3 className="reason-card__title">{r.title}</h3>
                <p className="reason-card__text">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
