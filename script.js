// Header scroll behavior - hide on down, show on up
const header = document.getElementById('header');
const headerBar = document.getElementById('headerBar');
let prevScroll = 0;
header.classList.add('at-top');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('hidden-up', y > 100 && y > prevScroll);
  headerBar.classList.toggle('scrolled', y > 100);
  header.classList.toggle('at-top', y <= 20);
  prevScroll = y;
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
  document.body.style.overflow = open ? 'hidden' : '';
});
const mobClose = document.getElementById('mobClose');
if (mobClose) mobClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.style.overflow = '';
});

// Scroll animations
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Chasing text stagger
const chasingObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.line').forEach((l, i) => setTimeout(() => l.classList.add('visible'), i * 180));
      chasingObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const ct = document.getElementById('chasingText');
if (ct) chasingObs.observe(ct);

// Work track drag scroll
const wt = document.getElementById('workTrack');
if (wt) {
  let down = false, sx, sl;
  wt.addEventListener('mousedown', e => { down = true; wt.style.cursor = 'grabbing'; sx = e.pageX - wt.offsetLeft; sl = wt.scrollLeft; });
  wt.addEventListener('mouseleave', () => { down = false; wt.style.cursor = 'grab'; });
  wt.addEventListener('mouseup', () => { down = false; wt.style.cursor = 'grab'; });
  wt.addEventListener('mousemove', e => { if (!down) return; e.preventDefault(); wt.scrollLeft = sl - (e.pageX - wt.offsetLeft - sx) * 1.5; });
  wt.style.cursor = 'grab';
  // Touch drag support
  let tStartX, tScrollLeft;
  wt.addEventListener('touchstart', e => { tStartX = e.touches[0].pageX; tScrollLeft = wt.scrollLeft; }, { passive: true });
  wt.addEventListener('touchmove', e => { wt.scrollLeft = tScrollLeft - (e.touches[0].pageX - tStartX) * 1.2; }, { passive: true });
}

// Hero — EXACTLY the 6 images used on the real site (from js-random-image-2412 pool)
// Picks ONE randomly per page load, same image used for bg AND inline heading image
const heroImages = [
  'images/cdn/unnamed-6.webp',
  'images/cdn/RedBull-Instagram-Post-45.webp',
  'images/cdn/Emirates-airpline-in-flight.webp',
  'images/cdn/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.webp',
  'images/cdn/Screenshot-2025-07-01-at-21.36.35.webp',
  'images/cdn/spaseekers.webp',
];
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
const lastIndex = parseInt(localStorage.getItem('heroImgIndex') ?? '-1');
let nextIndex;
do { nextIndex = Math.floor(Math.random() * heroImages.length); } while (nextIndex === lastIndex);
localStorage.setItem('heroImgIndex', nextIndex);
const chosen = heroImages[nextIndex];
const heroBg = document.getElementById('heroBg');
const heroInline = document.getElementById('heroInlineImg');
if (heroBg) heroBg.style.backgroundImage = `url('${chosen}')`;
if (heroInline) heroInline.style.backgroundImage = `url('${chosen}')`;

// Re-observe dynamically added .fade-in elements (rendered by data.js)
requestAnimationFrame(() => {
  document.querySelectorAll('.fade-in:not([data-observed])').forEach(el => {
    el.setAttribute('data-observed','1');
    obs.observe(el);
  });
});
