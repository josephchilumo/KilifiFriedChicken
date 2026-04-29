import { useMemo, useState } from 'react'

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --red: #C8102E;
  --red-dark: #9E0B24;
  --red-light: #F5E6E9;
  --cream: #FDF8F2;
  --warm: #F2E8D9;
  --text: #1C1008;
  --muted: #7A6A5A;
  --border: rgba(200, 16, 46, 0.12);
  --white: #ffffff;
  --radius: 16px;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
  font-size: 15px;
}

/* ── HEADER ── */
.kfc-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(253, 248, 242, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid var(--border);
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kfc-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.kfc-logo-mark {
  width: 38px;
  height: 38px;
  background: var(--red);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 19px;
  flex-shrink: 0;
}

.kfc-logo-name {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--red);
  line-height: 1.2;
}

.kfc-logo-sub {
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.kfc-cart-btn {
  background: var(--red);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 22px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.2s;
}

.kfc-cart-btn:hover { background: var(--red-dark); }

.kfc-cart-count {
  background: white;
  color: var(--red);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

/* ── HERO ── */
.kfc-hero {
  margin-top: 65px;
  position: relative;
  min-height: 440px;
  overflow: hidden;
  background: var(--text);
  display: flex;
  align-items: flex-end;
}

.kfc-hero-img {
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1598103442097-8b74394b95c3?auto=format&fit=crop&w=900&q=80') center / cover no-repeat;
  opacity: 0.4;
}

.kfc-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(28,16,8,0.92) 0%, rgba(200,16,46,0.3) 100%);
}

.kfc-hero-content {
  position: relative;
  z-index: 2;
  padding: 48px 24px 44px;
  color: white;
}

.kfc-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 18px;
  color: rgba(255,255,255,0.9);
}

.kfc-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #FF6B6B;
  animation: kfcPulse 2s infinite;
}

@keyframes kfcPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

.kfc-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 900;
  line-height: 1.12;
  margin-bottom: 14px;
  color: white;
}

.kfc-hero h1 span { color: #FF9090; }

.kfc-hero p {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  line-height: 1.65;
  margin-bottom: 28px;
  max-width: 340px;
}

.kfc-hero-btns {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.kfc-btn-primary {
  background: var(--red);
  color: white;
  border: none;
  padding: 13px 26px;
  border-radius: 26px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.2s, transform 0.1s;
}

.kfc-btn-primary:hover { background: var(--red-dark); }
.kfc-btn-primary:active { transform: scale(0.97); }

.kfc-btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255,255,255,0.35);
  padding: 11px 22px;
  border-radius: 26px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: border-color 0.2s;
}

.kfc-btn-outline:hover { border-color: rgba(255,255,255,0.6); }

/* ── TRUST STRIP ── */
.kfc-trust {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}

.kfc-trust::-webkit-scrollbar { display: none; }

.kfc-trust-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 14px 22px;
  border-right: 1px solid var(--border);
  white-space: nowrap;
}

.kfc-trust-icon { font-size: 20px; }

.kfc-trust-strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.kfc-trust-label {
  display: block;
  font-size: 11px;
  color: var(--muted);
}

/* ── MENU SECTION ── */
.kfc-section {
  padding: 36px 20px;
}

.kfc-section-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
}

.kfc-section-title {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: var(--text);
}

.kfc-section-sub {
  font-size: 12px;
  color: var(--muted);
}

/* Category Tabs */
.kfc-cats {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  margin-bottom: 22px;
  padding-bottom: 2px;
}

.kfc-cats::-webkit-scrollbar { display: none; }

.kfc-cat {
  flex: 0 0 auto;
  padding: 7px 18px;
  border-radius: 22px;
  border: 1.5px solid var(--border);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  color: var(--muted);
  background: white;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.2s;
}

.kfc-cat:hover { border-color: var(--red); color: var(--red); }
.kfc-cat.active { background: var(--red); color: white; border-color: var(--red); }

/* Menu Grid */
.kfc-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

@media (min-width: 600px) {
  .kfc-menu-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 900px) {
  .kfc-menu-grid { grid-template-columns: repeat(4, 1fr); }
  .kfc-hero { min-height: 540px; }
  .kfc-hero h1 { font-size: 52px; }
  .kfc-section { padding: 56px 40px; }
}

.kfc-menu-card {
  background: white;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform 0.18s, box-shadow 0.18s;
}

.kfc-menu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(200,16,46,0.1);
}

.kfc-menu-img {
  height: 110px;
  background: #F8F0E5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  position: relative;
}

.kfc-menu-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background: var(--red);
  color: white;
  font-size: 9px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 10px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.kfc-menu-body { padding: 12px; }

.kfc-menu-name {
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  margin-bottom: 3px;
  line-height: 1.3;
}

.kfc-menu-desc {
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 10px;
  line-height: 1.45;
}

