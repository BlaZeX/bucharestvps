
document.addEventListener('alpine:init', () => {
  Alpine.store('theme', {
    current: localStorage.getItem('theme') || 'system',
    set(mode){
      this.current = mode;
      if(mode === 'system'){
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
      }
      const meta = document.querySelector('meta[name="theme-color"]') || (() => {
        const m = document.createElement('meta'); m.setAttribute('name','theme-color'); document.head.appendChild(m); return m;
      })();
      meta.setAttribute('content', getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#000');
    }
  });
});
