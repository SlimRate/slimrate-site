const publicSectorServeData = [
  {
    icon: 'la-city',
    title: 'Municipal & County Governments',
    description: 'Streamline fee collection and revenue management across departments'
  },
  {
    icon: 'la-school',
    title: 'K–12 School Districts',
    description: 'Cafeterias, bookstores, and student services all in one platform'
  },
  {
    icon: 'la-university',
    title: 'Colleges & Universities',
    description: 'Campus-wide payment solutions for dining, parking, and services'
  },
  {
    icon: 'la-plane-departure',
    title: 'Airports & Convention Centers',
    description: 'High-volume transaction handling for public venues'
  },
  {
    icon: 'la-landmark',
    title: 'State Agencies & Authorities',
    description: 'Enterprise-scale solutions with full audit compliance'
  },
  {
    icon: 'la-ambulance',
    title: 'Public Safety & Emergency Services',
    description: 'Reliable payment systems for critical service departments'
  },
  {
    icon: 'la-tree',
    title: 'Parks, Recreation & Community Centers',
    description: 'Manage registrations, rentals, and facility fees with ease'
  },
  {
    icon: 'la-hospital',
    title: 'Public Health & Hospital Systems',
    description: 'Patient convenience payments and facility services'
  },
  {
    icon: 'la-palette',
    title: 'Museums & Cultural Institutions',
    description: 'Admissions, memberships, gift shops, and special events'
  },
  {
    icon: 'la-users',
    title: 'Tribal Governments & Enterprises',
    description: 'Comprehensive payment solutions for tribal operations'
  }
];

let currentPublicSectorSlide = 0;
const itemsPerSlide = window.innerWidth <= 768 ? 2 : 5;

function getItemsPerSlide() {
  return window.innerWidth <= 768 ? 2 : 5;
}

function getTotalSlides() {
  return Math.ceil(publicSectorServeData.length / getItemsPerSlide());
}

function renderPublicSectorServe(slideIndex) {
  const contentEl = document.getElementById('public-sector-serve-content');
  if (!contentEl) return;
  
  const perSlide = getItemsPerSlide();
  const startIdx = slideIndex * perSlide;
  const endIdx = Math.min(startIdx + perSlide, publicSectorServeData.length);
  const items = publicSectorServeData.slice(startIdx, endIdx);

  contentEl.classList.remove('activeSlider');

  setTimeout(() => {
    contentEl.innerHTML = `
      <div class="public-sector-cards-grid">
        ${items.map(item => `
          <div class="public-sector-card">
            <div class="public-sector-card__icon">
              <i class="las ${item.icon}"></i>
            </div>
            <h4 class="public-sector-card__title">${item.title}</h4>
            <p class="public-sector-card__descr">${item.description}</p>
          </div>
        `).join('')}
      </div>
    `;
    contentEl.classList.add('activeSlider');
  }, 300);
}

function renderPublicSectorDots() {
  const sliderDots = document.getElementById('public-sector-slider-dots');
  if (!sliderDots) return;
  
  const totalSlides = getTotalSlides();
  sliderDots.innerHTML = Array.from({ length: totalSlides }, (_, index) => `
    <div class="slider-dot ${index === currentPublicSectorSlide ? 'activeSlider' : ''}" 
         onclick="goToPublicSectorSlide(${index})"></div>
  `).join('');
}

function goToPublicSectorSlide(slideIndex) {
  currentPublicSectorSlide = slideIndex;
  renderPublicSectorServe(currentPublicSectorSlide);
  renderPublicSectorDots();
}

function nextPublicSectorSlide() {
  currentPublicSectorSlide = (currentPublicSectorSlide + 1) % getTotalSlides();
  renderPublicSectorServe(currentPublicSectorSlide);
  renderPublicSectorDots();
}

// Handle resize
window.addEventListener('resize', function() {
  const totalSlides = getTotalSlides();
  if (currentPublicSectorSlide >= totalSlides) {
    currentPublicSectorSlide = 0;
  }
  renderPublicSectorServe(currentPublicSectorSlide);
  renderPublicSectorDots();
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('public-sector-serve-content')) {
    renderPublicSectorServe(currentPublicSectorSlide);
    renderPublicSectorDots();
    setInterval(nextPublicSectorSlide, 5000);
  }
});
