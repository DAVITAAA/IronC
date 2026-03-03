import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const qualities = [
  {
    icon: '🔩',
    title: 'S235–S355 სტანდარტის ფოლადი',
    text: 'ვიყენებთ მხოლოდ სერტიფიცირებულ, ევროპული სტანდარტის ლითონს. თითოეული პარტია შემოწმებულია სიმტკიცეზე და გამძლეობაზე.',
  },
  {
    icon: '📐',
    title: 'ზუსტი ზომები, ნულოვანი კომპრომისი',
    text: 'ყოველი ნაკეთობა იწყება ადგილზე გაზომვით. ვამზადებთ ±1მმ სიზუსტით — რადგან ლითონში ხარვეზს ადგილი არ აქვს.',
  },
  {
    icon: '🏭',
    title: 'სრულად ჩვენი წარმოება, თბილისში',
    text: 'ყველაფერი — დიზაინიდან, ჭრიდან, შედუღებამდე და ზედაპირის დამუშავებამდე — ხდება ჩვენს სახელოსნოში. არ ვიყენებთ ქვეკონტრაქტორებს.',
  },
  {
    icon: '🤝',
    title: 'გამჭვირვალე მუშაობა, ხელშეკრულებით',
    text: 'ყოველ შეკვეთას ახლავს ხელშეკრულება: ზომები, ფასი, ვადა — ყველაფერი ქაღალდზე. ფარული გადასახადები — არასდროს.',
  },
  {
    icon: '🚚',
    title: 'მიტანა და მონტაჟი მთელ საქართველოში',
    text: 'ვმუშაობთ თბილისში, ბათუმში, ქუთაისში, რუსთავში და სხვა ქალაქებში. მონტაჟი — ჩვენი ოსტატების მიერ, პროფესიონალურად.',
  },
  {
    icon: '💰',
    title: 'გამჭვირვალე ფასები',
    text: 'ინდივიდუალური კვოტირება ბიუჯეტის მიხედვით. ფარული დამატებები — არასდროს. ხელშეკრულება ყოველთვის.',
  },
];

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero__bg">
          <div className="page-hero__grid" />
        </div>
        <div className="container page-hero__content">
          <div className="page-hero__breadcrumb">
            <Link to="/">მთავარი</Link> / <span>ჩვენ შესახებ</span>
          </div>
          <h1 className="page-hero__title">ჩვენ <span>შესახებ</span></h1>
          <p className="page-hero__sub">ხარისხი, სიზუსტე და პატიოსნება — 2022 წლიდან</p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>

        <div className="about-story">
          <div className="about-story__img">
            <img src="/workshop.png" alt="IronC — ლითონის კონსტრუქციები" />
            <div className="about-story__years">
              <span className="about-story__years-num">4</span>
              <span className="about-story__years-text">წელი</span>
            </div>
          </div>
          <div className="about-story__content">
            <h2>რატომ IronC?</h2>
            <div className="section-divider" style={{ margin: '16px 0 24px', textAlign: 'left' }} />
            <p>
              2022 წლიდან ვამზადებთ ლითონის კარებს, ჭიშკრებს, კიბეებს, მოაჯირებს და კონსტრუქციებს — ხელნაკეთად, სრულ პასუხისმგებლობით.
            </p>
            <p style={{ marginTop: '16px' }}>
              ჩვენი პრინციპია: <strong style={{ color: 'var(--gold)' }}>არ გავყიდოთ, რაც ვერ გავაკეთებთ</strong>. ყოველი ნაკეთობა იწყება გაზომვით, გრძელდება ზუსტი დამზადებით და სრულდება პროფესიონალური მონტაჟით.
            </p>
            <p style={{ marginTop: '16px' }}>
              400+ შესრულებული პროექტი, 0 დაუმთავრებელი — ეს არ არის შემთხვევითობა. ეს არის სისტემა, გუნდი და კულტურა, რომელსაც 15 წელი ჩამოვაყალიბეთ.
            </p>
            <div style={{ marginTop: '28px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">დაგვიკავშირდით</Link>
              <Link to="/products" className="btn-outline">კატალოგი →</Link>
            </div>
          </div>
        </div>

        <div style={{ margin: '72px 0 0' }}>
          <h2 className="section-title">ჩვენი <span>სტანდარტები</span></h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            ყოველ ნაკეთობაში ჩადებული პრინციპები, რომლებზეც კომპრომისს არ ვდებთ
          </p>
          <div className="about-values">
            {qualities.map((q, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-card__icon">{q.icon}</div>
                <h3>{q.title}</h3>
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-stats-strip">
          {[
            { val: '2022', lbl: 'დაარსების წელი' },
            { val: '400+', lbl: 'შესრულებული პროექტი' },
            { val: '14', lbl: 'პროდუქტის კატეგორია' },
            { val: '98%', lbl: 'კმაყოფილი კლიენტი' },
          ].map((s, i) => (
            <div key={i} className="about-stat">
              <div className="about-stat__val">{s.val}</div>
              <div className="about-stat__lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
