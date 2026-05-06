import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Real-site order: 8 inline SVG logos + 4 image logos = 12 total.
const SLIDES = [
  { id: 'ninja', src: '/images/Logos/Client/Black/logo-ninja.svg', alt: 'SharkNinja' },
  { id: 'brand-01j76', src: '/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.webp', alt: 'Client logo' },
  { id: 'sn', src: '/images/Logos/Client/Black/SN.webp', alt: 'SN' },
  { id: 'kroger', src: '/images/Logos/Client/Black/logo-kroger.svg', alt: 'Kroger' },
  { id: 'redbull', src: '/images/Logos/Client/Black/red-bull-logo-black.webp', alt: 'Red Bull' },
  { id: 'depop', src: '/images/Logos/Client/Black/logo-depop.svg', alt: 'Depop' },
  { id: 'untitled', src: '/images/Logos/Client/Black/Untitled-design.webp', alt: 'Client logo' },
  { id: 'hubspot', src: '/images/Logos/Client/Black/logo-hubspot.svg', alt: 'HubSpot' },
  { id: 'boxxo', src: '/images/Logos/Client/Black/logo-boxxo.svg', alt: 'Client logo' },
  { id: 'sky', src: '/images/Logos/Client/Black/logo-sky.svg', alt: 'Sky' },
  { id: 'asos', src: '/images/Logos/Client/Black/logo-asos.svg', alt: 'ASOS' },
  { id: 'rtb', src: '/images/Logos/Client/Black/logo-rtb.svg', alt: 'RTB House' },
];

export default function LogoCarousel() {
  return (
    <section className="w-full pt-6 xl:pt-12 overflow-hidden">
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
              <div className="flex relative z-0 overflow-hidden w-[120vw]">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3}
                  speed={7000}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  loop={true}
                  loopAdditionalSlides={SLIDES.length}
                  loopedSlides={SLIDES.length}
                  allowTouchMove={true}
                  grabCursor={true}
                  className="w-full logo-carousel-swiper"
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
                          <div className="aspect-20/9 w-full h-full relative">
                            <img
                              src={slide.src}
                              alt={slide.alt}
                              className="w-full h-full object-contain absolute inset-0 transition-opacity"
                              loading="lazy"
                            />
                          </div>
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
