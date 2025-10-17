const testimonials = [
  {
    image: 'assets/img/gallery/c-testimonials/image (1).png',
    title: 'Golf Course',
    challenge:
      'Managing tee time bookings, membership renewals, pro shop sales, and restaurant operations with an outdated system.',
    solution:
      'A comprehensive POS system integrating all functions into a single platform.',
    stats: [
      {
        label: 'Increased Revenue',
        value: '20%',
        info: 'Rise in pro shop sales',
      },
      {
        label: 'Enhanced Customer Experience',
        value: '16%',
        info: 'Quicker check-ins',
      },
      // { label: 'Increased Memberships', value: '25%', info: 'growth in memberships' }
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (2).png',
    title: 'Supermarket',
    challenge:
      'Inventory management, long checkout times, and lack of data insights with an unscalable system.',
    solution:
      'Advanced inventory management, efficient checkout processes, and robust data analytics with our POS system.',
    stats: [
      {
        label: 'Inventory Accuracy',
        value: '50%',
        info: 'reduction in stockouts and overstock situations',
      },
      {
        label: 'Faster Checkouts',
        value: '30%',
        info: 'improvement in checkout speed',
      },
      // { label: 'Increased Memberships', value: '35%', info: 'growth in memberships' }
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (3).png',
    title: 'Quick Service Restaurant',
    challenge:
      'Slow order processing, inconsistent food quality, and difficulties in managing location with legacy systems.',
    solution:
      'A unified POS platform for order processing, kitchen management, and multi-location control.',
    stats: [
      {
        label: 'Faster Order Processing',
        value: '25%',
        info: 'reduction in processing time',
      },
      {
        label: 'Revenue Growth',
        value: '15%',
        info: 'increase in sales through efficient upselling',
      },
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (4).png',
    title: 'Convenience Store/Gas Station',
    challenge:
      'Managing inventory, sales reporting, and customer loyalty programs with manual processes.',
    solution:
      'Advanced inventory management, efficient checkout processes, and accurate accounting tools with our POS system.',
    stats: [
      {
        label: 'Cost Savings',
        value: '20%',
        info: 'reduction in monthly POS/processing costs',
      },
      {
        label: 'Increased Upselling',
        value: '15%',
        info: 'increase in sales of promotional items',
      },
      {
        label: 'Faster Checkouts',
        value: '25%',
        info: 'faster checkout speeds',
      },
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (5).png',
    title: 'Retail Boutique',
    challenge:
      'Managing inventory, sales reporting, and customer loyalty programs with manual processes.',
    solution:
      'Integrated inventory management, sales reporting, and customer loyalty programs with our POS system.',
    stats: [
      {
        label: 'Inventory Management',
        value: '40%',
        info: 'reduction in stock discrepancies',
      },
      {
        label: 'Reduced Monthly Fees',
        value: '80%',
        info: 'reduction in fees',
      },
    ],
  },
  {
    image: 'assets/img/gallery/c-testimonials/image (6).png',
    title: 'Sober House Network',
    challenge:
      'Managing multiple locations, tracking resident payments, scheduling counseling sessions, and ensuring inventory of daily essentials with manual processes',
    solution:
      'A tailored POS system for real-time tracking of payments, automated scheduling, and resident management.',
    stats: [
      {
        label: 'Improved Efficiency',
        value: '40%',
        info: 'reduction in administrative time',
      },
      {
        label: 'Accurate Tracking',
        value: '80%',
        info: 'reduction in errors with real-time updates',
      },
    ],
  },
];

let currentSlide = 0;

function renderTestimonial(slideIndex) {
  const testimonial = testimonials[slideIndex];
  const testimonialContent = document.getElementById(
    'testimonial-content'
  );

  const isMobile = window.innerWidth <= 768;
  testimonialContent.classList.remove('activeSlider');

  setTimeout(() => {
    const copyMarkup = `
      <div class="testimonial-copy">
        <div class="testimonial-copy-block">
          <p class="testimonial-label testimonial-label--challenge">Challenge:</p>
          <p class="testimonial-description">${testimonial.challenge}</p>
        </div>
        <div class="testimonial-copy-block">
          <p class="testimonial-label testimonial-label--solution">Solution:</p>
          <p class="testimonial-description">${testimonial.solution}</p>
        </div>
      </div>
    `;

    const statsMarkup = `
      <div class="stat-cards">
        ${testimonial.stats
          .map(
            (stat) => `
              <div class="stat-card">
                <p class="stat-card__label">${stat.label}</p>
                <p class="stat-card__value">${stat.value}</p>
                <p class="stat-card__info">${stat.info}</p>
              </div>
            `
          )
          .join('')}
      </div>
    `;

    if (isMobile) {
      testimonialContent.innerHTML = `
<div class="mobile-first-level">
  <div class="image-container relative">
    <img src="${testimonial.image}" alt="${testimonial.title}" />
    <span class="font-bold">${testimonial.title}</span>
  </div>
  ${copyMarkup}
</div>

${statsMarkup}
`;
    } else {
      testimonialContent.innerHTML = `
      <div class="image-container relative">
        <img src="${testimonial.image}" alt="${testimonial.title}" />
        <span class="font-bold">${testimonial.title}</span>
      </div>
      <div class="flex-1 testimonial-text-container desctopColumn">
        ${copyMarkup}
        ${statsMarkup}
      </div>
    `;
    }

    testimonialContent.classList.add('activeSlider');
  }, 300);
}

function renderDots() {
  const sliderDots = document.getElementById('slider-dots');
  sliderDots.innerHTML = testimonials
    .map(
      (_, index) => `
    <div class="slider-dot ${
      index === currentSlide ? 'activeSlider' : ''
    }" onclick="goToSlide(${index})"></div>
  `
    )
    .join('');
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  renderTestimonial(currentSlide);
  renderDots();
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length; 
  renderTestimonial(currentSlide);
  renderDots();
}

renderTestimonial(currentSlide);
renderDots();

setInterval(nextSlide, 5000);