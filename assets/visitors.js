/* One counter image per page load. Local previews must not inflate live statistics. */
(() => {
  if (location.hostname !== 'ycwfs.github.io') return;
  const image = document.querySelector('#visitor-map-image');
  const placeholder = document.querySelector('.visitor-placeholder');
  const error = document.querySelector('.visitor-error');
  placeholder.querySelector('[lang="en"]').textContent = 'Loading visitor map…';
  placeholder.querySelector('[lang="zh-CN"]').textContent = '正在加载访客地图…';
  const timeout = window.setTimeout(showError, 15000);

  function showError() {
    placeholder.hidden = true;
    image.hidden = true;
    error.hidden = false;
  }

  image.addEventListener('load', () => {
    window.clearTimeout(timeout);
    placeholder.hidden = true;
    error.hidden = true;
    image.hidden = false;
  });
  image.addEventListener('error', () => {
    window.clearTimeout(timeout);
    showError();
  });
  image.src = image.dataset.src;
})();
