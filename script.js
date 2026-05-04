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
}
