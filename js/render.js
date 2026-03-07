// ── Render Helpers ──

function renderCard(p) {
  const inWish = wishlist.includes(p.id);
  return `
    <div class="prod-card" onclick="openProduct(${p.id})">
      ${p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge}</span>` : ''}
      <div class="prod-img">
        ${p.emoji}
        <button class="prod-wishlist ${inWish ? 'active' : ''}"
                onclick="event.stopPropagation(); toggleWish(${p.id}, this)">
          ${inWish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="prod-body">
        <div class="prod-cat">${p.cat}</div>
        <div class="prod-name">${p.name}</div>
        <div class="prod-rating">
          ${'⭐'.repeat(Math.floor(p.rating))}
          <span>(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="prod-price-row">
          <div>
            <span class="prod-price">₹${p.price.toLocaleString()}</span>
            ${p.old ? `<span class="prod-old">₹${p.old.toLocaleString()}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+</button>
        </div>
      </div>
    </div>`;
}

// ── Home Page ──
function renderHomePage() {
  const homeEl = document.getElementById('page-home');
  homeEl.innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-tag">⚡ New Arrivals — Summer 2025</div>
        <h1>Shop <em>Tech</em> That Actually <em>Slaps</em></h1>
        <p>Your ultimate destination for gadgets, accessories & everything tech. Curated by Shubham — 100% tested, 0% boring.</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="showPage('products', document.querySelectorAll('.nav-tab')[1])">Shop Now →</button>
          <button class="btn-secondary" onclick="showPage('categories', document.querySelectorAll('.nav-tab')[2])">Browse Categories</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card">
          <div class="float-badge">🔥 HOT</div>
          <div class="hero-card-img">🎧</div>
          <div class="hero-card-name">Sony WH-1000XM5</div>
          <div style="color:var(--muted);font-size:.8rem;margin-top:.25rem">⭐⭐⭐⭐⭐ (2.4k reviews)</div>
          <div style="margin-top:.5rem">
            <span class="hero-card-price">₹24,990</span>
            <span class="hero-card-old">₹34,990</span>
          </div>
        </div>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat"><div class="stat-num">50K+</div><div class="stat-lbl">Happy Customers</div></div>
      <div class="stat"><div class="stat-num">1200+</div><div class="stat-lbl">Products</div></div>
      <div class="stat"><div class="stat-num">99%</div><div class="stat-lbl">Positive Reviews</div></div>
      <div class="stat"><div class="stat-num">24/7</div><div class="stat-lbl">Customer Support</div></div>
    </div>

    <div class="section">
      <div class="section-head">
        <div class="section-title">🔥 <span>Trending</span> Right Now</div>
        <button class="view-all" onclick="showPage('products', document.querySelectorAll('.nav-tab')[1])">View All</button>
      </div>
      <div class="product-grid">${products.slice(0, 4).map(renderCard).join('')}</div>
    </div>

    <div class="promo-banner">
      <div class="banner">
        <div>
          <h2>Mega Tech Sale<br/>Up to 40% OFF!</h2>
          <p>Limited time deals on premium gadgets. Don't miss out!</p>
          <button class="banner-btn" onclick="showPage('products', document.querySelectorAll('.nav-tab')[1])">Grab the Deal</button>
        </div>
        <div class="banner-emoji">⚡</div>
      </div>
    </div>

    <div class="section">
      <div class="section-head">
        <div class="section-title">🆕 <span>Just</span> Dropped</div>
        <button class="view-all" onclick="showPage('products', document.querySelectorAll('.nav-tab')[1])">View All</button>
      </div>
      <div class="product-grid">${products.filter(p => p.badge === 'new').map(renderCard).join('')}</div>
    </div>
  `;
}

// ── Products Page ──
function renderProductsPage() {
  document.getElementById('page-products').innerHTML = `
    <div class="filter-bar">
      <input class="search-box" type="text" placeholder="🔍 Search products..." id="searchInput" oninput="filterProducts()"/>
      <button class="filter-chip active" onclick="setFilter('all', this)">All</button>
      <button class="filter-chip" onclick="setFilter('audio', this)">🎧 Audio</button>
      <button class="filter-chip" onclick="setFilter('phones', this)">📱 Phones</button>
      <button class="filter-chip" onclick="setFilter('laptops', this)">💻 Laptops</button>
      <button class="filter-chip" onclick="setFilter('accessories', this)">⌨️ Accessories</button>
      <button class="filter-chip" onclick="setFilter('wearables', this)">⌚ Wearables</button>
    </div>
    <div class="section">
      <div class="section-head">
        <div class="section-title" id="filterTitle">All <span>Products</span></div>
        <div style="color:var(--muted);font-size:.85rem" id="productCount"></div>
      </div>
      <div class="product-grid" id="allProductsGrid"></div>
    </div>
  `;
  renderAllProducts();
}

// ── Categories Page ──
function renderCategoriesPage() {
  document.getElementById('page-categories').innerHTML = `
    <div class="section">
      <div class="section-head">
        <div class="section-title">Browse by <span>Category</span></div>
      </div>
      <div class="cat-grid">
        <div class="cat-card" onclick="filterAndGo('audio')"><div class="cat-icon">🎧</div><div class="cat-name">Audio</div><div class="cat-count">48 products</div></div>
        <div class="cat-card" onclick="filterAndGo('phones')"><div class="cat-icon">📱</div><div class="cat-name">Smartphones</div><div class="cat-count">35 products</div></div>
        <div class="cat-card" onclick="filterAndGo('laptops')"><div class="cat-icon">💻</div><div class="cat-name">Laptops</div><div class="cat-count">27 products</div></div>
        <div class="cat-card" onclick="filterAndGo('accessories')"><div class="cat-icon">⌨️</div><div class="cat-name">Accessories</div><div class="cat-count">120 products</div></div>
        <div class="cat-card" onclick="filterAndGo('wearables')"><div class="cat-icon">⌚</div><div class="cat-name">Wearables</div><div class="cat-count">62 products</div></div>
        <div class="cat-card" onclick="filterAndGo('cameras')"><div class="cat-icon">📷</div><div class="cat-name">Cameras</div><div class="cat-count">19 products</div></div>
        <div class="cat-card" onclick="filterAndGo('gaming')"><div class="cat-icon">🎮</div><div class="cat-name">Gaming</div><div class="cat-count">89 products</div></div>
        <div class="cat-card" onclick="filterAndGo('accessories')"><div class="cat-icon">🏠</div><div class="cat-name">Smart Home</div><div class="cat-count">44 products</div></div>
      </div>
    </div>
    <div class="section">
      <div class="section-head">
        <div class="section-title">🔥 <span>Featured</span> Collections</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem">
        <div style="background:linear-gradient(135deg,#ff5c35,#ff8c00);border-radius:20px;padding:2rem;cursor:pointer;position:relative;overflow:hidden" onclick="filterAndGo('audio')">
          <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;color:#fff">Audio Essentials</div>
          <div style="color:rgba(255,255,255,.8);font-size:.85rem;margin:.5rem 0 1rem">Headphones, earbuds & more</div>
          <div style="color:#fff;font-size:.85rem;font-weight:600">Shop now →</div>
          <div style="position:absolute;right:1.5rem;bottom:-10px;font-size:5rem;opacity:.3">🎧</div>
        </div>
        <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:20px;padding:2rem;cursor:pointer;position:relative;overflow:hidden" onclick="filterAndGo('wearables')">
          <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;color:#fff">Wearable Tech</div>
          <div style="color:rgba(255,255,255,.8);font-size:.85rem;margin:.5rem 0 1rem">Smartwatches & fitness bands</div>
          <div style="color:#fff;font-size:.85rem;font-weight:600">Shop now →</div>
          <div style="position:absolute;right:1.5rem;bottom:-10px;font-size:5rem;opacity:.3">⌚</div>
        </div>
        <div style="background:linear-gradient(135deg,#0ea5e9,#06b6d4);border-radius:20px;padding:2rem;cursor:pointer;position:relative;overflow:hidden" onclick="filterAndGo('laptops')">
          <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;color:#fff">Laptops & Tabs</div>
          <div style="color:rgba(255,255,255,.8);font-size:.85rem;margin:.5rem 0 1rem">Power your productivity</div>
          <div style="color:#fff;font-size:.85rem;font-weight:600">Shop now →</div>
          <div style="position:absolute;right:1.5rem;bottom:-10px;font-size:5rem;opacity:.3">💻</div>
        </div>
      </div>
    </div>
  `;
}

// ── Orders Page ──
function renderOrdersPage() {
  const el = document.getElementById('page-orders');
  el.innerHTML = `<div class="section"><div class="section-head"><div class="section-title">📋 My <span>Orders</span></div></div><div id="ordersContent"></div></div>`;
  renderOrders();
}

// ── Wishlist Page ──
function renderWishlistPage() {
  document.getElementById('page-wishlist').innerHTML = `
    <div class="section">
      <div class="section-head">
        <div class="section-title">❤️ My <span>Wishlist</span></div>
        <div style="color:var(--muted);font-size:.85rem" id="wishlistCount"></div>
      </div>
      <div class="product-grid" id="wishlistGrid"></div>
      <div id="wishlistEmpty" style="display:none;text-align:center;padding:4rem 2rem;color:var(--muted)">
        <div style="font-size:4rem;margin-bottom:1rem">💔</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;margin-bottom:.5rem">Your wishlist is empty</div>
        <div style="font-size:.9rem">Click ❤️ on products to save them here</div>
      </div>
    </div>
  `;
  renderWishlist();
}

// ── Profile Page ──
function renderProfilePage() {
  document.getElementById('page-profile').innerHTML = `
    <div class="section">
      <div id="profileNotLoggedIn" ${currentUser ? 'style="display:none"' : ''} style="text-align:center;padding:5rem 2rem">
        <div style="font-size:5rem;margin-bottom:1.5rem">🔐</div>
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.8rem;margin-bottom:.75rem">Sign in to view your profile</div>
        <div style="color:var(--muted);margin-bottom:2rem">Access your orders, wishlist and account settings</div>
        <button class="btn-primary" onclick="openAuth()">Sign In / Register</button>
      </div>
      <div id="profileLoggedIn" ${currentUser ? '' : 'style="display:none"'}>
        <div class="profile-header">
          <div class="avatar">👤</div>
          <div>
            <div class="profile-name" id="profileName">${currentUser ? currentUser.name : ''}</div>
            <div class="profile-email" id="profileEmail">${currentUser ? currentUser.email : ''}</div>
            <div class="profile-badges">
              <span class="badge badge-gold">⭐ Gold Member</span>
              <span class="badge badge-member">🎯 Tech Enthusiast</span>
            </div>
          </div>
          <button class="btn-secondary" onclick="logout()" style="margin-left:auto">Sign Out</button>
        </div>
        <div class="profile-grid">
          <div class="profile-stat"><div class="profile-stat-num" id="profileOrders">${sampleOrders.length}</div><div class="profile-stat-lbl">Total Orders</div></div>
          <div class="profile-stat"><div class="profile-stat-num" id="profileWishlistCount">${wishlist.length}</div><div class="profile-stat-lbl">Wishlist Items</div></div>
          <div class="profile-stat"><div class="profile-stat-num">₹12,450</div><div class="profile-stat-lbl">Total Savings</div></div>
          <div class="profile-stat"><div class="profile-stat-num">Gold</div><div class="profile-stat-lbl">Member Tier</div></div>
        </div>
        <div class="section-head" style="margin-top:2rem">
          <div class="section-title">Recent <span>Activity</span></div>
        </div>
        <div class="orders-list" id="recentOrders"></div>
      </div>
    </div>
  `;
  if (currentUser) renderOrders();
}

// ── Filter & Render Products ──
function renderAllProducts() {
  let filtered = [...products];
  const q = (document.getElementById('searchInput') || {}).value || '';
  if (currentFilter !== 'all') filtered = filtered.filter(p => p.cat === currentFilter);
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

  const el = document.getElementById('allProductsGrid');
  if (el) el.innerHTML = filtered.map(renderCard).join('');

  const ct = document.getElementById('productCount');
  if (ct) ct.textContent = `${filtered.length} products`;

  const ft = document.getElementById('filterTitle');
  if (ft) ft.innerHTML = `${currentFilter === 'all' ? 'All' : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} <span>Products</span>`;
}

function setFilter(f, btn) {
  currentFilter = f;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderAllProducts();
}

function filterProducts() { renderAllProducts(); }

function filterAndGo(cat) {
  currentFilter = cat;
  showPage('products', document.querySelectorAll('.nav-tab')[1]);
}

// ── Wishlist Render ──
function renderWishlist() {
  const items = products.filter(p => wishlist.includes(p.id));
  const el    = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!items.length) {
    if (el) el.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  if (el) el.innerHTML = items.map(renderCard).join('');
  const wc = document.getElementById('wishlistCount');
  if (wc) wc.textContent = items.length + ' items';
}

// ── Orders Render ──
function renderOrders() {
  const el = document.getElementById('ordersContent');
  if (!el) return;
  if (!currentUser) {
    el.innerHTML = `
      <div style="text-align:center;padding:4rem 2rem;color:var(--muted)">
        <div style="font-size:4rem;margin-bottom:1rem">📋</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;margin-bottom:.5rem">No orders yet</div>
        <div>Sign in to view your orders</div>
        <button class="btn-primary" onclick="openAuth()" style="margin-top:1.5rem">Sign In</button>
      </div>`;
    return;
  }
  const all = [...sampleOrders];
  const orderHTML = all.map(o => `
    <div class="order-card">
      <div class="order-icon">${o.emoji}</div>
      <div class="order-info">
        <div class="order-name">${o.name}</div>
        <div class="order-meta">Order #${o.id} · ${o.date}</div>
      </div>
      <span class="order-status status-${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
      <div class="order-price">₹${o.price.toLocaleString()}</div>
    </div>`).join('');

  el.innerHTML = `<div class="orders-list">${orderHTML}</div>`;

  const profileOrders = document.getElementById('profileOrders');
  if (profileOrders) profileOrders.textContent = all.length;

  const rec = document.getElementById('recentOrders');
  if (rec) rec.innerHTML = all.slice(0, 3).map(o => `
    <div class="order-card">
      <div class="order-icon">${o.emoji}</div>
      <div class="order-info">
        <div class="order-name">${o.name}</div>
        <div class="order-meta">Order #${o.id} · ${o.date}</div>
      </div>
      <span class="order-status status-${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
      <div class="order-price">₹${o.price.toLocaleString()}</div>
    </div>`).join('');
}

// ── Product Detail Modal ──
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const disc = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  document.getElementById('prodModalContent').innerHTML = `
    <button class="modal-close" onclick="closeProdModal()">✕</button>
    <div class="prod-modal-img">${p.emoji}</div>
    <div class="prod-modal-info">
      <div class="prod-modal-cat">${p.cat}</div>
      <div class="prod-modal-name">${p.name}</div>
      <div class="prod-modal-rating">
        <span class="stars">${'⭐'.repeat(Math.floor(p.rating))}</span>
        <span style="font-weight:600">${p.rating}</span>
        <span class="reviews-count">(${p.reviews.toLocaleString()} reviews)</span>
      </div>
      <div class="prod-modal-price">
        <span class="price">₹${p.price.toLocaleString()}</span>
        ${p.old ? `<span class="old-price">₹${p.old.toLocaleString()}</span><span class="discount">${disc}% OFF</span>` : ''}
      </div>
      <div class="prod-modal-desc">${p.desc}</div>
      <div class="prod-modal-actions">
        <div class="modal-qty">
          <button class="modal-qty-btn" onclick="this.nextElementSibling.textContent = Math.max(1, parseInt(this.nextElementSibling.textContent) - 1)">−</button>
          <span class="modal-qty-val">1</span>
          <button class="modal-qty-btn" onclick="this.previousElementSibling.textContent = parseInt(this.previousElementSibling.textContent) + 1">+</button>
        </div>
        <button class="btn-primary" onclick="addToCartFromModal(${p.id}, this)" style="flex:1">Add to Cart 🛒</button>
      </div>
    </div>`;
  document.getElementById('prodModal').classList.add('open');
}

function closeProdModal() { document.getElementById('prodModal').classList.remove('open'); }

function addToCartFromModal(id, btn) {
  const qty = parseInt(btn.closest('.prod-modal-info').querySelector('.modal-qty-val').textContent);
  for (let i = 0; i < qty; i++) addToCart(id, true);
  showToast('Added to cart! 🛒', 'success');
  closeProdModal();
}
