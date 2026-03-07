// ── Navigation ──
function showPage(page, tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  if (tab) tab.classList.add('active');

  // Render page content on demand
  switch (page) {
    case 'home':       renderHomePage();       break;
    case 'products':   renderProductsPage();   break;
    case 'categories': renderCategoriesPage(); break;
    case 'orders':     renderOrdersPage();     break;
    case 'wishlist':   renderWishlistPage();   break;
    case 'profile':    renderProfilePage();    break;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Toast ──
function showToast(msg, type = '') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>${msg}`;
  c.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3000);
}
