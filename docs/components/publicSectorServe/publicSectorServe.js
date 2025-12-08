const publicSectorServeData = [
  {
    image: 'assets/img/gallery/software/software.webp',
    title: 'Municipal & County Governments',
    icon: 'la-city',
    challenge:
      'Managing fee collection, revenue tracking, and multi-department workflows with outdated, disconnected systems.',
    solution:
      'Slimrate consolidates disparate payment systems into one secure platform with department-level permissions and fund accounting support.',
    stats: [
      {
        label: 'Streamlined Operations',
        value: '100%',
        info: 'unified payment platform',
      },
      {
        label: 'Audit Ready',
        value: '24/7',
        info: 'real-time reporting',
      },
    ],
  },
  {
    image: 'assets/img/gallery/h-casual/1.webp',
    title: 'K–12 School Districts',
    icon: 'la-school',
    challenge:
      'Cafeteria payments, bookstore transactions, and student services spread across multiple disconnected systems.',
    solution:
      'One cloud-based platform for all campus payment needs with centralized reporting and easy staff training.',
    stats: [
      {
        label: 'All-in-One',
        value: '1',
        info: 'platform for all payments',
      },
      {
        label: 'Easy Training',
        value: 'Fast',
        info: 'staff onboarding',
      },
    ],
  },
  {
    image: 'assets/img/gallery/h-fine/1.webp',
    title: 'Colleges & Universities',
    icon: 'la-university',
    challenge:
      'Campus-wide payments for dining, parking, athletics, and student services require complex multi-location management.',
    solution:
      'Scalable cloud platform supporting unlimited locations, stations, and user roles with real-time analytics.',
    stats: [
      {
        label: 'Unlimited',
        value: '∞',
        info: 'locations supported',
      },
      {
        label: 'Real-Time',
        value: 'Live',
        info: 'dashboards & analytics',
      },
    ],
  },
  {
    image: 'assets/img/gallery/r-specialty/1.webp',
    title: 'Airports & Convention Centers',
    icon: 'la-plane-departure',
    challenge:
      'High-volume transaction environments require fast, reliable payment processing with minimal downtime.',
    solution:
      'Enterprise-grade hardware and software built for high-volume environments with 24/7/365 support.',
    stats: [
      {
        label: 'High Volume',
        value: '24/7',
        info: 'reliable uptime',
      },
      {
        label: 'Support',
        value: '365',
        info: 'days per year',
      },
    ],
  },
  {
    image: 'assets/img/gallery/h-bars/1.webp',
    title: 'Parks, Recreation & Community Centers',
    icon: 'la-tree',
    challenge:
      'Managing registrations, rentals, facility fees, and event payments across multiple locations.',
    solution:
      'Unified platform for all recreation services with mobile POS for field operations and events.',
    stats: [
      {
        label: 'Mobile Ready',
        value: '100%',
        info: 'field operations',
      },
      {
        label: 'Multi-Location',
        value: 'Yes',
        info: 'centralized management',
      },
    ],
  },
  {
    image: 'assets/img/gallery/r-grocery/1.webp',
    title: 'Healthcare & Public Health',
    icon: 'la-hospital',
    challenge:
      'Patient convenience payments, gift shops, cafés, and parking systems need secure, HIPAA-aligned processing.',
    solution:
      'Secure payment infrastructure with PCI-DSS compliance, encrypted data, and role-based access controls.',
    stats: [
      {
        label: 'Compliant',
        value: 'PCI',
        info: 'DSS certified',
      },
      {
        label: 'Encrypted',
        value: '100%',
        info: 'data protection',
      },
    ],
  },
  {
    image: 'assets/img/gallery/h-coffee/1.webp',
    title: 'Museums & Cultural Institutions',
    icon: 'la-palette',
    challenge:
      'Admissions, memberships, gift shops, rentals, and special events require flexible payment options.',
    solution:
      'Configurable POS with support for various payment types, digital wallets, and QR-based checkout.',
    stats: [
      {
        label: 'Flexible',
        value: 'All',
        info: 'payment types',
      },
      {
        label: 'Digital',
        value: 'Yes',
        info: 'wallets supported',
      },
    ],
  },
  {
    image: 'assets/img/gallery/r-liquor/1.webp',
    title: 'Tribal Governments & Enterprises',
    icon: 'la-users',
    challenge:
      'Complex tribal operations need customizable solutions respecting unique governance structures.',
    solution:
      'Fully configurable platform with GL code mapping, tax exemptions, and enterprise-wide reporting.',
    stats: [
      {
        label: 'Customizable',
        value: '100%',
        info: 'configuration',
      },
      {
        label: 'Tax Handling',
        value: 'Full',
        info: 'exemption support',
      },
    ],
  },
];

