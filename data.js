// Work cards - using actual images from riseatseven CDN
const works = [
  { cat:'Car rental', title:'SIXT', year:'2023-2025', desc:'An extra 3m clicks regionally through SEO', img:'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=7fcfb7cf408348f211be1dd360e836f2' },
  { cat:'Card Machines', title:'Dojo - B2B', year:'2021-2025', desc:'A B2B success story for Dojo card machines', img:'https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268&s=59071dd8ec5c98bf4beb8ab991662545' },
  { cat:'Trade', title:'Magnet Trade - B2B', year:'2023-2024', desc:'A full service SEO success story 170%+ increase', img:'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=5aa6481473f49f30cb9d31958151b155' },
  { cat:'Esims', title:'Leading E Sim brand globally', year:'2023-2025', desc:'Increasing brand and non brand visibility UK/ES', img:'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1774455015&s=f09e1478d33c667170eb4158c510d84c' },
  { cat:'Trainers', title:'JD Sports', year:'2025', desc:'65% up YoY in clicks for JDSports FR, IT, ES', img:'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=989324f6cb73ebec5c627458472322a8' },
  { cat:'Easter Breaks', title:'Parkdean Resorts', year:'2019-2025', desc:'Dominating Google and AI search', img:'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=ff193da32959495c96e4b9c899031b7a' },
  { cat:'Rechargeable Lights', title:'Pooky', year:'2025', desc:'Driving demand for Pooky Rechargeable Lights', img:'https://rise-atseven.transforms.svdcdn.com/production/images/temp_image_43CEDE6C-4430-479F-9DBF-B348FA9AC991.WEBP?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858840&s=49ec6f7fee43956238301edef736c980' },
  { cat:'UK holidays', title:'Parkdean Resorts', year:'2019-2025', desc:'Social search and multi channel content to #1', img:'https://rise-atseven.transforms.svdcdn.com/production/images/data.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751376823&s=a1334e1bca31516e1f0412fe97f5609e' },
  { cat:'Beauty Dupes', title:'Revolution Beauty', year:'2022-2025', desc:"Building the UK's leading beauty dupe brand", img:'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1758739812&s=02437368648a357eeed095e149b397a0' },
  { cat:'Outfits', title:'PrettyLittleThing', year:'2021-2023', desc:'Driving discovery for everything "outfits" for PLT', img:'https://rise-atseven.transforms.svdcdn.com/production/images/IMG_4280-2.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=86635512224d16c5fe9fdd610c45a64a' },
];
document.getElementById('workTrack').innerHTML = works.map(w => `
  <a href="#" class="work-card"><img src="${w.img}" alt="${w.title}" loading="lazy"><div class="work-overlay"><div><span class="work-cat">${w.cat}</span><div class="work-year">[${w.year}]</div></div><div><div class="work-title">${w.title}</div><div class="work-desc">${w.desc}</div></div></div></a>
`).join('');

// Services
const svcs = ['Digital PR','Organic Social & Content','Search & Growth Strategy','Content Experience','Data & Insights','Onsite SEO','B2B Marketing','Social SEO/Search'];
document.getElementById('servicesList').innerHTML = svcs.map(s => `
  <a href="#" class="service-item fade-in"><span class="svc-name">${s}</span><svg class="svc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></a>
`).join('');

// Why cards
const whys = [
  { t:'Pioneers', p:"We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search." },
  { t:'Award Winning', p:"A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards." },
  { t:'Speed', p:"People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? We chase consumers, not algorithms. Ideas to result within 60 minutes." },
];
document.getElementById('whyGrid').innerHTML = whys.map(w => `<div class="why-card fade-in"><h3>${w.t}</h3><p>${w.p}</p></div>`).join('');

// Blog
const blogs = [
  { tag:'News', title:"Ryan McNamara Is Now Rise at Seven's Global Operations Director", author:'Carrie Rose', time:'2 mins' },
  { tag:'Food/Hospitality/Drink', title:'Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth in Chocolate Confectionery', author:'Ray Saddiq', time:'2 mins' },
  { tag:'Food/Hospitality/Drink', title:'Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz', author:'Carrie Rose', time:'2 mins' },
];
document.getElementById('blogGrid').innerHTML = blogs.map(b => `
  <a href="#" class="blog-card fade-in"><div class="blog-img" style="background:#e9e9e9;display:flex;align-items:center;justify-content:center"><svg style="width:50px;opacity:.08" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 21" fill="#111"><path d="M9.56 12.15c2.59-.92 3.78-3.05 3.78-5.75 0-1.73-.57-3.51-1.84-4.73C10.1.3 8.07 0 6.18 0H0v19.98h2.92v-6.18l10.42 6.18v-3.12l-7.11-4.27 1.39-.07c.65 0 1.35-.16 1.94-.37zM4.91 10.32H2.92V2.67h3.08c2.32 0 4.43 1.19 4.43 3.73 0 3.19-2.92 3.92-5.51 3.92z"/><path d="M147.47 8.21v.48V20.36h2.56V10.18l17.18 10.18V17.24L147.47 5.4v2.81z"/></svg></div><div class="blog-body"><div class="blog-tag">${b.tag}</div><div class="blog-title">${b.title}</div><div class="blog-meta">${b.author} · ${b.time}</div></div></a>
`).join('');
