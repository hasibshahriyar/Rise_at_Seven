// Work cards — LOCAL images from images/cdn/
const works = [
  { cat:'Car rental',        title:'SIXT',                      year:'2023-2025', desc:'An extra 3m clicks regionally through SEO',              img:'images/cdn/Screenshot-2025-06-23-at-23.14.49.webp' },
  { cat:'Card Machines',     title:'Dojo - B2B',                year:'2021-2025', desc:'A B2B success story for Dojo card machines',              img:'images/cdn/WhatsApp-Image-2025-06-03-at-08.34.50.webp' },
  { cat:'Trade',             title:'Magnet Trade - B2B',        year:'2023-2024', desc:'A full service SEO success story — 170%+ increase',       img:'images/cdn/Screenshot-2025-06-23-at-23.16.14.webp' },
  { cat:'eSIMs',             title:'Leading eSim Brand Globally',year:'2023-2025', desc:'Increasing brand and non-brand visibility UK/ES',         img:'images/cdn/0B5A6875.webp' },
  { cat:'Trainers',          title:'JD Sports',                 year:'2025',      desc:'65% up YoY in clicks for JD Sports FR, IT, ES',          img:'images/cdn/Screenshot-2025-06-23-at-22.39.35.webp' },
  { cat:'Easter Breaks',     title:'Parkdean Resorts',          year:'2019-2025', desc:'Dominating Google and AI search',                         img:'images/cdn/d4df0d30-d590-4e94-9056-9491f4beacba.webp' },
  { cat:'Rechargeable Lights',title:'Pooky',                    year:'2025',      desc:'Driving demand for Pooky Rechargeable Lights',            img:'images/cdn/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.webp' },
  { cat:'UK Holidays',       title:'Parkdean Resorts',          year:'2019-2025', desc:'Social search and multi channel content to #1',           img:'images/cdn/data.webp' },
  { cat:'Beauty Dupes',      title:'Revolution Beauty',         year:'2022-2025', desc:"Building the UK's leading beauty dupe brand",             img:'images/cdn/Screenshot-2025-09-24-at-11.47.25.webp' },
  { cat:'Outfits',           title:'PrettyLittleThing',         year:'2021-2023', desc:'Driving discovery for everything "outfits" for PLT',      img:'images/cdn/IMG_4280-2.webp' },
  { cat:'Airline',           title:'Emirates',                  year:'2022-2024', desc:'Taking Emirates to new heights across organic search',    img:'images/FirstSection/Emirates-airpline-in-flight.webp' },
  { cat:'Energy Drinks',     title:'Red Bull',                  year:'2021-2024', desc:'Powering Red Bull\'s organic visibility globally',         img:'images/FirstSection/RedBull-Instagram-Post-45.webp' },
];

document.getElementById('workTrack').innerHTML = works.map(w => `
  <a href="#" class="work-card">
    <img src="${w.img}" alt="${w.title}" loading="lazy">
    <div class="work-overlay">
      <div>
        <span class="work-cat">${w.cat}</span>
        <div class="work-year">[${w.year}]</div>
      </div>
      <div>
        <div class="work-title">${w.title}</div>
        <div class="work-desc">${w.desc}</div>
      </div>
    </div>
  </a>`).join('');

// Services
const svcs = ['Digital PR','Organic Social & Content','Search & Growth Strategy','Content Experience','Data & Insights','Onsite SEO','B2B Marketing','Social SEO/Search'];
document.getElementById('servicesList').innerHTML = svcs.map(s => `
  <a href="#" class="service-item fade-in">
    <span class="svc-name">${s}</span>
    <svg class="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
  </a>`).join('');

// Why cards
const whys = [
  { t:'Pioneers',      p:"We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search." },
  { t:'Award Winning', p:"A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards." },
  { t:'Speed',         p:"People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? We chase consumers, not algorithms. Ideas to result within 60 minutes." },
];
document.getElementById('whyGrid').innerHTML = whys.map(w =>
  `<div class="why-card fade-in"><h3>${w.t}</h3><p>${w.p}</p></div>`).join('');

// Blog — using locally downloaded images from images/cdn/blog/import/
const blogs = [
  {
    tag: 'News',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: 'Carrie Rose', time: '2 mins',
    img: 'images/cdn/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.webp'
  },
  {
    tag: 'Food / Hospitality / Drink',
    title: 'Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth in Chocolate Confectionery',
    author: 'Ray Saddiq', time: '2 mins',
    img: 'images/cdn/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.webp'
  },
  {
    tag: 'Food / Hospitality / Drink',
    title: 'Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz',
    author: 'Carrie Rose', time: '2 mins',
    img: 'images/cdn/Noomz1-4.webp'
  },
];
document.getElementById('blogGrid').innerHTML = blogs.map(b => `
  <a href="#" class="blog-card fade-in">
    <div class="blog-img"><img src="${b.img}" alt="${b.title}" loading="lazy"></div>
    <div class="blog-body">
      <div class="blog-tag">${b.tag}</div>
      <div class="blog-title">${b.title}</div>
      <div class="blog-meta">${b.author} &middot; ${b.time} read</div>
    </div>
  </a>`).join('');
