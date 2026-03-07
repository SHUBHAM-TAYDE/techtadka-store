// ── App Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Render the home page on load
  renderHomePage();

  // Close modals on overlay click
  document.getElementById('authModal').addEventListener('click', function (e) {
    if (e.target === this) closeAuth();
  });
  document.getElementById('checkoutModal').addEventListener('click', function (e) {
    if (e.target === this) closeCheckout();
  });
  document.getElementById('prodModal').addEventListener('click', function (e) {
    if (e.target === this) closeProdModal();
  });

  // Keyboard: Escape closes open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuth();
      closeCheckout();
      closeProdModal();
      if (document.getElementById('cartSidebar').classList.contains('open')) toggleCart();
    }
  });
});