.kfc-menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kfc-menu-price {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--red);
}

.kfc-add-btn {
  width: 30px;
  height: 30px;
  background: var(--red);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.15s, transform 0.1s;
}

.kfc-add-btn:hover { background: var(--red-dark); }
.kfc-add-btn:active { transform: scale(0.92); }

/* ── CART SECTION ── */
.kfc-cart-section {
  padding: 36px 20px 48px;
  background: var(--warm);
}

.kfc-cart-box {
  background: white;
  border-radius: 20px;
  padding: 22px;
  border: 1px solid var(--border);
}

.kfc-empty-cart {
  text-align: center;
  padding: 36px 20px;
  color: var(--muted);
}

.kfc-empty-icon {
  font-size: 52px;
  display: block;
  margin-bottom: 12px;
}

.kfc-empty-text {
  font-size: 14px;
  line-height: 1.6;
}

.kfc-cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  border-bottom: 1px solid var(--border);
}

.kfc-cart-item:last-child { border-bottom: none; }

.kfc-item-name {
  font-weight: 500;
  font-size: 14px;
  color: var(--text);
  margin-bottom: 2px;
}

.kfc-item-price {
  font-size: 13px;
  color: var(--muted);
}

.kfc-remove-btn {
  background: none;
  border: 1.5px solid var(--border);
  color: var(--muted);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: border-color 0.15s, color 0.15s;
  flex-shrink: 0;
}

.kfc-remove-btn:hover { border-color: var(--red); color: var(--red); }

.kfc-cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  padding-top: 18px;
  border-top: 2px solid var(--border);
}

.kfc-total-label { font-size: 14px; color: var(--muted); }

.kfc-total-amount {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--red);
}

.kfc-checkout-btn {
  width: 100%;
  margin-top: 16px;
  background: var(--red);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  transition: background 0.2s, transform 0.1s;
}

.kfc-checkout-btn:hover { background: var(--red-dark); }
.kfc-checkout-btn:active { transform: scale(0.98); }
.kfc-checkout-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* ── FOOTER ── */
.kfc-footer {
  background: var(--text);
  color: rgba(255,255,255,0.55);
  text-align: center;
  padding: 36px 20px;
  font-size: 12px;
  line-height: 2;
}

.kfc-footer-brand {
  font-family: 'Playfair Display', serif;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}

