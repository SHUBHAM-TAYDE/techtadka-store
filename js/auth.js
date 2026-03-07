// ── Auth Functions ──

function openAuth()  { document.getElementById('authModal').classList.add('open'); }
function closeAuth() { document.getElementById('authModal').classList.remove('open'); }

function switchAuthTab(tab, btn) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginForm').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('Please fill all fields', 'error'); return; }
  currentUser = { name: email.split('@')[0], email };
  finishLogin();
}

function handleRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  if (!name || !email || !pass) { showToast('Please fill all fields', 'error'); return; }
  if (pass !== pass2)           { showToast('Passwords do not match', 'error'); return; }
  currentUser = { name, email };
  finishLogin();
}

function socialLogin(provider) {
  currentUser = { name: 'Tech Fan', email: 'user@' + provider.toLowerCase() + '.com' };
  finishLogin();
}

function finishLogin() {
  closeAuth();
  document.getElementById('userBtn').textContent = '👤 ' + currentUser.name;
  showToast('Welcome back, ' + currentUser.name + '! 👋', 'success');
  // Re-render profile page if currently active
  if (document.getElementById('page-profile').classList.contains('active')) {
    renderProfilePage();
  }
}

function logout() {
  currentUser = null;
  document.getElementById('userBtn').textContent = 'Sign In';
  showToast('Signed out successfully', '');
  renderProfilePage();
}
