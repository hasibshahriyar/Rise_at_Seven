import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

// Slide definitions — all image-based
const SLIDES = [
  { type: 'img', id: 'logos1', src: '/images/Logos_2026-04-23-095313_xfhk.webp', alt: 'Client logos' },
  { type: 'img', id: 'cdnA', src: '/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.webp', alt: 'Client logo' },
  { type: 'img', id: 'sn', src: '/images/SN.webp', alt: 'SN' },
  { type: 'img', id: 'logos2', src: '/images/Logos_2026-04-23-101020_frxy.webp', alt: 'Client logos' },
  { type: 'img', id: 'redbull', src: '/images/Logos/Client/Black/red-bull-logo-black.webp', alt: 'Red Bull' },
  { type: 'img', id: 'untitled', src: '/images/Logos/Client/Black/Untitled-design.webp', alt: 'Client logo' },
  { type: 'img', id: 'logos1b', src: '/images/Logos_2026-04-23-095313_xfhk.webp', alt: 'Client logos' },
  { type: 'img', id: 'cdnAb', src: '/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.webp', alt: 'Client logo' },
  { type: 'img', id: 'snb', src: '/images/SN.webp', alt: 'SN' },
];

export default function LogoCarousel() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(pointer: fine)', () => {
      gsap.to(containerRef.current, {
        xPercent: -5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 100%',
          end: 'bottom -100%',
          scrub: true,
        },
      });
    });
    mm.add('(pointer: coarse)', () => {
      gsap.set(containerRef.current, { xPercent: 0 });
    });
    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section className="w-full pt-6 xl:pt-12 overflow-hidden" ref={sectionRef}>
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-20 w-full gap-y-2">

          {/* Left label */}
          <div className="col-span-20 flex items-center md:col-span-4 lg:col-span-3 xl:col-span-2">
            <h2 className="inline-flex flex-wrap text-balance text-left text-grey-900 text-sm/tight font-sans-primary font-medium tracking-tight sm:max-w-32">
              The agency behind&nbsp;…
            </h2>
          </div>

          {/* Carousel */}
          <div
            className="relative w-full col-span-20 md:col-span-16 lg:col-span-17 xl:col-span-18"
          >
            <div className="w-full relative overflow-hidden z-0">
              <div
                className="flex relative z-0 overflow-hidden w-[120vw]"
                ref={containerRef}
              >
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3}
                  speed={7000}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  loop={true}
                  className="w-full !ease-linear"
                  breakpoints={{
                    640: { slidesPerView: 2.5 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                    1440: { slidesPerView: 7.5 },
                    1920: { slidesPerView: 8.5 },
                  }}
                >
                  {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="w-20 py-5 relative lg:w-24">
                        <div className="w-full h-full relative">
                          {slide.type === 'svg' ? (
                            <div className="aspect-20/9 text-grey-900">
                              {slide.component}
                            </div>
                          ) : (
                            <div className="aspect-20/9 w-full h-full relative">
                              <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-full object-contain absolute inset-0 transition-opacity"
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Edge blurs */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#efeeec] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#efeeec] to-transparent z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
