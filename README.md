# IronC — ლითონის ნაკეთობები

React + Vite ვებსაიტი ქართულ ენაზე ლითონის ნაკეთობების კომპანიისთვის.

## ტექნოლოგიები

- **React 18** — UI framework
- **React Router 6** — routing
- **Vite 5** — build tool
- **CSS Modules** — სტილი (ყველა კომპონენტს აქვს თავისი CSS)
- **Noto Sans Georgian** — ქართული შრიფტი (Google Fonts)

## გაშვება

```bash
# Dependencies-ის ინსტალაცია
npm install

# Development mode
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## სტრუქტურა

```
src/
├── components/           # გამოყენებადი კომპონენტები
│   ├── Navbar.jsx/.css
│   ├── Hero.jsx/.css
│   ├── ProductCategories.jsx/.css
│   ├── FeaturedProducts.jsx/.css
│   ├── WhyUs.jsx/.css
│   ├── Testimonials.jsx/.css
│   ├── VideoSection.jsx/.css
│   ├── ContactCTA.jsx/.css
│   └── Footer.jsx/.css
├── pages/                # გვერდები
│   ├── Home.jsx
│   ├── Products.jsx/.css
│   ├── About.jsx/.css
│   └── Contact.jsx/.css
├── data/
│   └── products.js       # პროდუქტებისა და კატეგორიების მონაცემები
├── App.jsx               # Root + routing
├── main.jsx              # React entry point
└── index.css             # Global styles + CSS variables
```

## ძირითადი ფუნქციები

- ✅ სრულად ქართულ ენაზე
- ✅ მოხუცებისთვის მოსახერხებელი (დიდი ფონტი, ნათელი კონტრასტი, დიდი ღილაკები)
- ✅ Scroll-triggered animations
- ✅ ვიდეო სექცია YouTube embed-ებით
- ✅ Mobile responsive
- ✅ კონტაქტის ფორმა ვალიდაციით
- ✅ Sticky navbar with mobile menu
- ✅ Product categories + filtering
- ✅ Industrial steel aesthetic (dark theme, gold accents)

## Customize

პროდუქტების, კატეგორიების, სტატისტიკისა და ვიდეოების შეცვლა შეგიძლიათ:
**`src/data/products.js`**

ფერების, ზომების შეცვლა:
**`src/index.css`** — CSS variables section