.kfc-footer-brand span { color: #FF9090; }
`

// ── DATA ──────────────────────────────────────────────────
const MENU = [
  { id: 1, name: '¼ Chicken',       desc: 'Juicy quarter piece, golden crispy skin',     price: 250, cat: 'chicken', emoji: '🍗', badge: 'Classic'   },
  { id: 2, name: '½ Chicken',       desc: 'Half bird, perfectly seasoned & crispy',      price: 450, cat: 'chicken', emoji: '🍗', badge: 'Popular'   },
  { id: 3, name: 'Full Chicken',    desc: 'Whole bird, feeds the whole family',           price: 800, cat: 'chicken', emoji: '🍗', badge: 'Best Value' },
  { id: 4, name: 'Chicken + Fries', desc: 'Quarter chicken with hot crispy fries',       price: 500, cat: 'chicken', emoji: '🍗', badge: 'Combo'     },
  { id: 5, name: 'Fries',           desc: 'Golden, crispy, perfectly salted',            price: 200, cat: 'sides',   emoji: '🍟', badge: null        },
  { id: 6, name: 'Soda',            desc: 'Chilled Coke, Fanta or Sprite',               price: 100, cat: 'drinks',  emoji: '🥤', badge: null        },
]

const CATEGORIES = [
  { key: 'all',     label: 'All Items' },
  { key: 'chicken', label: '🍗 Chicken' },
  { key: 'sides',   label: '🍟 Sides'  },
  { key: 'drinks',  label: '🥤 Drinks' },
]

// Replace with your real WhatsApp number
const WHATSAPP_NUMBER = '254700000000'

// ── COMPONENT ─────────────────────────────────────────────
export default function App() {
  const [cart, setCart]       = useState([])
  const [activeCat, setCat]   = useState('all')

  // Filtered menu items
  const filtered = useMemo(
    () => activeCat === 'all' ? MENU : MENU.filter(i => i.cat === activeCat),
    [activeCat]
  )

  // Cart total
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  )

  const addToCart = (item) =>
    setCart(prev => [...prev, { ...item, uid: Date.now() + Math.random() }])

  const removeFromCart = (uid) =>
    setCart(prev => prev.filter(i => i.uid !== uid))

  const scrollToCart = () =>
    document.getElementById('kfc-cart')?.scrollIntoView({ behavior: 'smooth' })

  const scrollToMenu = () =>
    document.getElementById('kfc-menu')?.scrollIntoView({ behavior: 'smooth' })

  const checkout = () => {
    if (cart.length === 0) return
    const lines = cart.map(i => `• ${i.name} — KSH ${i.price}`).join('\n')
    const msg   = encodeURIComponent(`Hello Kilifi Fried Chicken! 🍗\n\nI'd like to order:\n${lines}\n\nTotal: KSH ${total}\n\nPlease confirm my order. Thank you!`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <>
      <style>{styles}</style>

      {/* ── HEADER ── */}
      <header className="kfc-header">
        <div className="kfc-logo">
          <div className="kfc-logo-mark">K</div>
          <div>
            <div className="kfc-logo-name">Kilifi Fried Chicken</div>
            <div className="kfc-logo-sub">Fresh · Hot · Delivered</div>
          </div>
        </div>
        <button className="kfc-cart-btn" onClick={scrollToCart}>
          🛒 Cart
          <span className="kfc-cart-count">{cart.length}</span>
        </button>
      </header>

      {/* ── HERO ── */}
      <section className="kfc-hero">
        <div className="kfc-hero-img" />
        <div className="kfc-hero-overlay" />
        <div className="kfc-hero-content">
          <div className="kfc-hero-badge">
            <span className="kfc-badge-dot" />
            Now Open &amp; Delivering
          </div>
          <h1>
            Crispy. Juicy.<br />
            <span>Unforgettable.</span>
          </h1>
          <p>
            Kilifi's finest fried chicken, delivered hot to your door.
            Made fresh daily with our secret blend of spices.
          </p>
          <div className="kfc-hero-btns">
            <button className="kfc-btn-primary" onClick={scrollToMenu}>Order Now</button>
            <button className="kfc-btn-outline" onClick={scrollToMenu}>View Menu</button>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="kfc-trust">
        {[
          { icon: '⚡', strong: '30 Min',   label: 'Fast Delivery'  },
          { icon: '🔥', strong: 'Always',   label: 'Fresh & Hot'    },
          { icon: '🏆', strong: "Kilifi's", label: '#1 Chicken'     },
          { icon: '💬', strong: 'WhatsApp', label: 'Easy Ordering'  },
        ].map((t, i) => (
          <div className="kfc-trust-item" key={i}>
            <span className="kfc-trust-icon">{t.icon}</span>
            <div>
              <span className="kfc-trust-strong">{t.strong}</span>
              <span className="kfc-trust-label">{t.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── MENU ── */}
      <section className="kfc-section" id="kfc-menu">
        <div className="kfc-section-header">
          <h2 className="kfc-section-title">Our Menu</h2>
          <span className="kfc-section-sub">Prices in KSH</span>
        </div>

        {/* Category tabs */}
        <div className="kfc-cats">
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              className={`kfc-cat${activeCat === c.key ? ' active' : ''}`}
              onClick={() => setCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="kfc-menu-grid">
          {filtered.map(item => (
            <div className="kfc-menu-card" key={item.id}>
              <div className="kfc-menu-img">
                {item.emoji}
                {item.badge && (
                  <div className="kfc-menu-badge">{item.badge}</div>
                )}
              </div>
              <div className="kfc-menu-body">
                <div className="kfc-menu-name">{item.name}</div>
                <div className="kfc-menu-desc">{item.desc}</div>
                <div className="kfc-menu-footer">
                  <div className="kfc-menu-price">KSH {item.price}</div>
                  <button className="kfc-add-btn" onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CART ── */}
      <section className="kfc-cart-section" id="kfc-cart">
        <div className="kfc-section-header">
          <h2 className="kfc-section-title">Your Order</h2>
        </div>
        <div className="kfc-cart-box">
          {cart.length === 0 ? (
            <div className="kfc-empty-cart">
              <span className="kfc-empty-icon">🛒</span>
              <p className="kfc-empty-text">
                Your cart is empty.<br />
                Add something delicious!
              </p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div className="kfc-cart-item" key={item.uid}>
                  <div style={{ flex: 1 }}>
                    <div className="kfc-item-name">{item.name}</div>
                    <div className="kfc-item-price">KSH {item.price}</div>
                  </div>
                  <button
                    className="kfc-remove-btn"
                    onClick={() => removeFromCart(item.uid)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}

              <div className="kfc-cart-total">
                <span className="kfc-total-label">Total</span>
                <span className="kfc-total-amount">KSH {total}</span>
              </div>

              <button
                className="kfc-checkout-btn"
                onClick={checkout}
                disabled={cart.length === 0}
              >
                💬 Order via WhatsApp
              </button>
            </>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="kfc-footer">
        <div className="kfc-footer-brand">
          Kilifi <span>Fried Chicken</span>
        </div>
        <div>Kilifi, Kenya &nbsp;·&nbsp; Open Daily 10am – 10pm</div>
        <div style={{ marginTop: 4 }}>© 2026 All rights reserved</div>
      </footer>
    </>
  )
}