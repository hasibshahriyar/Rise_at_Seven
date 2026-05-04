/**
 * Rise at Seven Clone — animations.js
 * Handles mobile menu, scroll behaviour, image wrapper sizing,
 * and hero background rotation using vanilla JS + GSAP (loaded via CDN).
 */

/* =========================================================
   Viewport Height fix (for mobile browsers with address bar)
   ========================================================= */
function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVh();
window.addEventListener('resize', setVh);


/* =========================================================
   Hero — random background image rotation
   ========================================================= */
function initHeroBackground() {
    const heroImages = Array.from(
        document.querySelectorAll('[class*="js-random-image-"]')
    );
    if (!heroImages.length) return;

    // Find the parent hero bg element — it's the blurred bg div
    const heroSection = document.querySelector('[data-hero-bg]') ||
        document.querySelector('.js-hero-bg');
    if (!heroSection) return;

    const lastIdx = parseInt(localStorage.getItem('heroImgIndex') ?? '-1');
    let nextIdx;
    do {
        nextIdx = Math.floor(Math.random() * heroImages.length);
    } while (nextIdx === lastIdx && heroImages.length > 1);

    localStorage.setItem('heroImgIndex', String(nextIdx));
    const src = heroImages[nextIdx]?.src;
    if (src) {
        heroSection.style.backgroundImage = `url('${src}')`;
    }
}
document.addEventListener('DOMContentLoaded', initHeroBackground);


/* =========================================================
   Header scroll behaviour
   — hide on scroll down (>100px), show on scroll up
   ========================================================= */
function initHeaderScroll() {
    const headerWrap = document.querySelector('[data-header-wrap]') ||
        document.querySelector('.js-header');
    if (!headerWrap) return;

    let lastY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y > 100 && y > lastY) {
                headerWrap.classList.add('-translate-y-full');
            } else {
                headerWrap.classList.remove('-translate-y-full');
            }
            lastY = y;
            ticking = false;
        });
    }, { passive: true });
}
document.addEventListener('DOMContentLoaded', initHeaderScroll);


/* =========================================================
   Mobile hamburger menu toggle (fallback for Alpine.js)
   — only runs if Alpine is NOT available
   ========================================================= */
function initMobileMenu() {
    // Alpine.js handles this via x-on:click — only add fallback if needed
    if (window.Alpine) return;

    const toggleBtns = document.querySelectorAll('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!menu) return;

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            toggleBtns.forEach(b => b.classList.toggle('active', isOpen));
        });
    });
}
document.addEventListener('DOMContentLoaded', initMobileMenu);


/* =========================================================
   Image wrapper sizing on mobile (pointer: coarse)
   GSAP handles this on desktop — we do it manually for mobile
   ========================================================= */
function fixImageWrappers() {
    document.querySelectorAll('.js-heading, .js-heading-animate').forEach(heading => {
        const fs = parseFloat(window.getComputedStyle(heading).fontSize);
        const lh = parseFloat(window.getComputedStyle(heading).lineHeight);
        const size = lh > 10 ? lh : fs * 1.1;

        heading.querySelectorAll('.js-image-wrapper').forEach(wrapper => {
            wrapper.style.width        = size + 'px';
            wrapper.style.borderRadius = '15%';
            wrapper.style.display      = 'inline-flex';
            wrapper.style.flexShrink   = '0';
            wrapper.style.overflow     = 'hidden';
        });
    });
}

function initMobileImageWrappers() {
    if (window.matchMedia('(pointer: fine)').matches) return; // GSAP handles desktop

    // Retry several times to catch after font load
    let attempts = 0;
    const interval = setInterval(() => {
        fixImageWrappers();
        if (++attempts >= 15) clearInterval(interval);
    }, 250);

    window.addEventListener('resize', fixImageWrappers, { passive: true });
}
document.addEventListener('DOMContentLoaded', initMobileImageWrappers);


/* =========================================================
   GSAP Scroll Animations
   — heading reveal on scroll (mobile: simple fade-up)
   — uses gsap.matchMedia() (ScrollTrigger.matchMedia was removed in GSAP 3.12)
   ========================================================= */
