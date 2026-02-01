const toggle = document.getElementById('dark-toggle');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    if (toggle) toggle.textContent = '☀️';
  } else {
    root.classList.remove('dark');
    if (toggle) toggle.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}