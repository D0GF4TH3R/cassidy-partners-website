/* ====================================================================
   CASSIDY PARTNERS – Frontend Scripts
   --------------------------------------------------------------------
   1) Scroll-Reveal: fades sections in as they enter the viewport
   2) Logo Alignment: balances "Cassidy" and "Partners" widths via
      letter-spacing (relies on actual font metrics post-load)
   ==================================================================== */

/* ── 1) Scroll Reveal ─────────────────────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => io.observe(el));

/* ── 2) Logo Alignment via canvas measurement ─────────────────────── */
function measureText(text, font) {
  const c = document.createElement('canvas');
  c.getContext('2d').font = font;
  return c.getContext('2d').measureText(text).width;
}

document.fonts.ready.then(() => {
  document.querySelectorAll('.nav-logo, .footer-logo').forEach(logo => {
    const l1 = logo.querySelector('.l1');
    const l2 = logo.querySelector('.l2');
    const size = getComputedStyle(l1).fontSize;
    const font = '200 ' + size + ' Jost';
    const wC = measureText('CASSIDY',  font);
    const wP = measureText('PARTNERS', font);
    l1.style.letterSpacing = ((wP - wC) / 7) + 'px';
    l2.style.letterSpacing = '0px';
  });
});
