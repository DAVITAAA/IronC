import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { categories, allProducts } from '../data/products';
import './Products.css';

const PAGE_SIZE = 16;

const getCity = () => 'თბილისი';

function ProductCard({ product, cat, onClick }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="prod-card" onClick={() => onClick(product)}>
      <div className="pc-img-wrap">
        {imgError ? (
          <div className="pc-img-fallback">
            
            <p>{cat.name}</p>
          </div>
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={() => setImgError(true)}
            />
            <div className="pc-overlay"><span className="pc-zoom"></span></div>
          </>
        )}
      </div>
      <div className="pc-body">
        <div className="pc-cat" style={{ color: cat.color }}>{cat.name}</div>
        <div className="pc-title">{product.name}</div>
        <div className="pc-location"> {getCity(product.location)}</div>
        <div className="pc-footer">
          <span className="pc-year">{product.year}</span>
          <span className="pc-order">შეკვეთა →</span>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ cat, items, onCardClick }) {
  const [shown, setShown] = useState(PAGE_SIZE);
  return (
    <section className="cat-section" id={`cat-${cat.id}`}>
      <div className="cat-header">
        <div className="cat-header-left">
          <div>
            <h2 className="cat-name">{cat.name}</h2>
            <p className="cat-sub">{items.length} ნამუშევარი</p>
          </div>
        </div>
        <div className="cat-line" style={{ background: cat.color }} />
      </div>
      <div className="cards-grid">
        {items.slice(0, shown).map(p => (
          <ProductCard key={p.id} product={p} cat={cat} onClick={onCardClick} />
        ))}
      </div>
      {shown < items.length && (
        <div className="load-more-wrap">
          <button className="load-more-btn" onClick={() => setShown(s => Math.min(s + PAGE_SIZE, items.length))}>
            მეტის ნახვა ({items.length - shown} დარჩა)
          </button>
        </div>
      )}
    </section>
  );
}

export default function Products() {
  const location = useLocation();
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [lb, setLb] = useState(null); // { idx, items }

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const cat = categories.find(c => c.id === hash);
      if (cat) setActiveCat(cat.id);
    }
  }, [location.hash]);

  useEffect(() => {
    const h = (e) => {
      if (!lb) return;
      if (e.key === 'Escape') setLb(null);
      if (e.key === 'ArrowRight') setLb(p => p && { ...p, idx: (p.idx + 1) % p.items.length });
      if (e.key === 'ArrowLeft') setLb(p => p && { ...p, idx: (p.idx - 1 + p.items.length) % p.items.length });
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  useEffect(() => {
    document.body.style.overflow = lb ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb]);

  const filtered = allProducts.filter(p => {
    const catOk = activeCat === 'all' || p.categorySlug === activeCat;
    const q = search.toLowerCase();
    const qOk = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    return catOk && qOk;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'year-new') return b.year - a.year;
    if (sort === 'year-old') return a.year - b.year;
    return 0;
  });

  const grouped = categories.reduce((acc, cat) => {
    const items = sorted.filter(p => p.categorySlug === cat.id);
    if (items.length) acc.push({ cat, items });
    return acc;
  }, []);

  const openLb = (product) => {
    const items = sorted.filter(p => p.categorySlug === product.categorySlug);
    const idx = items.findIndex(p => p.id === product.id);
    setLb({ idx, items });
  };

  const lbProd = lb ? lb.items[lb.idx] : null;
  const lbCat = lbProd ? categories.find(c => c.id === lbProd.categorySlug) : null;

  return (
    <div className="products-page">
      {/* Hero */}
      <div className="prod-hero">
        <div className="prod-hero-grid" />
        <div className="container">
          <div className="breadcrumb"><span className="bc-home">მთავარი</span> / პროდუქცია</div>
          <h1 className="prod-hero-title">ჩვენი <span className="accent">კატალოგი</span></h1>
          <p className="prod-hero-sub">ხელნაკეთი ლითონის ნაკეთობები — {categories.length} კატეგორია, {allProducts.length}+ ნამუშევარი</p>
          <div className="prod-hero-stats">
            <div className="ph-stat"><div className="ph-val">{categories.length}</div><div className="ph-lbl">კატეგორია</div></div>
            <div className="ph-stat"><div className="ph-val">{allProducts.length}+</div><div className="ph-lbl">ნამუშევარი</div></div>
            <div className="ph-stat"><div className="ph-val">4+</div><div className="ph-lbl">წელი</div></div>
            <div className="ph-stat"><div className="ph-val">98%</div><div className="ph-lbl">კმაყოფილი</div></div>
          </div>
        </div>
      </div>

      <div className="prod-layout">
        {/* Sidebar */}
        <aside className="prod-sidebar">
          <div className="sidebar-section">
            <span className="sidebar-label">კატეგორიები</span>
            <button className={`sidebar-btn${activeCat === 'all' ? ' active' : ''}`} onClick={() => setActiveCat('all')}>
              <span className="sb-name">ყველა</span><span className="sb-count">{allProducts.length}</span>
            </button>
          </div>
          <div className="sidebar-divider" />
          <div className="sidebar-section">
            {categories.map(cat => (
              <button key={cat.id} className={`sidebar-btn${activeCat === cat.id ? ' active' : ''}`} onClick={() => setActiveCat(cat.id)}>
                
                <span className="sb-name">{cat.name}</span>
                <span className="sb-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="prod-main">
          <div className="toolbar">
            <div className="search-wrap">
              <span className="search-ico"></span>
              <input type="text" className="search-input" placeholder="ძებნა..." value={search} onChange={e => setSearch(e.target.value)} />
              {search && <button className="search-clear" onClick={() => setSearch('')}></button>}
            </div>
            <div className="results-count">{sorted.length} ნამუშევარი</div>
          </div>

          {grouped.length === 0 ? (
            <div className="empty-state"><div className="empty-icon"></div><h3>ვერ მოიძებნა</h3><p>სხვა საძიებო სიტყვა სცადეთ</p></div>
          ) : (
            grouped.map(({ cat, items }) => (
              <CategorySection key={cat.id} cat={cat} items={items} onCardClick={openLb} />
            ))
          )}
        </main>
      </div>

      {/* Lightbox */}
      {lb && lbProd && (
        <div className="lightbox" onClick={() => setLb(null)}>
          <div className="lb-box" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLb(null)}></button>
            <button className="lb-prev" onClick={() => setLb(p => ({ ...p, idx: (p.idx - 1 + p.items.length) % p.items.length }))}>‹</button>
            <button className="lb-next" onClick={() => setLb(p => ({ ...p, idx: (p.idx + 1) % p.items.length }))}>›</button>
            <div className="lb-img-wrap">
              <img key={lbProd.image} src={lbProd.image} alt={lbProd.name} className="lb-img"
                onError={e => { e.target.style.display='none'; }} />
            </div>
            <div className="lb-info">
              <div className="lb-name">{lbProd.name}</div>
              <div className="lb-meta">
                <span> {getCity(lbProd.location)}</span>
                <span> {lbProd.year}</span>
                {lbCat && <span>{lbCat.name}</span>}
              </div>
              <div className="lb-counter">{lb.idx + 1} / {lb.items.length}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
