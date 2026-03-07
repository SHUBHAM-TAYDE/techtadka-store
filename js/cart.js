// ── Cart Functions ──

function addToCart(id, silent = false) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name: p.name, emoji: p.emoji, price: p.price, qty: 1 });
  }
  updateCartBadge();
  if (!silent) showToast(`${p.name} added to cart! 🛒`, 'success');
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadge();
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function updateCartBadge() {
  const total = cart.reduce((a, i) => a + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const el = document.getElementById('cartItems');
  if (!cart.length) {
    el.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.1rem;margin-bottom:.5rem">Your cart is empty</div>
        <div style="font-size:.85rem">Add products to get started</div>
      </div>`;
    document.getElementById('cartFooter').style.display = 'none';
    return;
  }

  el.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">${i.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">₹${(i.price * i.qty).toLocaleString()}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateQty(${i.id}, -1)">−</button>
          <span class="qty-val">${i.qty}</span>
          <button class="qty-btn" onclick="updateQty(${i.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${i.id})">✕</button>
    </div>`).join('');

  const sub = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const tax = Math.round(sub * 0.18);
  document.getElementById('cartSubtotal').textContent = '₹' + sub.toLocaleString();
  document.getElementById('cartTax').textContent       = '₹' + tax.toLocaleString();
  document.getElementById('cartTotal').textContent     = '₹' + (sub + tax).toLocaleString();
  document.getElementById('cartFooter').style.display  = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

// ── Wishlist Functions ──
function toggleWish(id, btn) {
  const p = products.find(x => x.id === id);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    btn.textContent = '🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist', '');
  } else {
    wishlist.push(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
    showToast(`${p.name} saved to wishlist! ❤️`, 'success');
  }
  const wc = document.getElementById('profileWishlistCount');
  if (wc) wc.textContent = wishlist.length;
}
