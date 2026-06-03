const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');
const year = document.getElementById('year');

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  if (toggle) {
    const next = theme === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', `Switch to ${next} mode`);
    toggle.innerHTML = `<span class="theme-icon">${theme === 'dark' ? '◐' : '◑'}</span>`;
  }
};

setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