function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        setTimeout(initScrollAnimations, 200);
        return;
    }

    // ScrollTrigger auto-registers via the CDN bundle, but call explicitly to be safe
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // ── Mobile (touch/pointer:coarse): simple fade-up reveals ──
    mm.add('(pointer: coarse)', () => {
        document.querySelectorAll('.js-heading-animate').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 92%',
                    }
                }
            );
        });

        // Size inline image wrappers to match the heading's line-height
        document.querySelectorAll('.js-heading, .js-heading-animate').forEach(heading => {
            heading.querySelectorAll('.js-image-wrapper').forEach(wrapper => {
                const lh = parseFloat(window.getComputedStyle(heading).lineHeight);
                const fs = parseFloat(window.getComputedStyle(heading).fontSize);
                const size = lh > 10 ? lh : fs * 1.1;
                gsap.set(wrapper, { width: size, borderRadius: '15%', display: 'inline-flex', flexShrink: 0, overflow: 'hidden' });
            });
        });
    });

    // ── Desktop (pointer:fine): full GSAP reveal animations ──
    mm.add('(pointer: fine)', () => {

        // First pass: size image wrappers + add word spacing for ALL headings
        document.querySelectorAll('.js-heading-animate, .js-heading').forEach(heading => {
            const lh = parseFloat(window.getComputedStyle(heading).lineHeight);
            const fs = parseFloat(window.getComputedStyle(heading).fontSize);
            const size = lh > 10 ? lh : fs * 1.1;
            const gap  = `${size * 0.15}px`;

            heading.querySelectorAll('.js-word').forEach(word => {
                gsap.set(word, { marginRight: gap });
            });
            heading.querySelectorAll('.js-image-wrapper').forEach(wrapper => {
                gsap.set(wrapper, { width: size + 'px', borderRadius: '15%', marginRight: gap });
            });
        });

        // Second pass: staggered word-reveal for animated headings
        document.querySelectorAll('.js-heading-animate').forEach(heading => {
            const delay = parseFloat(heading.dataset.delay) || 0.2;
            const words = Array.from(heading.querySelectorAll('.js-word'));

            if (words.length) {
                // Words start below the overflow-hidden clip area and slide up
                gsap.fromTo(words,
                    { y: 48, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        duration: 0.55,
                        ease: 'power4.out',
                        stagger: 0.06,
                        delay,
                        scrollTrigger: { trigger: heading, start: 'top 87%' }
                    }
                );
                // Image wrappers expand in after words
                const wrappers = Array.from(heading.querySelectorAll('.js-image-wrapper'));
                if (wrappers.length) {
                    const lh = parseFloat(window.getComputedStyle(heading).lineHeight);
                    const fs = parseFloat(window.getComputedStyle(heading).fontSize);
                    const size = lh > 10 ? lh : fs * 1.1;
                    gsap.fromTo(wrappers,
                        { width: 0, opacity: 0 },
                        {
                            width: size + 'px', opacity: 1,
                            duration: 0.7,
                            ease: 'power4.out',
                            delay: delay + words.length * 0.06 + 0.1,
                            scrollTrigger: { trigger: heading, start: 'top 87%' }
                        }
                    );
                }
            } else {
                gsap.fromTo(heading,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.8, ease: 'power3.out', delay,
                        scrollTrigger: { trigger: heading, start: 'top 88%' }
                    }
                );
            }
        });

        // Resize: re-apply word spacing
        const _updateWordSpacing = () => {
            document.querySelectorAll('.js-heading-animate, .js-heading').forEach(heading => {
                const lh = parseFloat(window.getComputedStyle(heading).lineHeight);
                const fs = parseFloat(window.getComputedStyle(heading).fontSize);
                const size = lh > 10 ? lh : fs * 1.1;
                const gap  = `${size * 0.15}px`;
                heading.querySelectorAll('.js-word').forEach(w => gsap.set(w, { marginRight: gap }));
                heading.querySelectorAll('.js-image-wrapper').forEach(wr =>
                    gsap.set(wr, { width: size + 'px', marginRight: gap })
                );
            });
        };
        let _resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(_resizeTimer);
            _resizeTimer = setTimeout(_updateWordSpacing, 120);
        }, { passive: true });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // GSAP is loaded as a blocking script so it is available immediately,
    // but give Alpine a tick to finish initialising before we register triggers
    requestAnimationFrame(initScrollAnimations);
});


/* =========================================================
   Swiper — horizontal carousel (work cards)
   ========================================================= */
function initSwipers() {
    if (typeof Swiper === 'undefined') {
        setTimeout(initSwipers, 300);
        return;
    }

    // The production HTML uses inline Alpine+GSAP for the swiper sections.
    // Only init if there are plain swiper containers (not managed by Alpine).
    document.querySelectorAll('.swiper:not([x-data])').forEach(el => {
        new Swiper(el, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            freeMode: true,
            grabCursor: true,
        });
    });
}
document.addEventListener('DOMContentLoaded', initSwipers);


/* =========================================================
   Horizontal drag-scroll for work track (no Swiper needed)
   ========================================================= */
function initDragScroll() {
    document.querySelectorAll('.js-drag-scroll, [data-drag-scroll]').forEach(el => {
        let isDown = false;
        let startX;
        let scrollLeft;

        el.addEventListener('mousedown', e => {
            isDown = true;
            el.style.cursor = 'grabbing';
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        });
        el.addEventListener('mouseleave', () => {
            isDown = false;
            el.style.cursor = 'grab';
        });
        el.addEventListener('mouseup', () => {
            isDown = false;
            el.style.cursor = 'grab';
        });
        el.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
        });
    });
}
document.addEventListener('DOMContentLoaded', initDragScroll);


/* =========================================================
   Announcement bar — hide after scroll past 20px
   ========================================================= */
function initAnnouncementBar() {
    const bar = document.querySelector('[data-announce-bar]');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            bar.style.display = 'none';
        } else {
            bar.style.display = '';
        }
    }, { passive: true });
}
document.addEventListener('DOMContentLoaded', initAnnouncementBar);


/* =========================================================
   Footer reveal animation
   — background height grows as you scroll into the footer
   — content fades in on desktop; both set immediately on mobile
   ========================================================= */
function initFooterAnimation() {
    const footer = document.querySelector('.js-footer');
    const footerBackground = document.querySelector('.js-footer-background');
    const footerContent = document.querySelector('.js-footer-content');
    if (!footer || !footerBackground || !footerContent) return;

    const mm = gsap.matchMedia();

    mm.add('(pointer: fine)', () => {
        ScrollTrigger.create({
            trigger: footer,
            start: 'top 100%',
            end: 'bottom bottom',
            onUpdate: (self) => {
                gsap.set(footerBackground, { height: `${self.progress * 100}%` });
            },
        });

        gsap.set(footerContent, { opacity: 0 });
        gsap.to(footerContent, {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                end: 'bottom 110%',
                scrub: 1,
            },
        });
    });

    mm.add('(pointer: coarse)', () => {
        gsap.set(footerBackground, { height: '100%' });
        gsap.set(footerContent, { opacity: 1 });
    });
}
document.addEventListener('DOMContentLoaded', initFooterAnimation);
