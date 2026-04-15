const toggle = document.getElementById('themeToggle');
const icon   = toggle.querySelector('.theme-toggle__icon');
const saved  = localStorage.getItem('theme') || 'dark';

applyTheme(saved);

toggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  icon.textContent = theme === 'light' ? '🌙' : '☀️';
}