let currentPublicSectorSlide = 0;

function renderPublicSectorServe(slideIndex) {
  const item = publicSectorServeData[slideIndex];
  const contentEl = document.getElementById('public-sector-serve-content');

  const isMobile = window.innerWidth <= 768;
  contentEl.classList.remove('activeSlider');

  setTimeout(() => {
    const firstLevelClass = isMobile ? 'mobile-first-level' : '';
    const secondLevelClass = isMobile ? 'mobile-second-level' : '';
    const thirdLevelClass = isMobile ? 'mobile-third-level' : '';

    if (isMobile) {
      contentEl.innerHTML = `
<div class="${firstLevelClass}">
  <div class="image-container relative">
    <img src="${item.image}" alt="${item.title}" />
    <span class="font-bold"><i class="las ${item.icon}"></i> ${item.title}</span>
  </div>
  <div class="testimonial-text-container">
    <p class="text-blue h2Text margin-top-none">Challenge:</p>
    <p class="margin-top-small">${item.challenge}</p>
  </div>
</div>

<div class="${secondLevelClass}">
  <p class="h2Text text-green margin-top-medium">Solution:</p>
  <p class="margin-top-small">${item.solution}</p>
</div>

<div class="${thirdLevelClass}">
  ${item.stats
    .map(
      (stat) => `
    <div>
      <p class="font-bold">${stat.label}</p>
      <div class="stats-box">
        <p class="stats-value">${stat.value}</p>
        <p class="rise-info">${stat.info}</p>
      </div>
    </div>
  `
    )
    .join('')}
</div>
`;
    } else {
      contentEl.innerHTML = `
      <div class="image-container relative">
        <img src="${item.image}" alt="${item.title}" />
        <span class="font-bold"><i class="las ${item.icon}"></i> ${item.title}</span>
      </div>
      <div class="flex-1 testimonial-text-container desctopColumn">
        <div>
        <div>
        <p class="text-blue h2Text margin-top-none">Challenge:</p>
        <p class="margin-top-small">${item.challenge}</p>
        </div>
        <div>
        <p class="h2Text text-green margin-top-medium">Solution:</p>
        <p class="margin-top-small">${item.solution}</p>
        </div>
        </div>
        <div class="flex ">
          ${item.stats
            .map(
              (stat) => `
            <div>
              <p class="font-bold">${stat.label}</p>
              <div class="stats-box">
                <p class="stats-value">${stat.value}</p>
                <p class="rise-info">${stat.info}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
    }

    contentEl.classList.add('activeSlider');
  }, 300);
}

function renderPublicSectorDots() {
  const sliderDots = document.getElementById('public-sector-slider-dots');
  sliderDots.innerHTML = publicSectorServeData
    .map(
      (_, index) => `
    <div class="slider-dot ${
      index === currentPublicSectorSlide ? 'activeSlider' : ''
    }" onclick="goToPublicSectorSlide(${index})"></div>
  `
    )
    .join('');
}

function goToPublicSectorSlide(slideIndex) {
  currentPublicSectorSlide = slideIndex;
  renderPublicSectorServe(currentPublicSectorSlide);
  renderPublicSectorDots();
}

function nextPublicSectorSlide() {
  currentPublicSectorSlide = (currentPublicSectorSlide + 1) % publicSectorServeData.length;
  renderPublicSectorServe(currentPublicSectorSlide);
  renderPublicSectorDots();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('public-sector-serve-content')) {
    renderPublicSectorServe(currentPublicSectorSlide);
    renderPublicSectorDots();
    setInterval(nextPublicSectorSlide, 5000);
  }
});
