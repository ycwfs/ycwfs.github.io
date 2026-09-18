/* Apply the preference before styles load to avoid a light flash in dark mode. */
(() => {
  const key = 'wfs-homepage-theme';
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => ['system', 'light', 'dark'].includes(value);
  let mode = 'system';
  try {
    const saved = localStorage.getItem(key);
    if (valid(saved)) mode = saved;
  } catch { /* Browser storage is optional. */ }

  function apply() {
    const theme = mode === 'system' ? (media.matches ? 'dark' : 'light') : mode;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#171c22' : '#ffffff';
    document.querySelectorAll('[data-theme-mode]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.themeMode === mode));
    });
  }
  apply();
  media.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      mode = valid(event.newValue) ? event.newValue : 'system';
      apply();
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelector('.theme-switch');
    controls.hidden = false;
    controls.addEventListener('click', event => {
      const button = event.target.closest('[data-theme-mode]');
      if (!button) return;
      mode = button.dataset.themeMode;
      try { localStorage.setItem(key, mode); } catch { /* Retain the choice for this page. */ }
      apply();
    });
    apply();
  });
})();
