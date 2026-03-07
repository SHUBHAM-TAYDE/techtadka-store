// ── Checkout Functions ──

function openCheckout() {
  if (!cart.length) return;
  const sub = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const tax = Math.round(sub * 0.18);

  const sumEl = document.getElementById('checkoutSummary');
  if (sumEl) {
    sumEl.innerHTML =
      cart.map(i => `
        <div class="order-summary-item">
          <span>${i.name} ×${i.qty}</span>
          <span>₹${(i.price * i.qty).toLocaleString()}</span>
        </div>`).join('') +
      `<div class="order-summary-item"><span>Tax (18%)</span><span>₹${tax.toLocaleString()}</span></div>
       <div class="order-summary-item"><span>Total</span><span>₹${(sub + tax).toLocaleString()}</span></div>`;
  }

  document.getElementById('checkoutModal').classList.add('open');
  toggleCart();
  gotoStep(1);
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
}

function gotoStep(n) {
  currentStep = n;
  document.querySelectorAll('.checkout-step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === n);
  });
  [1, 2, 3].forEach(i => {
    document.getElementById('cs' + i).classList.toggle('done', i <= n);
  });
}

function nextStep(n) {
  if (n === 2 && !document.getElementById('fn').value.trim()) {
    showToast('Please fill your delivery address', 'error');
    return;
  }
  gotoStep(n);
  if (n === 3) {
    document.getElementById('orderId').textContent = '#TT-' + Math.floor(Math.random() * 90000 + 10000);
  }
}

function selectPayment(el, method) {
  selectedPayment = method;
  document.querySelectorAll('.pay-option').forEach(e => {
    e.classList.remove('pay-active');
    const check = e.querySelector('.pay-check');
    if (check) check.remove();
  });
  el.classList.add('pay-active');
  el.insertAdjacentHTML('beforeend', '<span class="pay-check">✓</span>');
}

function finalizeOrder() {
  cart = [];
  updateCartBadge();
  renderCart();
  closeCheckout();
  showToast('Order placed successfully! 🎉', 'success');
}
